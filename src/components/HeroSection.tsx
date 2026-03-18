import profilePhoto from "@/assets/profile-photo.jpg";
import { useState } from "react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const photoClasses = `
    w-[300px] h-[300px] max-md:w-[180px] max-md:h-[180px] rounded-full object-cover object-top 
    border-[3px] border-blush shadow-[0_4px_32px_rgba(181,106,69,0.22)]
    transition-all duration-500 ease-out cursor-pointer
    ${isHovered ? "scale-105 shadow-[0_8px_40px_rgba(181,106,69,0.35)] border-terracotta" : ""}
    ${isPressed ? "scale-95" : ""}
  `;

  const handlePhoto = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <section className="min-h-screen pt-16 relative bg-background">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-[6%] md:px-[10%] py-[8%] max-w-[1200px] mx-auto">
        {/* Left: Text */}
        <div className="max-w-[60%] max-md:max-w-full flex flex-col max-md:items-center justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-display text-[clamp(3.5rem,6vw,5.5rem)] font-normal leading-[1.05] text-deep mb-1 max-md:text-center italic">
            Tali Zhang
          </h1>
          <p className="text-lg font-light italic text-light-text mb-8 max-md:text-center">
            Media · Technology · Business
          </p>

          {/* Profile photo - shown inline on mobile only */}
          <div
            className="md:hidden mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handlePhoto}
          >
            <img src={profilePhoto} alt="Xinhe (Tali) Zhang" className={photoClasses} />
          </div>

          <p className="text-[0.92rem] leading-[1.8] text-medium max-w-[480px] mb-10 max-md:text-center">
            Empowering the intersection of media, technology, and business through data-driven strategy, technology innovation, and impactful storytelling.
          </p>
          <div className="flex gap-4 flex-wrap max-md:justify-center">
            <a href="#work" className="bg-terracotta text-primary-foreground px-7 py-3 rounded-sm text-[0.78rem] tracking-[0.1em] uppercase no-underline hover:bg-dusty-rose hover:-translate-y-0.5 transition-all">
              View Projects
            </a>
            <a href="#contact" className="border border-blush text-medium px-7 py-3 rounded-sm text-[0.78rem] tracking-[0.1em] uppercase no-underline hover:border-terracotta hover:text-terracotta transition-all">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right: Profile Photo - desktop only */}
        <div
          className="hidden md:block animate-fade-in flex-shrink-0 self-start"
          style={{ animationDelay: "0.4s" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handlePhoto}
        >
          <img src={profilePhoto} alt="Xinhe (Tali) Zhang" className={photoClasses} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
