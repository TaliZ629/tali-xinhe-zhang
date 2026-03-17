const AboutSection = () => (
  <section id="about" className="px-[6%] md:px-[10%] py-24 bg-warm-white">
    <p className="section-label">01 — About</p>
    <h2 className="section-title">Strategy Meets<br /><em>Execution</em></h2>
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-20 items-start">
      <div className="space-y-5">
        <p className="text-[0.95rem] text-medium leading-[1.85]">
          I'm Xinhe (Tali) Zhang — a cross-functional professional with experience spanning operations, data analytics, media production, and marketing. My career has taken me across industries and continents, from China Central Television in Beijing to Celestica's global operations in Shanghai.
        </p>
        <p className="text-[0.95rem] text-medium leading-[1.85]">
          Currently based in New York City, I bring a unique blend of analytical thinking and creative execution. Whether auditing $82M in purchase orders, producing corporate videos, or growing social media channels across platforms, I approach every challenge with curiosity and rigor.
        </p>
      </div>
      <div className="bg-warm-white border border-border rounded-sm p-7">
        <h4 className="text-[0.7rem] tracking-[0.2em] uppercase text-terracotta mb-4">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Python", "Tableau", "SQL", "Google Analytics", "Excel",
            "Adobe Creative Cloud", "ServiceNow", "Ivalua",
            "Microsoft Dynamics 365", "SharePoint", "Google Workspace",
            "Bilingual EN/CH", "Data Visualization", "Financial Analysis",
          ].map(tag => (
            <span key={tag} className="bg-tag-bg text-medium text-[0.73rem] px-3 py-1 rounded-sm border border-border">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
