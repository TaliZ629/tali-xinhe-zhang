import SectionHeader from "@/components/SectionHeader";

const education = [
  {
    school: "New York University",
    degree: "M.S. Engineering, Management of Technology (STEM)",
    location: "Brooklyn, NY",
    date: "09/2025 – 05/2027 (expected)",
    details: "",
    website: "https://www.nyu.edu/",
  },
  {
    school: "The Ohio State University",
    degree: "B.S. Design, Visual Communication Design",
    location: "Columbus, OH",
    date: "",
    details: "",
    website: "https://www.osu.edu/",
  },
  {
    school: "Orange Coast College",
    degree: "Film & Television Production Certificate",
    location: "Costa Mesa, CA",
    date: "",
    details: "",
    website: "https://orangecoastcollege.edu/",
  },
  {
    school: "Hochschule Darmstadt",
    degree: "Visual Communication Exchange Program",
    location: "Darmstadt, Germany",
    date: "",
    details: "",
    website: "https://h-da.de/en/",
  },
];

const EducationSection = () => (
  <section id="education" className="px-[6%] md:px-[10%] py-24 bg-background">
    <SectionHeader label="02 — Education" title={<>Academic<br /><em>Background</em></>} section="education" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {education.map((ed) => (
        <a key={ed.school} href={ed.website} target="_blank" rel="noopener noreferrer" className="bg-warm-white border border-border rounded-sm p-7 block hover:border-terracotta transition-colors">
          <p className="text-[0.88rem] font-medium text-deep">{ed.school}</p>
          <p className="text-[0.82rem] text-medium mt-1">{ed.degree}</p>
          <p className="text-[0.72rem] text-light-text italic mt-1">{ed.location}</p>
          {ed.date && <p className="text-[0.72rem] text-light-text mt-0.5">{ed.date}</p>}
          <p className="text-[0.78rem] text-light-text mt-3 leading-relaxed">{ed.details}</p>
        </a>
      ))}
    </div>
  </section>
);

export default EducationSection;
