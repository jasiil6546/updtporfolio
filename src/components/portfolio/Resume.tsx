import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Junior Software Engineer",
    org: "Hawoca · Full-time",
    period: "Dec 2025 – Present · 6 mos",
    location: "Kozhikode, Kerala, India · On-site",
    desc: "MERN Stack Developer building production web applications and internal tools.",
  },
  {
    role: "MERN Stack Developer Intern",
    org: "Interval Learning · Internship",
    period: "Aug 2025 – Nov 2025 · 4 mos",
    location: "Kerala, India · On-site",
    desc: "Hands-on experience building and managing full-stack web applications across the entire product lifecycle.",
  },
];

const EDUCATION = [
  {
    school: "IQJITA",
    degree: "Diploma — Full Stack Web Development",
    period: "Sep 2024 – May 2025",
    desc: "Intensive training in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, MySQL and Django. Built a comprehensive Django-based hospital management system with secure auth, patient registration, doctor scheduling, appointments and role-based access for doctors, staff and patients.",
  },
  {
    school: "Indira Gandhi National Open University",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2024 – 2027",
    desc: "Studying Data Structures, Web Development, Python, Java, Networking, DBMS and Software Engineering.",
  },
];

const SKILLS = ["MERN", "React", "Node.js", "Express", "MongoDB", "MySQL", "Python", "Django", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind", "Git"];

const header = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export function Resume() {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div {...header} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Resume</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light text-text-primary">
            Experience & <span className="font-display italic">education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div>
            <h3 className="text-xs text-muted uppercase tracking-[0.3em] mb-5">Experience</h3>
            <div className="space-y-4">
              {EXPERIENCE.map((e) => (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className="p-6 bg-surface/40 border border-stroke rounded-2xl hover:bg-surface transition-colors"
                >
                  <div className="font-display italic text-2xl text-text-primary">{e.role}</div>
                  <div className="text-sm text-text-primary/80 mt-1">{e.org}</div>
                  <div className="text-xs text-muted mt-1">{e.period}</div>
                  <div className="text-xs text-muted">{e.location}</div>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs text-muted uppercase tracking-[0.3em] mb-5">Education</h3>
            <div className="space-y-4">
              {EDUCATION.map((e) => (
                <motion.div
                  key={e.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className="p-6 bg-surface/40 border border-stroke rounded-2xl hover:bg-surface transition-colors"
                >
                  <div className="font-display italic text-2xl text-text-primary">{e.school}</div>
                  <div className="text-sm text-text-primary/80 mt-1">{e.degree}</div>
                  <div className="text-xs text-muted mt-1">{e.period}</div>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div {...header}>
          <h3 className="text-xs text-muted uppercase tracking-[0.3em] mb-5">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span key={s} className="px-4 py-2 rounded-full border border-stroke bg-surface/40 text-sm text-text-primary/90 hover:bg-surface transition-colors">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
