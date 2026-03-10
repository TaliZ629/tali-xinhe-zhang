const ResearchSection = () => (
  <section className="px-[6%] md:px-[10%] py-16 bg-warm-white">
    <p className="section-label">04 — Research & Publication</p>
    <h2 className="section-title" style={{ marginBottom: "2rem" }}>Published <em>Research</em></h2>
    <div className="bg-warm-white border border-border border-l-[3px] border-l-terracotta py-8 px-6 md:px-10 rounded-r-sm max-w-[800px]">
      <p className="text-[0.7rem] tracking-[0.15em] uppercase text-terracotta mb-2">ICFTBA 2024 · International Conference on Financial Technology and Business Analysis</p>
      <h3 className="text-[1.2rem] font-medium text-deep mb-2 leading-snug">Research on Different Factors Affecting Airbnb Housing Prices</h3>
      <p className="text-[0.82rem] text-medium mb-2">Gengyuan Zeng, Ningning Huo, Xinhe Zhang</p>
      <p className="text-[0.78rem] text-light-text italic">Advances in Economics, Management and Political Sciences (AEMPS) · Print ISSN 2754-1169</p>
      <p className="text-[0.8rem] text-medium mt-4 leading-[1.7]">
        Conducted exploratory data analysis and linear regression in Google Colab to identify key factors influencing Airbnb housing prices using a dataset of 74,111 listings. Built and validated a log-price regression model evaluated via R-squared and correlation analysis.
      </p>
    </div>
  </section>
);

export default ResearchSection;
