import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import volunteerOutreach from "@/assets/volunteer-outreach.jpg";
import volunteerTedx from "@/assets/volunteer-tedx.jpg";
import volunteerWrsa from "@/assets/volunteer-wrsa.jpg";
import volunteerXinchuan from "@/assets/volunteer-xinchuan.jpg";

type MediaItem = { type: "image"; src: string; alt: string } | { type: "video"; src: string };

interface VolunteerExp {
  date: string;
  org: string;
  location: string;
  role: string;
  subtitle: string;
  bullets: string[];
  media?: MediaItem;
}

const volunteerExperiences: VolunteerExp[] = [
  {
    date: "November 2021",
    org: "Community Outreach Program",
    location: "China",
    role: "Volunteer Storyteller & Community Outreach Participant",
    subtitle: "A Storytelling Session in the Elementary School Community Outreach Program for Left-Behind Children",
    bullets: [
      "Facilitated an interactive storytelling activity for left-behind children during a school outreach visit, encouraging curiosity, discussion, and connection through a fascinating story How to Make an Apple Pie and See the World",
    ],
    media: { type: "image", src: volunteerOutreach, alt: "Community Outreach Program storytelling session" },
  },
  {
    date: "October 2018",
    org: "TEDxTurtleRock",
    location: "Irvine, CA",
    role: "Post-Production Editor / Event Production Assistant",
    subtitle: "TEDxTurtleRock: Ideas Unchained",
    bullets: [
      "Produced video content and designed visual materials for TEDx TurtleRock, supporting event setup, audience activities, and brand-consistent communication across digital and print formats",
    ],
    media: { type: "image", src: volunteerTedx, alt: "TEDxTurtleRock: Ideas Unchained group photo" },
  },
  {
    date: "September 2018",
    org: "OCC Film & Visual Arts Honors Society",
    location: "Costa Mesa, CA",
    role: "Publicity / Event Organizer",
    subtitle: "Casting Mixer — Orange Coast College",
    bullets: [
      "Campus networking event for film and visual arts majors; designed event posters and managed social media newsfeed on Instagram and Facebook",
      "Provided the online sign-up platform for incoming guests and assisted with on-site reception organization",
    ],
  },
  {
    date: "August 2018",
    org: "WRSA & CCG",
    location: "Beijing, China",
    role: "Media & Broadcasting Assistant",
    subtitle: "13th Chinese Returned Scholars Innovation & Entrepreneurship Forum — Beijing Forum of WRSA",
    bullets: [
      "Selected as one of 18 volunteers from an international pool of 14,000 applicants for the largest annual WRSA conference, with 800+ attendees and 50+ leading executives, entrepreneurs, and scholars",
    ],
    media: { type: "image", src: volunteerWrsa, alt: "WRSA & CCG Beijing Forum volunteer group photo" },
  },
  {
    date: "May 2018",
    org: "Orange Coast College",
    location: "Costa Mesa, CA",
    role: "Producer Assistant / Camera Operator",
    subtitle: "OCC 2018 Commencement Ceremony — Live Streaming",
    bullets: [
      "Set up the shooting booth in the arena and operated a camera transmitting live moving images to the big screen on stage for all commencement attendees",
    ],
    media: { type: "video", src: "/videos/occ-commencement.mp4" },
  },
  {
    date: "May 2018",
    org: "Orange Coast College",
    location: "Costa Mesa, CA",
    role: "Production Assistant",
    subtitle: "Women in Film Panel Discussion — Live Streaming / Open Panel",
    bullets: [
      "Supported a panel inviting female filmmakers to share experiences and advice on working in the industry; provided equipment for host and guests and monitored the live stream on OCC's website",
      "Guests: Dorian Harris (ACE Editor), Courtney Stewart (Actress, Producer, Show Host), Shelby Cipolla (Camera Assistant)",
    ],
  },
  {
    date: "January 2018",
    org: "",
    location: "Digital Video · 30 min",
    role: "Filming Assistant",
    subtitle: "Interview with Xinchuan Wang: The Buddhism Master of China",
    bullets: [
      "Assisted in filming a one-hour interview with Buddhism Master Xinchuan Wang introducing Buddhism across regions including mainland China and India",
    ],
    media: { type: "image", src: volunteerXinchuan, alt: "Interview with Xinchuan Wang" },
  },
];

const VolunteerSection = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="volunteer" className="px-[6%] md:px-[10%] py-24 bg-background">
      <SectionHeader label="06 — Volunteer Experience" title={<>Giving Back &<br /><em>Community Impact</em></>} section="volunteer" />
      <div className="space-y-6">
        {volunteerExperiences.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-10 border-b border-border pb-6 last:border-b-0">
            <div className="md:w-[200px] flex-shrink-0">
              <p className="text-[0.78rem] text-terracotta font-medium">{item.date}</p>
              {item.org && <p className="text-[0.82rem] text-deep mt-0.5">{item.org}</p>}
              <p className="text-[0.72rem] text-light-text italic">{item.location}</p>
            </div>
            <div className="flex-1">
              <p className="text-[0.88rem] font-medium text-deep">{item.role}</p>
              <p className="text-[0.72rem] tracking-[0.12em] uppercase text-dusty-rose mb-2">{item.subtitle}</p>
              <ul className="list-disc pl-5 space-y-1">
                {item.bullets.map((b, j) => (
                  <li key={j} className="text-[0.8rem] text-medium leading-[1.7]">{b}</li>
                ))}
              </ul>
              {item.media && (
                <div className="mt-4 rounded overflow-hidden border border-border">
                  {item.media.type === "image" ? (
                    <img
                      src={item.media.src}
                      alt={item.media.alt}
                      className="w-full object-contain bg-muted/30 cursor-pointer hover:opacity-90 transition-opacity"
                      loading="lazy"
                      onClick={() =>
                        item.media?.type === "image" &&
                        setLightbox({ src: item.media.src, alt: item.media.alt })
                      }
                      title="Click to view full image"
                    />
                  ) : (
                    <video
                      src={item.media.src}
                      controls
                      className="w-full max-h-[300px] bg-black"
                      preload="metadata"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-light transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default VolunteerSection;
