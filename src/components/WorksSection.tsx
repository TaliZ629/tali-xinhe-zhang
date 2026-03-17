import thumbCapital from "@/assets/thumb-capital-markets.jpg";
import thumbSocial from "@/assets/thumb-social-media.jpg";
import thumbFood from "@/assets/thumb-food-riders.jpg";

const projects = [
  {
    cat: "Finance · Data Analytics",
    title: "Capital Markets Weekly Update",
    desc: "A weekly bilingual interactive financial dashboard with real-time market data visualization and analysis reporting.",
    link: "https://capital-markets-weekly.lovable.app/",
    thumb: thumbCapital,
  },
  {
    cat: "Social Media · Audience Analytics",
    title: "Social Media Performance Dashboard",
    desc: "A data-driven performance report analyzing organic reach, engagement rates, and audience growth across TikTok, Douyin, and Xiaohongshu.",
    link: "https://taliz629.github.io/social_media_performance_2-18v4/",
    thumb: thumbSocial,
  },
  {
    cat: "Video Production · Documentary",
    title: "The Food Riders of OCC",
    desc: "Edited a 3-minute documentary on a campus organization that takes excess food from the Orange Coast College cafeteria and delivers it to local food pantries serving Orange County's homeless population via bicycles and trailers.",
    link: "https://youtu.be/nl1PePNogak",
    thumb: thumbFood,
  },
];

const WorksSection = () => (
  <section id="work" className="px-[6%] md:px-[10%] py-24 bg-background">
    <p className="section-label">04 — Selected Work</p>
    <h2 className="section-title">Data-Driven<br /><em>Projects</em></h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((p) => (
        <article
          key={p.title}
          className="bg-warm-white border border-border rounded-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
        >
          <div className="w-full aspect-video overflow-hidden">
            <img
              src={p.thumb}
              alt={p.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
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
              View Project ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default WorksSection;
