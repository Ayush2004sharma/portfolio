"use client"
import { Button } from "@/components/ui/button"

interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`transition-all duration-300 ${
            activeCategory === category
              ? "animate-glow"
              : "hover:bg-primary hover:text-primary-foreground bg-transparent"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
