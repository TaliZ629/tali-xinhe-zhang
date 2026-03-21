import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Send } from "lucide-react";
import { useAdminNotifications } from "@/hooks/use-admin-notifications";

interface Conversation {
  id: string;
  visitor_name: string;
  status: string;
  created_at: string;
  updated_at: string;
  last_message?: string;
}

interface ChatMessage {
  id: string;
  sender_type: string;
  content: string;
  created_at: string;
}

const AdminChat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConv, setSelectedConv] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Fetch conversations
  useEffect(() => {
    const fetchConversations = async () => {
      const { data } = await supabase
        .from("chat_conversations")
        .select("*")
        .order("updated_at", { ascending: false });
      if (data) setConversations(data);
    };
    fetchConversations();

    const channel = supabase
      .channel("admin-conversations")
      .on("postgres_changes", { event: "*", schema: "public", table: "chat_conversations" }, () => {
        fetchConversations();
      })
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "chat_messages" }, () => {
        fetchConversations();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  // Fetch messages for selected conversation
  useEffect(() => {
    if (!selectedConv) return;

    const fetchMessages = async () => {
      const { data } = await supabase
        .from("chat_messages")
        .select("*")
        .eq("conversation_id", selectedConv)
        .order("created_at", { ascending: true });
      if (data) setMessages(data);
    };
    fetchMessages();

    const channel = supabase
      .channel(`admin-msgs-${selectedConv}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
          filter: `conversation_id=eq.${selectedConv}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as ChatMessage]);
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [selectedConv]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleReply = async () => {
    if (!reply.trim() || !selectedConv) return;
    setSending(true);
    await supabase.from("chat_messages").insert({
      conversation_id: selectedConv,
      sender_type: "admin",
      content: reply.trim().slice(0, 2000),
    });
    setReply("");
    setSending(false);
  };

  const timeAgo = (date: string) => {
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "now";
    if (mins < 60) return `${mins}m`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h`;
    return `${Math.floor(hrs / 24)}d`;
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-[300px] border-r border-border bg-card overflow-y-auto">
        <div className="px-5 py-4 border-b border-border">
          <h1 className="text-lg font-medium text-deep">Admin Chat</h1>
          <p className="text-[0.72rem] text-light-text">{conversations.length} conversations</p>
        </div>
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => setSelectedConv(conv.id)}
            className={`w-full text-left px-5 py-4 border-b border-border hover:bg-muted/50 transition-colors ${
              selectedConv === conv.id ? "bg-muted" : ""
            }`}
          >
            <div className="flex justify-between items-baseline">
              <span className="text-[0.82rem] font-medium text-deep">{conv.visitor_name}</span>
              <span className="text-[0.65rem] text-light-text">{timeAgo(conv.updated_at)}</span>
            </div>
            <p className="text-[0.72rem] text-light-text mt-0.5 truncate">
              {conv.status === "active" ? "🟢 Active" : "Closed"}
            </p>
          </button>
        ))}
        {conversations.length === 0 && (
          <p className="text-[0.8rem] text-light-text text-center py-10">No conversations yet</p>
        )}
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {!selectedConv ? (
          <div className="flex-1 flex items-center justify-center text-light-text text-sm">
            Select a conversation to reply
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender_type === "admin" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[60%] px-4 py-2.5 rounded-lg text-[0.82rem] leading-relaxed ${
                      msg.sender_type === "admin"
                        ? "bg-terracotta text-primary-foreground rounded-br-none"
                        : "bg-muted text-foreground rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                    <p className={`text-[0.6rem] mt-1 ${msg.sender_type === "admin" ? "opacity-70" : "text-light-text"}`}>
                      {new Date(msg.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Reply input */}
            <div className="px-4 py-3 border-t border-border flex gap-3 bg-card">
              <input
                type="text"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleReply(); }
                }}
                placeholder="Type a reply..."
                maxLength={2000}
                className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground px-3 py-2 border border-border rounded-md"
              />
              <button
                onClick={handleReply}
                disabled={sending || !reply.trim()}
                className="px-4 py-2 bg-terracotta text-primary-foreground rounded-md hover:bg-dusty-rose disabled:opacity-40 transition-colors flex items-center gap-2 text-sm"
              >
                <Send size={16} /> Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminChat;
