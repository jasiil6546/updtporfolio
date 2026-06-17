import { useEffect, useRef, useState } from "react";
import { HeroVideo } from "./HeroVideo";

const ROLES = ["Developer", "Engineer", "Founder", "Student"];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled || !containerRef.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <HeroVideo />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          COLLECTION '26
        </p>
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Mohamed Jasil
        </h1>
        <p className="blur-in text-base md:text-lg text-text-primary/90 mb-4">
          A{" "}
          <span
            key={roleIdx}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIdx]}
          </span>{" "}
          based in Kerala, India.
        </p>
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Full Stack Developer crafting MERN, Django and modern web experiences from concept to deployment.
        </p>

        <div className="blur-in inline-flex flex-wrap justify-center gap-4">
          <a
            href="#works"
            className="group relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg transition-all hover:scale-105 hover:bg-bg hover:text-text-primary"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            See Works
          </a>
          <a
            href="mailto:m.jasilof@gmail.com"
            className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary transition-all hover:scale-105 hover:border-transparent"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            Reach out...
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute inset-x-0 h-4 bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
