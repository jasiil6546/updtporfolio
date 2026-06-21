import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Works } from "@/components/portfolio/Works";
import { Journal } from "@/components/portfolio/Journal";
import { Explorations } from "@/components/portfolio/Explorations";
import { Resume } from "@/components/portfolio/Resume";
import { Stats } from "@/components/portfolio/Stats";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamed Jasil — Full Stack Developer" },
      { name: "description", content: "Full Stack Developer specializing in Next.js, React, MERN stack, and modern JavaScript web experiences. Based in Kerala, India." },
      { property: "og:title", content: "Mohamed Jasil — Full Stack Developer" },
      { property: "og:description", content: "Full Stack Developer specializing in Next.js, React, MERN stack, and modern JavaScript web experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isLoading]);

  return (
    <main className="bg-bg text-text-primary min-h-screen scroll-smooth">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <Hero />
      <Works />
      <Journal />
      <Explorations />
      <Resume />
      <Stats />
      <Footer />
    </main>
  );
}
