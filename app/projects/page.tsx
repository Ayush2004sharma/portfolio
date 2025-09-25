"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { PageTransition } from "@/components/page-transition";
import { ProjectFilter } from "@/components/project-filter";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

const projects = [
  {
    title: "BuyWise E-commerce Platform",
    description:
      "Full-stack MERN e-commerce app with secure auth, Cloudinary integration, and optimized checkout experience.",
    image: "/dash3.png",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "GSAP",
      "JWT",
      "Cloudinary",
    ],
    category: "E-commerce",
    slug: "buywise-ecommerce",
    live: "https://github.com/Ayush2004sharma/AI_Backend_E-commerce",
  },
  {
    title: "SyncAI – Real-time AI Coding Assistant",
    description:
      "AI-powered coding assistant with live collaboration, Gemini API integration, and persistent memory for multi-project automation.",
    image: "/dash.png",
    tags: [
      "Next.js",
      "Socket.IO",
      "Redis",
      "Tailwind CSS",
      "Google Gemini",
      "WebSockets",
    ],
    category: "Web Apps",
    slug: "syncai-assistant",
    live: "https://sync-ai-tool.vercel.app/",
  },
  {
    title: "MedSync – Doctor Discovery Platform",
    description:
      "Location-aware doctor search app with AI recommendations, JWT auth, and 90+ Lighthouse performance scores.",
    image: "/dash1.png",
    tags: [
      "Next.js",
      "MongoDB",
      "Google Maps API",
      "Tailwind CSS",
      "OpenAI",
      "Gemini",
      "JWT",
    ],
    category: "Web Apps",
    slug: "medsync-doctor-platform",
    live: "https://doctor-appointment-frontend-five.vercel.app/",
  },
  {
    title: "Creative Portfolio Showcase",
    description:
      "Award-winning portfolio website with immersive storytelling and interactive elements.",
    image: "/dash2.png",
    tags: ["GSAP", "WebGL", "CSS Art", "Vanilla JS"],
    category: "Portfolio",
    slug: "creative-portfolio",
    live: "https://portfolio-alpha-cyan-55.vercel.app/",
  },
];

const categories = [
  "All",
  "Web Apps",
  "E-commerce",
  "Portfolio",
  "Experiments",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <PageTransition>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Header Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans animate-slide-in-up">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto animate-slide-in-up">
              A curated collection of digital experiences that push the
              boundaries of web development. Each project represents a unique
              challenge solved with creativity and technical excellence.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
              {filteredProjects.map((project, index) => (
                <a
                  key={project.slug}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-slide-in-up block cursor-pointer hover:scale-105 transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </a>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
              Like What You See?
            </h2>
            <p className="text-xl text-muted-foreground font-serif mb-8 max-w-2xl mx-auto">
              Let's collaborate and create something extraordinary together.
              Your vision, my expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors animate-glow">
                  Start a Project
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
