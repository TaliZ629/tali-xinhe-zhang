const contacts = [
  { label: "Email", value: "xinhe629@gmail.com", href: "mailto:xinhe629@gmail.com" },
  { label: "Phone", value: "(347) 633-3897", href: "tel:+13476333897" },
  { label: "LinkedIn", value: "Tali Zhang", href: "https://www.linkedin.com/in/zhangxinhe/" },
  { label: "Location", value: "New York City", href: "#" },
];

const ContactSection = () => (
  <section id="contact" className="px-[6%] md:px-[10%] py-24 bg-warm-white text-center">
    <p className="section-label">07 — Contact</p>
    <h2 className="section-title">Let's <em>Connect</em></h2>
    
    <div className="grid grid-cols-2 gap-6 mt-8 max-w-[440px] mx-auto">
      {contacts.map(({ label, value, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 no-underline text-medium hover:text-terracotta hover:border-terracotta transition-colors p-5 border border-border rounded-sm min-w-[160px]"
        >
          <span className="text-[0.65rem] tracking-[0.2em] uppercase">{label}</span>
          <span className="text-[0.85rem]">{value}</span>
        </a>
      ))}
    </div>
  </section>
);

export default ContactSection;
