"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "E-Commerce Revolution",
    description: "Next.js 14 app with advanced animations and micro-interactions",
    image: "/modern-ecommerce-website.png",
    tags: ["React", "Next.js", "Framer Motion"],
  },
  {
    title: "AI Dashboard",
    description: "Real-time analytics dashboard with 3D visualizations",
    image: "/placeholder-y1o95.png",
    tags: ["TypeScript", "Three.js", "WebGL"],
  },
  {
    title: "Creative Portfolio",
    description: "Award-winning portfolio with immersive storytelling",
    image: "/creative-portfolio-website.png",
    tags: ["GSAP", "WebGL", "CSS Art"],
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
            <div key={project.title} className="group cursor-pointer" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
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
