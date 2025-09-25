"use client"

import { ScrollReveal } from "./scroll-reveal"

interface TimelineItemProps {
  year: string
  title: string
  company: string
  description: string
  skills: string[]
  delay?: number
}

export function TimelineItem({ year, title, company, description, skills, delay = 0 }: TimelineItemProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="relative pl-8 pb-12 border-l-2 border-primary/30 last:border-l-0">
        {/* Timeline dot */}
        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />

        <div className="bg-card/50 rounded-lg p-6 hover:bg-card/70 transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
              <p className="text-primary font-medium">{company}</p>
            </div>
            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
              {year}
            </span>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
