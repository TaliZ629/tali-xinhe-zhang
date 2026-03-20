import { SectionCommentsProvider, CommentsTrigger, CommentsContent } from "@/components/SectionComments";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  section: string;
  center?: boolean;
  labelExtra?: React.ReactNode;
}

const SectionHeader = ({ label, title, section, center, labelExtra }: SectionHeaderProps) => (
  <SectionCommentsProvider section={section}>
    <div className={center ? "text-center" : ""}>
      <div className="flex items-center flex-wrap gap-0">
        <p className="section-label mb-0">{label}</p>
        {labelExtra && <span className="mx-3 text-light-text text-[0.65rem] select-none">·</span>}
        {labelExtra && <span className="text-[0.72rem] tracking-wide text-light-text">{labelExtra}</span>}
      </div>
      <div>
        <h2 className="section-title mb-0 inline">{title}</h2>
        <span className="inline-flex align-baseline ml-4"><CommentsTrigger /></span>
      </div>
      <CommentsContent />
      <div className="mb-12" />
    </div>
  </SectionCommentsProvider>
);

export default SectionHeader;
