import { useEffect, useState } from "react";

const LINKS = ["Home", "Work", "Resume"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string) => {
    setActive(label);
    const map: Record<string, string> = { Home: "hero", Work: "works", Resume: "resume" };
    const el = document.getElementById(map[label]);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <button
          onClick={() => handleNav("Home")}
          className="group relative w-9 h-9 rounded-full p-[1.5px] accent-gradient transition-transform hover:scale-110"
          aria-label="Home"
        >
          <span className="flex w-full h-full items-center justify-center rounded-full bg-bg">
            <span className="font-display italic text-[13px] text-text-primary">MJ</span>
          </span>
        </button>

        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {LINKS.map((l) => (
          <button
            key={l}
            onClick={() => handleNav(l)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
              active === l
                ? "text-text-primary bg-stroke/50"
                : "text-muted hover:text-text-primary hover:bg-stroke/50"
            }`}
          >
            {l}
          </button>
        ))}

        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        <a
          href="mailto:m.jasilof@gmail.com"
          className="group relative text-xs sm:text-sm rounded-full"
        >
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundSize: "200% 200%", animation: "gradient-shift 6s ease infinite" }} />
          <span className="relative inline-flex items-center gap-1 bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary">
            Say hi <span className="text-[10px]">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}
