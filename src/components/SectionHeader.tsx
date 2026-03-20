import { SectionCommentsProvider, CommentsTrigger, CommentsContent } from "@/components/SectionComments";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  section: string;
  center?: boolean;
}

const SectionHeader = ({ label, title, section, center }: SectionHeaderProps) => (
  <SectionCommentsProvider section={section}>
    <div className={center ? "text-center" : ""}>
      <div className="flex items-baseline flex-wrap gap-0">
        <p className="section-label">{label}</p>
      </div>
      <div className="flex items-baseline flex-wrap gap-0">
        <h2 className="section-title mb-0">{title}</h2>
        <CommentsTrigger />
      </div>
      <CommentsContent />
      <div className="mb-12" />
    </div>
  </SectionCommentsProvider>
);

export default SectionHeader;
