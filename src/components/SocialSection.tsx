const platforms = [
  { platform: "Xiaohongshu (RedNote)", metric: "100K+", detail: "Top post views · 1K+ likes per post" },
  { platform: "Douyin", metric: "65K+", detail: "Top post views · 1.7K+ likes per post" },
  { platform: "Multi-Platform", metric: "TikTok", detail: "Active across US, China & Europe markets" },
];

const SocialSection = () => (
  <section id="social" className="px-[6%] md:px-[10%] py-24 bg-background">
    <p className="section-label">03 — Social Media</p>
    <h2 className="section-title">Organic Growth<br /><em>Across Platforms</em></h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {platforms.map(({ platform, metric, detail }) => (
        <div key={platform} className="bg-warm-white border border-border p-8 rounded-sm text-center">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-terracotta mb-2">{platform}</p>
          <p className="text-[2.2rem] font-light text-deep leading-none mb-1">{metric}</p>
          <p className="text-[0.78rem] text-light-text">{detail}</p>
        </div>
      ))}
    </div>
    <p className="text-[0.82rem] text-light-text mt-6">Data-driven content iteration · Audience engagement optimization · Cross-cultural content strategy · Oct 2024 – Present</p>
  </section>
);

export default SocialSection;
