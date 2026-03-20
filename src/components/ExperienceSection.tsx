interface ExpItem {
  date: string;
  company: string;
  location: string;
  role: string;
  bullets: string[];
}

const technicalExp: ExpItem[] = [
  {
    date: "12/2021 – 01/2025",
    company: "Celestica",
    location: "Shanghai, China",
    role: "Operations Analyst",
    bullets: [
      "Reviewed 1,562 purchase orders totaling $82M across Asia and North America to ensure financial compliance with internal policies and budget guidelines, reducing operational risk prior to management's spending approval.",
      "Streamlined cross-functional operational workflows using ServiceNow and Ivalua with procurement, program management and finance teams to optimize spending strategy while improving production efficiency.",
      "Built quarterly Capex tracking reports in Excel and Google Sheets to monitor global spending and support leadership budget decisions.",
      "Conducted pricing analysis and negotiations for a $1.3M equipment purchase, contributing to $216K in negotiated savings.",
      "Coordinated and executed large-scale (300–500 participants) bilingual corporate campaigns and events.",
    ],
  },
  {
    date: "08/2021 – 12/2021",
    company: "Wicresoft",
    location: "Shanghai, China",
    role: "Customer Support Operations Analyst",
    bullets: [
      "Managed enterprise support case documentation in Microsoft Dynamics 365 and SharePoint, ensuring accuracy in technical support case timelines, escalation paths, and resolution tracking.",
      "Identified recurring case bottlenecks and coordinated process adjustments to improve engineers' service response efficiency.",
    ],
  },
  {
    date: "05/2020 – 06/2021",
    company: "Cheering Consulting",
    location: "Guangzhou, China",
    role: "Intellectual Property Projects & Client Coordination Specialist",
    bullets: [
      "Managed intellectual property case workflows by coordinating client requirements, third-party agencies, and internal teams for enterprise clients including Nike, Medtronic, and 3M.",
      "Produced 12+ bilingual analytical reports summarizing issue patterns, risks, required actions, resolution progress, and client impact.",
      "Worked with notary offices to validate product documentation with supporting materials to ensure compliance with regulatory standards.",
    ],
  },
];

const mediaExp: ExpItem[] = [
  {
    date: "10/2019 – 02/2020",
    company: "ASDC",
    location: "Beijing, China",
    role: "Tencent CSIG & BMW ADDP Project and Marketing Specialist",
    bullets: [
      "Produced and edited promotional sizzle videos using Adobe Creative Cloud for the BMW Group China High-Performance D3 Platform Go-Live Ceremony.",
      "Coordinated and hosted domestic and international guests for corporate events, including conferences and data center site visits.",
    ],
  },
  {
    date: "02/2019 – 08/2019",
    company: "Weidong Group, Weidong Cloud Education",
    location: "Beijing, China",
    role: "Content Producer and Marketing Specialist for France Brest Business School Business Programs",
    bullets: [
      "Produced high-quality educational video content of 8 MBA courses, 11 Big Data Specialized Master's courses, and 4 additional programs by partnering with editors to ensure brand consistency and on-schedule release.",
      "Communicated with domestic and foreign professors on course contents to ensure clarity and organization before filming.",
    ],
  },
  {
    date: "05/2018 – 08/2018",
    company: "China Central Television",
    location: "Beijing, China",
    role: "Content Producer Intern",
    bullets: [
      "Researched and curated daily international news and trending social topics; wrote scripts and independently produced video content using Adobe applications.",
      "Team produced a video achieving 54 million total online views during the 2018 World Cup season.",
      'Received "The Most Valuable Content Dedication Award" from CCTV.',
    ],
  },
  {
    date: "10/2016 – 04/2017",
    company: "JJ Printing & Packaging",
    location: "Santa Fe Springs, CA",
    role: "Digital Content Editor and Print Technician",
    bullets: [
      "Communicated with clients to confirm deadlines and changes; used Adobe applications and Microsoft Office to edit files and samples.",
      "Operated Sakurai offset and digital printing equipment independently; calibrated and ran digital machines daily.",
    ],
  },
];

const ExpCategory = ({ label, items }: { label: string; items: ExpItem[] }) => (
  <div className="mb-14">
    <p className="text-[0.7rem] tracking-[0.2em] uppercase text-dusty-rose mb-6 pb-3 border-b border-border">{label}</p>
    {items.map((item) => (
      <div key={item.company + item.date} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-7 border-b border-border last:border-b-0">
        <div className="pt-0.5">
          <p className="text-[0.72rem] tracking-wide text-light-text mb-1">{item.date}</p>
          <p className="text-[0.8rem] font-medium text-medium">{item.company}</p>
          <p className="text-[0.72rem] text-light-text italic">{item.location}</p>
        </div>
        <div>
          <p className="text-[1.15rem] font-medium text-deep">{item.role}</p>
        </div>
      </div>
    ))}
  </div>
);

import SectionHeader from "@/components/SectionHeader";

const ExperienceSection = () => (
  <section id="experience" className="px-[6%] md:px-[10%] py-24 bg-warm-white">
    <SectionHeader
      label="03 — Experience"
      title={<>Where I've<br /><em>Made Impact</em></>}
      section="experience"
      labelExtra={<>(For detailed experience information, please feel free to <a href="#contact" className="text-dusty-rose hover:text-terracotta underline transition-colors">get in touch</a>.)</>}
    />
    <ExpCategory label="Technical & Analytical Work Experiences" items={technicalExp} />
    <ExpCategory label="Media & Production Professional Work Experiences" items={mediaExp} />
  </section>
);

export default ExperienceSection;
