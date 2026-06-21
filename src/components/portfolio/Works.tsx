import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  tag: string;
  img: string;
  span: string;
  aspect: string;
  url: string;
  description: string;
  features: string[];
  techStack: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Marathon Event Platform",
    tag: "React · GSAP · Tailwind",
    img: "/images/Marathon.jpeg",
    span: "md:col-span-6",
    aspect: "aspect-[16/10]",
    url: "https://marathon2026.dev",
    description: "Developed a premium, highly interactive web application for a marathon event. The platform serves as a comprehensive hub for participants and attendees, featuring detailed event schedules, sponsor showcases, and a fully integrated blog system for event news and updates. Engineered with a focus on modern aesthetics, smooth micro-animations, and responsive design to ensure an optimal user experience across all devices.",
    features: [
      "Comprehensive Event Hub: Designed and implemented multi-page architecture including Home, About, Contact, and dedicated Marathon event detail pages.",
      "Dynamic Blog Module: Built a complete blog system with list and detail views to keep participants engaged with the latest news.",
      "Rich Interactions & Animations: Integrated GSAP and Swiper to create premium, dynamic UI transitions, hover effects, and smooth carousel displays.",
      "Component-Driven Architecture: Utilized a reusable component structure (e.g., Layouts, Schedules, Sponsors, Follow Us) for maintainability and scalability."
    ],
    techStack: [
      "React 19",
      "Vite",
      "React Router v7",
      "Tailwind CSS",
      "Material UI (MUI)",
      "Emotion",
      "GSAP (GreenSock)",
      "Swiper",
      "Axios",
      "React-Select",
      "Country-State-City"
    ]
  },
  {
    title: "Techverse Portal",
    tag: "React · Flowbite · Tailwind",
    img: "/images/techverse.jpeg",
    span: "md:col-span-6",
    aspect: "aspect-[16/10]",
    url: "https://techverse.fest",
    description: "Developed a high-performance event management portal for a tech festival using React 19 and Vite for rapid build times and optimized delivery. Built a responsive and accessible user interface using Tailwind CSS and Flowbite React, ensuring seamless navigation across devices. Engineered core festival pages including Events, Gallery, Registration, and Contact pages utilizing React Router for efficient client-side routing.",
    features: [
      "Frontend Architecture: Bootstrapped a scalable single-page application (SPA) using Vite and React, setting up modern development practices and ESLint configurations.",
      "Event Management Features: Designed and implemented key modular views including Home, Events, Gallery, Registration, and Contact, facilitating end-to-end user journeys for festival attendees.",
      "Component-Driven UI: Leveraged Flowbite UI components alongside custom Tailwind CSS utility classes to rapidly build interactive, accessible, and responsive layouts.",
      "Dynamic Media & Galleries: Integrated Swiper and @fancyapps/ui to build touch-friendly, high-performance carousels and lightbox galleries for showcasing past events and sponsors.",
      "Form & API Handling: Implemented complex form logic with custom inputs (e.g., react-phone-number-input) and managed asynchronous data fetching using Axios."
    ],
    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Flowbite React",
      "React Router 7",
      "Axios",
      "Swiper",
      "Fancybox",
      "react-phone-number-input"
    ]
  },
  {
    title: "Momentor — Career Truth Platform",
    tag: "Next.js · GSAP · Tailwind",
    img: "/images/momentor.in_.png",
    span: "md:col-span-6",
    aspect: "aspect-[16/10]",
    url: "https://momentor.in",
    description: "Developed a modern, highly interactive web platform for India's first journalism-driven career truth platform. Momentor combines next-gen journalism, career mentorship, and future-skills training under one roof. Engineered with a focus on delivering a premium user experience through fluid GSAP animations, Lenis smooth scrolling, and a fully responsive design optimized for SEO via Next.js server-side rendering.",
    features: [
      "Dynamic UI/UX: Implemented complex, high-performance animations using GSAP and integrated Lenis for seamless, buttery-smooth scrolling across the entire application.",
      "Modern Architecture: Built a scalable, server-side rendered application using Next.js and React, ensuring optimal SEO performance and fast initial load times.",
      "Component-Driven Development: Designed modular, reusable React components including customized carousels (CoursesSlider, DistinctionsSlider), interactive buttons, and responsive layout elements using Tailwind CSS.",
      "Social Proof & Engagement: Developed extensive testimonial features (TestimonialsMarquee, TestimonialsGrid, TestimonialsSlider) and user interaction sections to drive credibility and engagement.",
      "Backend Integration: Configured server-side API routes using Nodemailer for robust form handling and automated email communications.",
      "Multi-Page Architecture: Created dedicated, responsive page layouts for About, Services (Mentorship, Career Guidance, Academy, Civic Senses), FAQ, Journalism, Gallery, and Contact sections."
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "GSAP (GreenSock)",
      "Lenis (Smooth Scroll)",
      "Splide (Carousels)",
      "Nodemailer",
      "Framer Motion"
    ]
  },
  {
    title: "MyMelova — Chocolate E-Commerce",
    tag: "Next.js · React 19 · Full-Stack",
    img: "/images/mymelova.com_.png",
    span: "md:col-span-6",
    aspect: "aspect-[16/10]",
    url: "https://mymelova.com",
    description: "Architected and developed a full-stack e-commerce web application for 'MyMelova,' a premium artisanal chocolate brand based in India. The platform serves as a modern, responsive storefront built to showcase and sell handcrafted chocolate products online, complete with user authentication, a shopping cart system, an administrative dashboard for business management, and rich SEO configurations with Open Graph and Twitter cards.",
    features: [
      "Full-Stack E-Commerce Architecture: Designed and implemented a complete e-commerce solution using Next.js 16 App Router with dedicated API routes, enabling a seamless full-stack experience within a single codebase.",
      "Shopping Cart & Checkout: Built a dynamic shopping experience with AddToCartButton, BuyNowButton, ProductGrid, and ProductReviews components, managing cart state globally via a CartProvider context.",
      "Authentication & User Management: Implemented a secure authentication system with an AuthProvider context and protected route groups, supporting user registration, login, and session management.",
      "Admin Dashboard: Developed a comprehensive admin interface with AdminGuard and AdminSidebar components for managing products, orders, and user data.",
      "SEO Optimization: Configured rich metadata including Open Graph and Twitter cards, targeting keywords like 'handcrafted chocolates' and 'artisanal chocolate factory' for maximum organic search visibility.",
      "Dynamic Content & Blog: Integrated a blog system and dynamic product pages with carousels powered by Swiper for an engaging content-driven experience."
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Bootstrap 5",
      "FontAwesome",
      "Swiper",
      "Axios",
      "ESLint",
      "PostCSS",
      "Babel React Compiler"
    ]
  }
];

const headerAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export function Works() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
            href="https://github.com/jasiil6546"
            target="_blank"
            rel="noopener noreferrer"
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
              onClick={() => setActiveProject(p)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl cursor-pointer ${p.span} ${p.aspect}`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-surface border border-stroke rounded-3xl overflow-hidden max-h-[90vh] flex flex-col md:grid md:grid-cols-12 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 border border-stroke flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-bg transition-colors"
                aria-label="Close details"
              >
                ✕
              </button>

              {/* Left Column: Mock Web Browser Preview */}
              <div className="col-span-12 md:col-span-7 flex flex-col h-[35vh] md:h-[90vh] bg-bg border-r border-stroke">
                {/* Mock Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-stroke flex-shrink-0">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 flex justify-center max-w-[80%] mx-auto">
                    <div className="bg-stroke/40 text-muted-foreground text-xs px-4 py-1 rounded-md w-full text-center truncate select-none">
                      {activeProject.url}
                    </div>
                  </div>
                </div>
                {/* Scrollable Viewport showing full-length page screenshot */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 bg-bg select-none scrollbar-thin">
                  <img
                    src={activeProject.img}
                    alt={`${activeProject.title} screenshot`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Right Column: Scrollable Text Details */}
              <div className="col-span-12 md:col-span-5 flex flex-col h-[55vh] md:h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs text-muted uppercase tracking-widest">{activeProject.tag}</span>
                  <h3 className="text-3xl sm:text-4xl font-display italic text-text-primary leading-tight mt-1">
                    {activeProject.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary/70">Overview</h4>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary/70">Key Responsibilities & Features</h4>
                  <ul className="space-y-3">
                    {activeProject.features.map((feature, idx) => {
                      const colonIdx = feature.indexOf(":");
                      if (colonIdx !== -1) {
                        const title = feature.substring(0, colonIdx);
                        const desc = feature.substring(colonIdx + 1);
                        return (
                          <li key={idx} className="text-sm text-muted flex gap-2">
                            <span className="text-text-primary flex-shrink-0 mt-1">✦</span>
                            <div>
                              <strong className="text-text-primary font-medium">{title}</strong>:{desc}
                            </div>
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className="text-sm text-muted flex gap-2">
                          <span className="text-text-primary flex-shrink-0 mt-1">✦</span>
                          <div>{feature}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary/70">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-stroke/30 border border-stroke text-text-primary/95 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
