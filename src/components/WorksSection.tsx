const projects = [
  {
    cat: "Finance · Data Analytics",
    title: "Capital Markets Weekly Update",
    desc: "A weekly bilingual interactive financial dashboard with real-time market data visualization and analysis reporting.",
    link: "https://capital-markets-weekly.lovable.app/",
    linkLabel: "View Live Project",
  },
  {
    cat: "Social Media · Audience Analytics",
    title: "Social Media Performance Dashboard",
    desc: "A data-driven performance report analyzing organic reach, engagement rates, and audience growth across TikTok, Douyin, and Xiaohongshu.",
    link: "https://taliz629.github.io/social_media_performance_2-18v4/",
    linkLabel: "View Live Project",
  },
  {
    cat: "Video Production · Documentary",
    title: "The Food Riders of OCC",
    desc: "Edited a 3-minute documentary on a campus organization that takes excess food from the Orange Coast College cafeteria and delivers it to local food pantries serving Orange County's homeless population via bicycles and trailers.",
    link: "https://youtu.be/nl1PePNogak",
    linkLabel: "Watch Video",
    thumbnail: "https://img.youtube.com/vi/nl1PePNogak/hqdefault.jpg",
  },
];

const WorksSection = () => (
  <section id="work" className="px-[6%] md:px-[10%] py-24 bg-background">
    <p className="section-label">04 — Selected Work</p>
    <h2 className="section-title">Data-Driven<br /><em>Projects</em></h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-warm-white border border-border rounded-sm overflow-hidden no-underline block hover:-translate-y-1 hover:shadow-xl transition-all group"
        >
          {p.thumbnail && (
            <div className="relative w-full aspect-video overflow-hidden bg-muted">
              <img
                src={p.thumbnail}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-deep/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-background/90 text-deep text-[0.75rem] tracking-[0.1em] uppercase px-4 py-2 rounded-sm">
                  ▶ Play
                </span>
              </div>
            </div>
          )}
          <div className="p-6">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-terracotta mb-1.5">{p.cat}</p>
            <h3 className="text-[1.1rem] font-medium text-deep mb-2 leading-snug">{p.title}</h3>
            <p className="text-[0.8rem] text-light-text leading-relaxed mb-4">{p.desc}</p>
            <span className="text-[0.72rem] tracking-[0.12em] uppercase text-terracotta flex items-center gap-1.5">
              {p.linkLabel} ↗ <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default WorksSection;
