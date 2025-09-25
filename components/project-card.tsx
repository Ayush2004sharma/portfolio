"use client"

import { useState } from "react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  slug: string
  featured?: boolean
}

export function ProjectCard({ title, description, image, tags, category, slug, featured = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/projects/${slug}`}>
      <div
        className={`group cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
          featured ? "md:col-span-2 md:row-span-2" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
          {/* Project Image */}
          <div className={`relative overflow-hidden ${featured ? "aspect-[2/1]" : "aspect-[4/3]"}`}>
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                {category}
              </span>
            </div>

            {/* Content Overlay */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-300 ${
                isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <h3 className={`font-bold mb-2 text-foreground ${featured ? "text-2xl" : "text-xl"}`}>{title}</h3>
              <p className={`text-muted-foreground mb-4 ${featured ? "text-base" : "text-sm"}`}>{description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, featured ? 5 : 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary/80 text-secondary-foreground rounded-md backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
                {tags.length > (featured ? 5 : 3) && (
                  <span className="px-2 py-1 text-xs bg-secondary/80 text-secondary-foreground rounded-md backdrop-blur-sm">
                    +{tags.length - (featured ? 5 : 3)}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Static Content (visible when not hovered) */}
          <div className={`p-6 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
            <h3 className={`font-bold mb-2 text-foreground ${featured ? "text-2xl" : "text-xl"}`}>{title}</h3>
            <p className={`text-muted-foreground mb-4 ${featured ? "text-base" : "text-sm"}`}>{description}</p>

            <div className="flex flex-wrap gap-2">
              {tags.slice(0, featured ? 5 : 3).map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                  {tag}
                </span>
              ))}
              {tags.length > (featured ? 5 : 3) && (
                <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                  +{tags.length - (featured ? 5 : 3)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
