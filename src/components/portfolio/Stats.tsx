import { motion } from "framer-motion";

const STATS = [
  { value: "2+", label: "Years Building" },
  { value: "10+", label: "Projects Delivered" },
  { value: "100%", label: "Commitment" },
];

export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            <div className="text-6xl md:text-7xl font-display italic text-text-primary">{s.value}</div>
            <div className="text-xs text-muted uppercase tracking-[0.3em] mt-3">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
