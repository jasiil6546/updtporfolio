import { useEffect, useRef } from "react";
import { HeroVideo } from "./HeroVideo";

const SOCIALS = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "www.linkedin.com/in/mjasil" },
  { label: "GitHub", href: "https://github.com/jasiil6546" },
  { label: "Dribbble", href: "#" },
];

export function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tween: { kill: () => void } | null = null;
    (async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled || !marqueeRef.current) return;
      tween = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    })();
    return () => {
      cancelled = true;
      tween?.kill();
    };
  }, []);

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <div className="absolute inset-0">
        <HeroVideo flipped />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <div className="overflow-hidden mb-12">
          <div ref={marqueeRef} className="flex whitespace-nowrap text-text-primary/90 font-display italic text-6xl md:text-8xl">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="px-6">BUILDING THE FUTURE •</span>
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6">Get in touch</p>
          <a
            href="mailto:m.jasilof@gmail.com"
            className="group relative inline-block rounded-full text-2xl md:text-4xl font-display italic px-8 py-5 bg-bg text-text-primary border border-stroke"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            m.jasilof@gmail.com
          </a>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke/50">
            <div className="flex gap-6">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="text-sm text-muted hover:text-text-primary transition-colors">{s.label}</a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <span className="relative rounded-full bg-green-400 w-2 h-2" />
              </span>
              Available for projects
            </div>
            <div className="text-xs text-muted">© 2026 Mohamed Jasil</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
