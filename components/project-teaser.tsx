"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredProjects = [
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
    live: "https://doctor-appointment-frontend-five.vercel.app/",
  },
]

export function ProjectTeaser() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">Featured Work</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            A glimpse into the digital experiences I've crafted with passion and precision
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer animate-slide-in-up block hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

  <div className="text-center">
  <Link href="/projects">
    <Button size="lg" className="animate-glow">
      View All Projects
    </Button>
  </Link>
</div>
      </div>
    </section>
  )
}
