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
      "Cost Optimization",
      "Risk Control through Process Execution",
      "Cross-Regional and Cross Functional Coordination",
    ],
  },
  {
    date: "08/2021 – 12/2021",
    company: "Wicresoft",
    location: "Shanghai, China",
    role: "Customer Support Operations Analyst",
    bullets: [
      "Weekly Performance Reporting/dashboards/presentation",
      "Problem identification and root cause analysis",
      "Improvement execution on Platform IT Service Operations",
    ],
  },
  {
    date: "05/2020 – 06/2021",
    company: "Cheering Consulting",
    location: "Guangzhou, China",
    role: "Intellectual Property Case Consultant",
    bullets: [
      "Comprehensive investigative research",
      "Case assessment and strategic planning",
      "Intellectual Property Enforcement Support",
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
      "Client Engagement",
      "Project coordination and strategic execution",
      "Visual production and brand delivery",
    ],
  },
  {
    date: "02/2019 – 08/2019",
    company: "Weidong Group, Weidong Cloud Education",
    location: "Beijing, China",
    role: "Weidong Group — Course Content R&D Manager for France Brest Business School Business Programs",
    bullets: [
      "Focused Educational Content Strategy",
      "Production Execution",
      "Delivery Management",
    ],
  },
  {
    date: "05/2018 – 08/2018",
    company: "China Central Television",
    location: "Beijing, China",
    role: "Content Producer Intern",
    bullets: [
      "Strategic Content Development",
      "Quick Trend Responsiveness",
      "On-time Story Delivery",
    ],
  },
  {
    date: "10/2016 – 04/2017",
    company: "JJ Printing & Packaging",
    location: "Santa Fe Springs, CA",
    role: "Digital Content Editor",
    bullets: [
      "Effective client coordination",
      "Technical Design Operations",
      "Output Quality Control",
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
          <ul className="mt-2 space-y-1">
            {item.bullets.map((b, i) => (
              <li key={i} className="text-[0.82rem] text-light-text leading-relaxed">
                – {b}
              </li>
            ))}
          </ul>
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
