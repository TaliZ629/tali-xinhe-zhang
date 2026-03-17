import thumbCapitalMarkets from "@/assets/thumb-capital-markets.png";
import thumbSocialMedia from "@/assets/thumb-social-media.png";

const getThumbnail = (link: string, staticThumb?: string): string | null => {
  if (staticThumb) return staticThumb;
  const ytMatch = link.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/);
  if (ytMatch) return `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
  const vimeoMatch = link.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://vumbnail.com/${vimeoMatch[1]}.jpg`;
  return null;
};

const projects = [
  {
    cat: "Finance · Data Analytics",
    title: "Capital Markets Weekly Update",
    desc: "A weekly bilingual interactive financial dashboard with real-time market data visualization and analysis reporting.",
    link: "https://capital-markets-weekly.lovable.app/",
    thumb: thumbCapitalMarkets,
  },
  {
    cat: "Social Media · Audience Analytics",
    title: "Social Media Performance Dashboard",
    desc: "A data-driven performance report analyzing organic reach, engagement rates, and audience growth across TikTok, Douyin, and Xiaohongshu.",
    link: "https://taliz629.github.io/social_media_performance_2-18v4/",
    thumb: thumbSocialMedia,
  },
  {
    cat: "Video Production · Documentary",
    title: "The Food Riders of OCC",
    desc: "Edited a 3-minute documentary on a campus organization that takes excess food from the Orange Coast College cafeteria and delivers it to local food pantries serving Orange County's homeless population via bicycles and trailers.",
    link: "https://youtu.be/nl1PePNogak",
    linkLabel: "Watch on YouTube ↗",
  },
  {
    cat: "Video Production · Documentary",
    title: "The Rock Climber",
    desc: "Edited this short documentary shaping narrative rhythm and visual flow to convey the emotional and physical experience of climbing.",
    link: "https://vimeo.com/1174558981",
    linkLabel: "Watch on Vimeo ↗",
  },
];

const WorksSection = () => (
  <section id="work" className="px-[6%] md:px-[10%] py-24 bg-background">
    <p className="section-label">04 — Selected Work</p>
    <h2 className="section-title">Data-Driven<br /><em>Projects</em></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((p) => {
        const thumb = getThumbnail(p.link, p.thumb);
        return (
          <article
            key={p.title}
            className="bg-warm-white border border-border rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            {thumb && (
              <img
                src={thumb}
                alt={`${p.title} thumbnail`}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-6">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-terracotta mb-1.5">{p.cat}</p>
              <h3 className="text-[1.1rem] font-medium text-deep mb-2 leading-snug">{p.title}</h3>
              <p className="text-[0.8rem] text-light-text leading-relaxed mb-4">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[0.72rem] tracking-[0.12em] uppercase text-terracotta no-underline hover:opacity-80 transition-opacity"
              >
                {p.linkLabel || "View Project ↗"}
              </a>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default WorksSection;
