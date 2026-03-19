import SectionHeader from "@/components/SectionHeader";

const ResearchSection = () => (
  <section id="research" className="px-[6%] md:px-[10%] py-24 bg-warm-white">
    <SectionHeader label="05 — Research & Publication" title={<>Published <em>Research</em></>} section="research" />
    <div className="bg-warm-white border border-border border-l-[3px] border-l-terracotta py-8 px-6 md:px-10 rounded-r-sm max-w-[800px]">
      <p className="text-[0.7rem] tracking-[0.15em] uppercase text-terracotta mb-2">ICFTBA 2024 · University of Southern California · 06/2024 – 07/2024</p>
      <h3 className="text-[1.2rem] font-medium text-deep mb-2 leading-snug">Marketplace Pricing Analytics: Airbnb Revenue Modeling</h3>
      <p className="text-[0.82rem] text-medium mb-2">Xinhe Zhang, Gengyuan Zeng, Ningning Huo</p>
      <p className="text-[0.78rem] text-light-text italic">Advances in Economics, Management and Political Sciences (AEMPS) · Print ISSN 2754-1169</p>
      <p className="text-[0.8rem] text-medium mt-4 leading-[1.7]">
        Analyzed a dataset of 74,111 Airbnb listings using Python and Google Colab to examine pricing drivers across location, property attributes, and demand indicators. Developed and tested a log-price regression model to quantify the relative impact of key variables on revenue performance. Research findings presented at ICFTBA 2024 and published in AEMPS proceedings.
      </p>
    </div>
  </section>
);

export default ResearchSection;
