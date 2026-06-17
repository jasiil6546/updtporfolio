import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Hospital Management System",
    tag: "Django · Python",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    title: "ERP Platform",
    tag: "MERN Stack",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Inventory System",
    tag: "React · Node.js",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    span: "md:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Brand Portfolio",
    tag: "React · Tailwind",
    img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
];

const headerAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export function Works() {
  return (
    <section id="works" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div {...headerAnim} className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text-primary">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted mt-4 max-w-md">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>
          <a
            href="#works"
            className="hidden md:inline-flex group relative rounded-full text-sm px-5 py-2.5 border border-stroke text-text-primary self-start md:self-end items-center gap-2"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            View all work <span>→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl ${p.span} ${p.aspect}`}
            >
              <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              <div className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="relative rounded-full p-[2px]" style={{ background: "linear-gradient(90deg,#89AACC,#4E85BF)", backgroundSize: "200% 200%", animation: "gradient-shift 6s ease infinite" }}>
                  <div className="bg-white rounded-full px-5 py-2 text-bg text-sm">
                    View — <span className="font-display italic">{p.title}</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between text-text-primary">
                <span className="font-display italic text-2xl md:text-3xl">{p.title}</span>
                <span className="text-xs text-muted uppercase tracking-widest">{p.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
