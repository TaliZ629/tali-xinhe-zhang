import { useState, useEffect, createContext, useContext } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface SectionCommentsContextValue {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  count: number;
  comments: Comment[];
  authorName: string;
  setAuthorName: (v: string) => void;
  content: string;
  setContent: (v: string) => void;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const SectionCommentsContext = createContext<SectionCommentsContextValue | null>(null);

export const SectionCommentsProvider = ({ section, children }: { section: string; children: React.ReactNode }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [count, setCount] = useState(0);

  const fetchComments = async () => {
    const { data } = await supabase
      .from("section_comments")
      .select("id, author_name, content, created_at")
      .eq("section", section)
      .order("created_at", { ascending: false });
    if (data) {
      setComments(data);
      setCount(data.length);
    }
  };

  useEffect(() => {
    supabase
      .from("section_comments")
      .select("id", { count: "exact", head: true })
      .eq("section", section)
      .then(({ count: c }) => { if (c !== null) setCount(c); });
  }, [section]);

  useEffect(() => {
    if (isOpen) fetchComments();
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !authorName.trim()) return;
    setSubmitting(true);
    await supabase.from("section_comments").insert({
      section,
      author_name: authorName.trim().slice(0, 100),
      content: content.trim().slice(0, 1000),
    });
    setContent("");
    await fetchComments();
    setSubmitting(false);
  };

  return (
    <SectionCommentsContext.Provider value={{ isOpen, setIsOpen, count, comments, authorName, setAuthorName, content, setContent, submitting, handleSubmit }}>
      {children}
    </SectionCommentsContext.Provider>
  );
};

export const CommentsTrigger = () => {
  const ctx = useContext(SectionCommentsContext);
  if (!ctx) return null;
  const { isOpen, setIsOpen, count } = ctx;

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-terracotta transition-colors"
      title="Toggle comments"
      style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
    >
      <MessageCircle className="w-[1em] h-[1em]" />
      {count > 0 && <span className="text-[0.4em] tracking-[0.12em] uppercase">{count}</span>}
      {isOpen ? <ChevronUp className="w-[0.5em] h-[0.5em]" /> : <ChevronDown className="w-[0.5em] h-[0.5em]" />}
    </button>
  );
};

export const CommentsContent = () => {
  const ctx = useContext(SectionCommentsContext);
  if (!ctx || !ctx.isOpen) return null;
  const { comments, authorName, setAuthorName, content, setContent, submitting, handleSubmit } = ctx;

  const timeAgo = (date: string) => {
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
  };

  return (
    <div className="mt-4 mb-2 space-y-3 max-w-[560px]">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Your name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          maxLength={100}
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <Textarea
          placeholder="Leave a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={1000}
          className="text-sm min-h-[44px] resize-none"
          rows={1}
        />
        <div className="flex justify-start">
          <Button
            type="submit"
            disabled={submitting || !content.trim() || !authorName.trim()}
            size="sm"
            className="bg-terracotta text-primary-foreground hover:bg-dusty-rose text-[0.7rem] tracking-[0.08em] uppercase"
          >
            Post
          </Button>
        </div>
      </form>

      {comments.length > 0 && (
        <div className="space-y-2">
          {comments.map((c) => (
            <div key={c.id} className="border border-border rounded-sm px-4 py-3 bg-card">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="text-[0.65rem] text-light-text">{timeAgo(c.created_at)}</span>
              </div>
              <p className="text-[0.8rem] text-medium leading-relaxed">{c.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsTrigger;
