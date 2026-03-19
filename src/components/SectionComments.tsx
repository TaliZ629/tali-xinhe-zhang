import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

const SectionComments = ({ section }: { section: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const fetchComments = async () => {
    const { data } = await supabase
      .from("section_comments")
      .select("*")
      .eq("section", section)
      .order("created_at", { ascending: false });
    if (data) setComments(data);
  };

  useEffect(() => {
    if (isOpen) fetchComments();
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;
    setSubmitting(true);
    await supabase.from("section_comments").insert({
      section,
      author_name: name.trim().slice(0, 100),
      content: content.trim().slice(0, 1000),
    });
    setContent("");
    await fetchComments();
    setSubmitting(false);
  };

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
    <div className="mt-10 border-t border-border pt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[0.75rem] tracking-[0.15em] uppercase text-muted-foreground hover:text-terracotta transition-colors"
      >
        <MessageCircle size={14} />
        {isOpen ? "Hide Comments" : `Comments${comments.length > 0 ? ` (${comments.length})` : ""}`}
      </button>

      {isOpen && (
        <div className="mt-4 space-y-4 max-w-[600px]">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              className="text-sm"
            />
            <Textarea
              placeholder="Leave a comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={1000}
              className="text-sm min-h-[60px]"
            />
            <Button
              type="submit"
              disabled={submitting || !name.trim() || !content.trim()}
              size="sm"
              className="bg-terracotta text-primary-foreground hover:bg-dusty-rose text-[0.72rem] tracking-[0.1em] uppercase"
            >
              {submitting ? "Posting..." : "Post Comment"}
            </Button>
          </form>

          {comments.length > 0 && (
            <div className="space-y-3 pt-2">
              {comments.map((c) => (
                <div key={c.id} className="border border-border rounded-sm p-4 bg-card">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[0.8rem] font-medium text-deep">{c.author_name}</span>
                    <span className="text-[0.65rem] text-light-text">{timeAgo(c.created_at)}</span>
                  </div>
                  <p className="text-[0.8rem] text-medium leading-relaxed">{c.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionComments;
