import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/92 backdrop-blur-xl border-b border-border flex items-center h-16">
        <div className="w-full max-w-[1200px] mx-auto px-[6%] md:px-[10%]">
        <ul className="hidden md:flex w-full justify-between list-none">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-[0.78rem] tracking-[0.1em] uppercase text-medium no-underline hover:text-terracotta transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer z-[200]" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 bg-deep rounded-sm transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-deep rounded-sm transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-deep rounded-sm transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
        </div>
      </nav>
      {open && (
        <div className="fixed top-16 left-0 right-0 bg-cream/98 backdrop-blur-2xl border-b border-border z-[99] flex flex-col px-[6%] py-6 shadow-lg md:hidden">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-[0.88rem] tracking-[0.1em] uppercase text-medium no-underline py-3 border-b border-border last:border-b-0 hover:text-terracotta transition-colors">
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
