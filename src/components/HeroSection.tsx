import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16 relative bg-background">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-[6%] md:px-[10%] py-[8%]">
        {/* Left: Text */}
        <div className="max-w-[60%] max-md:max-w-full flex flex-col justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-display text-[clamp(3.5rem,6vw,5.5rem)] font-normal leading-[1.05] text-deep mb-1">
            Xinhe <em className="italic text-terracotta">(Tali)</em> Zhang
          </h1>
          <p className="text-lg font-light italic text-light-text mb-8">
            Operations & Marketing · Business Strategy & Data Analytics · Technology & Media
          </p>
          <p className="text-[0.92rem] leading-[1.8] text-medium max-w-[480px] mb-10">
            Cross-functional professional with experience across operations, data analytics, media production, and marketing — bridging Western and Chinese markets with bilingual fluency and a global mindset.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#work" className="bg-terracotta text-primary-foreground px-7 py-3 rounded-sm text-[0.78rem] tracking-[0.1em] uppercase no-underline hover:bg-dusty-rose hover:-translate-y-0.5 transition-all">
              View Projects
            </a>
            <a href="#contact" className="border border-blush text-medium px-7 py-3 rounded-sm text-[0.78rem] tracking-[0.1em] uppercase no-underline hover:border-terracotta hover:text-terracotta transition-all">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right: Profile Photo */}
        <div className="mt-10 md:mt-[5%] animate-fade-in flex-shrink-0" style={{ animationDelay: "0.4s" }}>
          <img
            src={profilePhoto}
            alt="Xinhe (Tali) Zhang"
            className="w-[300px] h-[300px] max-md:w-[200px] max-md:h-[200px] rounded-full object-cover object-top border-[3px] border-blush shadow-[0_4px_32px_rgba(181,106,69,0.22)]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
