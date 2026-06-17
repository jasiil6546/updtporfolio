import { motion } from "framer-motion";

const ENTRIES = [
  {
    title: "Building a hospital management system with Django",
    img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&q=80",
    read: "6 min read",
    date: "May 2025",
  },
  {
    title: "From MERN intern to junior engineer in 6 months",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
    read: "4 min read",
    date: "Mar 2026",
  },
  {
    title: "Why I picked Django for backend over Express",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
    read: "5 min read",
    date: "Feb 2026",
  },
  {
    title: "Lessons from shipping my first ERP system",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    read: "7 min read",
    date: "Jan 2026",
  },
];

export function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text-primary">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-sm md:text-base text-muted mt-4 max-w-md">
              Notes on code, building products, and the craft of engineering.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex group relative rounded-full text-sm px-5 py-2.5 border border-stroke text-text-primary items-center gap-2">
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            View all <span>→</span>
          </a>
        </motion.div>

        <div className="space-y-4">
          {ENTRIES.map((e, i) => (
            <motion.a
              key={e.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors group"
            >
              <img src={e.img} alt="" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-display italic text-lg sm:text-2xl text-text-primary truncate">{e.title}</div>
                <div className="text-xs text-muted mt-1">{e.read} · {e.date}</div>
              </div>
              <span className="hidden sm:inline-flex w-10 h-10 rounded-full border border-stroke items-center justify-center text-text-primary group-hover:bg-text-primary group-hover:text-bg transition-colors flex-shrink-0">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
