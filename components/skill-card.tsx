"use client"

import { useState } from "react"

interface SkillCardProps {
  name: string
  description: string
  icon: string
}

export function SkillCard({ name, description, icon }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:scale-105 hover:border-primary/50 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{name}</h3>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
