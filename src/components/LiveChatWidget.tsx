import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle, X, Send } from "lucide-react";

interface ChatMessage {
  id: string;
  sender_type: string;
  content: string;
  created_at: string;
}

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Get or create conversation from localStorage
  useEffect(() => {
    const storedId = localStorage.getItem("chat_conversation_id");
    if (storedId) {
      setConversationId(storedId);
    }
  }, []);

  // Fetch messages when conversation exists and chat opens
  useEffect(() => {
    if (!conversationId || !isOpen) return;
    
    const fetchMessages = async () => {
      const { data } = await supabase
        .from("chat_messages")
        .select("*")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true });
      if (data) setMessages(data);
    };
    fetchMessages();

    // Subscribe to realtime
    const channel = supabase
      .channel(`chat-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as ChatMessage]);
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [conversationId, isOpen]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startConversation = async () => {
    const { data } = await supabase
      .from("chat_conversations")
      .insert({ visitor_name: "Visitor" })
      .select("id")
      .single();
    if (data) {
      setConversationId(data.id);
      localStorage.setItem("chat_conversation_id", data.id);
      return data.id;
    }
    return null;
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    setSending(true);
    let convId = conversationId;
    if (!convId) {
      convId = await startConversation();
      if (!convId) { setSending(false); return; }
    }
    await supabase.from("chat_messages").insert({
      conversation_id: convId,
      sender_type: "visitor",
      content: input.trim().slice(0, 1000),
    });
    setInput("");
    setSending(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-terracotta text-primary-foreground flex items-center justify-center shadow-lg hover:bg-dusty-rose transition-all hover:scale-105"
          aria-label="Open live chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] max-h-[480px] bg-card border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-terracotta text-primary-foreground">
            <div>
              <p className="text-sm font-medium">Live Chat</p>
              <p className="text-[0.65rem] opacity-80">Leave a message — Tali will reply!</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80 transition-opacity">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 min-h-[200px] max-h-[320px] bg-background">
            {messages.length === 0 && (
              <p className="text-[0.78rem] text-light-text text-center mt-8">
                👋 Hi! Send a message and Tali will get back to you.
              </p>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender_type === "visitor" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-[0.8rem] leading-relaxed ${
                    msg.sender_type === "visitor"
                      ? "bg-terracotta text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-2 border-t border-border flex gap-2 bg-card">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              maxLength={1000}
              className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
            />
            <button
              onClick={handleSend}
              disabled={sending || !input.trim()}
              className="text-terracotta hover:text-dusty-rose disabled:opacity-40 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;
