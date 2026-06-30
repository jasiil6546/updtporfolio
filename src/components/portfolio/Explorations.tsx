import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { img: "/images/img1.png", rot: -3 },
  { img: "/images/img2.png", rot: 2 },
  { img: "/images/img3.jpg", rot: -2 },
  { img: "/images/img4.png", rot: 3 },
  { img: "/images/img5.png", rot: -1 },
  { img: "/images/Marathon.jpeg", rot: 2 },
  { img: "/images/techverse.jpeg", rot: -2 },
  { img: "/images/momentor.in_.png", rot: 1 },
];

export function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const triggers: { kill: () => void }[] = [];
    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      const gsap = gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (contentRef.current && sectionRef.current) {
        const t = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: contentRef.current,
          pinSpacing: false,
        });
        triggers.push(t);
      }

      if (leftColRef.current && sectionRef.current) {
        const tw = gsap.to(leftColRef.current, {
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
        triggers.push(tw.scrollTrigger as { kill: () => void });
      }
      if (rightColRef.current && sectionRef.current) {
        const tw = gsap.to(rightColRef.current, {
          y: -400,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
        triggers.push(tw.scrollTrigger as { kill: () => void });
      }
    })();
    return () => {
      cancelled = true;
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const left = ITEMS.filter((_, i) => i % 2 === 0);
  const right = ITEMS.filter((_, i) => i % 2 === 1);

  return (
    <section ref={sectionRef} className="relative bg-bg min-h-[300vh] overflow-hidden">
      <div ref={contentRef} className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-body font-light text-text-primary">
          Visual <span className="font-display italic">playground</span>
        </h2>
        <p className="text-sm md:text-base text-muted mt-4 max-w-md">
          Side projects, design experiments, and creative tangents.
        </p>
        <a
          href="#"
          className="group relative inline-flex items-center gap-2 rounded-full text-sm px-5 py-2.5 border border-stroke text-text-primary mt-6"
        >
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          View on Dribbble <span>↗</span>
        </a>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 gap-12 md:gap-40 pt-[50vh]">
          <div ref={leftColRef} className="space-y-12 md:space-y-24">
            {left.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(it.img)}
                style={{ transform: `rotate(${it.rot}deg)` }}
                className="block aspect-square max-w-[320px] w-full rounded-2xl overflow-hidden border border-stroke pointer-events-auto hover:scale-105 transition-transform bg-[#1a1a1a]"
              >
                <img src={it.img} alt="" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
          <div ref={rightColRef} className="space-y-12 md:space-y-24 mt-24 md:mt-48 ml-auto">
            {right.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(it.img)}
                style={{ transform: `rotate(${it.rot}deg)` }}
                className="block aspect-square max-w-[320px] w-full rounded-2xl overflow-hidden border border-stroke pointer-events-auto hover:scale-105 transition-transform bg-[#1a1a1a]"
              >
                <img src={it.img} alt="" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-bg/90 backdrop-blur-lg flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-2xl" />
        </div>
      )}
    </section>
  );
}
