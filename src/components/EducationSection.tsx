const education = [
  {
    school: "New York University",
    degree: "M.S. Engineering, Management of Technology (STEM)",
    location: "Brooklyn, NY",
    date: "09/2025 – 05/2027",
    details: "Business Analytics, Data Visualization for Business Intelligence, Economics & Strategy, Marketing",
  },
  {
    school: "The Ohio State University",
    degree: "B.S. Design, Visual Communication Design",
    location: "Columbus, OH",
    date: "",
    details: "Visual Communication Design, Statistics, MicroEconomics",
  },
  {
    school: "Orange Coast College (OCC)",
    degree: "Film & Television Production Certificate",
    location: "Costa Mesa, CA",
    date: "",
    details: "Film and television production coursework",
  },
  {
    school: "Hochschule Darmstadt (H_da)",
    degree: "Visual Communication Exchange Program",
    location: "Darmstadt, Germany",
    date: "",
    details: "Production & Realization IV / Computer",
  },
];

const EducationSection = () => (
  <section id="education" className="px-[6%] md:px-[10%] py-24 bg-background">
    <p className="section-label">02 — Education</p>
    <h2 className="section-title">Academic<br /><em>Background</em></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {education.map((ed) => (
        <div key={ed.school} className="bg-warm-white border border-border rounded-sm p-7">
          <p className="text-[0.88rem] font-medium text-deep">{ed.school}</p>
          <p className="text-[0.82rem] text-medium mt-1">{ed.degree}</p>
          <p className="text-[0.72rem] text-light-text italic mt-1">{ed.location}</p>
          {ed.date && <p className="text-[0.72rem] text-light-text mt-0.5">{ed.date}</p>}
          <p className="text-[0.78rem] text-light-text mt-3 leading-relaxed">{ed.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
