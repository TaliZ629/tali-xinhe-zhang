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
      "Audited 1,562 POs totaling US$82M in 2023 to reduce post-issuance risks; collaborated with cross-functional teams across Asia and North America",
      "Delivered US$216K savings on a US$1.3M equipment deal; managed quarterly Capex reports via Google Sheets across regions",
      "Led bilingual (EN/CH) emceeing for 10+ corporate events with 300–500+ attendees",
      "Earned Celestica People Driven Acknowledgment Award and three Toastmasters awards",
    ],
  },
  {
    date: "08/2021 – 12/2021",
    company: "Wicresoft",
    location: "Shanghai, China",
    role: "Microsoft Azure & Dynamics CRM — Customer Service QA",
    bullets: [
      "Reviewed and documented case timelines and next steps using SharePoint and Microsoft Dynamics 365",
      "Generated 12+ bilingual research and follow-up reports for enterprise clients including Nike, Medtronic, and 3M",
    ],
  },
  {
    date: "05/2020 – 06/2021",
    company: "Cheering Consulting",
    location: "Guangzhou, China",
    role: "Intellectual Property Case Specialist",
    bullets: [
      "Produced 12+ bilingual research and follow-up reports for clients including Nike, Medtronic, and 3M",
      "Collaborated with notary public on product notarization, drafted notarization reports, and organized project expenses",
    ],
  },
];

const mediaExp: ExpItem[] = [
  {
    date: "10/2019 – 02/2020",
    company: "ASDC",
    location: "Beijing, China",
    role: "Tencent CSIG & BMW ADDP — Project & Marketing Specialist",
    bullets: [
      "Produced and edited promotional sizzle videos for BMW Group China High-Performance D3 Platform Go-Live Ceremony",
      "Coordinated domestic and international guests for corporate conferences and data center site visits",
    ],
  },
  {
    date: "02/2019 – 08/2019",
    company: "Weidong Cloud Education",
    location: "Beijing, China",
    role: "Course R&D Manager — France Brest Business School Programs",
    bullets: [
      "Produced high-quality video content for 8 MBA courses, 11 Big Data Specialized Master's courses, and 4 additional programs",
      "Ensured brand consistency, cohesive visual style, and on-schedule release through partnership with editors and international professors",
    ],
  },
  {
    date: "05/2018 – 08/2018",
    company: "China Central Television",
    location: "Beijing, China",
    role: "Content Producer Intern",
    bullets: [
      "Researched and curated international news; wrote scripts and independently produced video content",
      "Team produced a video achieving 54 million total online views during the 2018 World Cup season",
      'Received "The Most Valuable Content Dedication Award" from CCTV',
    ],
  },
  {
    date: "10/2016 – 04/2017",
    company: "JJ Printing & Packaging",
    location: "Santa Fe Springs, CA",
    role: "Digital Content Editor & Print Technician",
    bullets: [
      "Edited print files using Adobe applications; operated Sakurai offset and digital printing equipment independently",
      "Managed client communication on deadlines, art proofs, and file changes",
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
          <p className="text-[1.15rem] font-medium text-deep mb-3">{item.role}</p>
          <ul className="list-none p-0">
            {item.bullets.map((b, i) => (
              <li key={i} className="text-[0.85rem] text-medium leading-[1.7] pl-4 relative mb-1.5 before:content-['—'] before:absolute before:left-0 before:text-blush">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className="px-[6%] md:px-[10%] py-24 bg-warm-white">
    <p className="section-label">05 — Experience</p>
    <h2 className="section-title">Where I've<br /><em>Made Impact</em></h2>
    <ExpCategory label="Technical & Analytical" items={technicalExp} />
    <ExpCategory label="Media & Production" items={mediaExp} />
  </section>
);

export default ExperienceSection;
