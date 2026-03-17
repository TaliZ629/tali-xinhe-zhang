const contacts = [
  { label: "Email", value: "xz5471@nyu.edu", href: "mailto:xz5471@nyu.edu" },
  { label: "Phone", value: "(347) 633-3897", href: "tel:+13476333897" },
  { label: "LinkedIn", value: "Tali Zhang", href: "https://www.linkedin.com/in/zhangxinhe/" },
  { label: "Location", value: "New York City", href: "#" },
];

const ContactSection = () => (
  <section id="contact" className="px-[6%] md:px-[10%] py-24 bg-gradient-to-br from-deep to-[#3D2B1F] text-center">
    <p className="text-[0.7rem] tracking-[0.25em] uppercase text-blush mb-2">06 — Contact</p>
    <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-light leading-snug mb-2" style={{ color: "white" }}>Let's <em className="italic">Connect</em></h2>
    <p className="text-[0.9rem] text-[rgba(255,255,255,0.6)] mb-8">Open to opportunities in operations, marketing, and data analytics</p>
    <div className="flex justify-center gap-8 flex-wrap mt-8">
      {contacts.map(({ label, value, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 no-underline text-[rgba(255,255,255,0.7)] hover:text-blush hover:border-blush transition-colors p-5 border border-[rgba(255,255,255,0.1)] rounded-sm min-w-[160px]"
        >
          <span className="text-[0.65rem] tracking-[0.2em] uppercase">{label}</span>
          <span className="text-[0.85rem]">{value}</span>
        </a>
      ))}
    </div>
  </section>
);

export default ContactSection;
