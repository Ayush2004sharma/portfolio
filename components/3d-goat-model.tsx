"use client"

import { useRef, useEffect, useState } from "react"

export function GoatModel3D() {
  const modelRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (modelRef.current) {
        const rect = modelRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const x = (e.clientX - centerX) / (rect.width / 2)
        const y = (e.clientY - centerY) / (rect.height / 2)

        setMousePosition({ x: x * 15, y: y * 15 })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={modelRef}
      className="relative w-80 h-80 mx-auto animate-float"
      style={{
        transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* 3D Goat Model Placeholder - Using CSS to create a stylized geometric goat */}
      <div className="relative w-full h-full">
        {/* Goat Body */}
        <div className="absolute top-1/2 left-1/2 w-32 h-24 bg-gradient-to-br from-primary/80 to-primary rounded-3xl transform -translate-x-1/2 -translate-y-1/2 animate-glow" />

        {/* Goat Head */}
        <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-2xl transform -translate-x-1/2 -translate-y-1/2" />

        {/* Horns */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -left-3 -top-2 w-2 h-8 bg-accent rounded-full transform rotate-12" />
          <div className="absolute -right-1 -top-2 w-2 h-8 bg-accent rounded-full transform -rotate-12" />
        </div>

        {/* Eyes */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -left-2 top-1 w-2 h-2 bg-background rounded-full" />
          <div className="absolute right-0 top-1 w-2 h-2 bg-background rounded-full" />
        </div>

        {/* Legs */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
          <div className="absolute -left-8 w-3 h-12 bg-primary/70 rounded-full" />
          <div className="absolute -left-4 w-3 h-12 bg-primary/70 rounded-full" />
          <div className="absolute right-1 w-3 h-12 bg-primary/70 rounded-full" />
          <div className="absolute right-5 w-3 h-12 bg-primary/70 rounded-full" />
        </div>

        {/* Headphones */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -left-6 top-2 w-4 h-4 bg-accent rounded-full border-2 border-accent-foreground" />
          <div className="absolute -right-4 top-2 w-4 h-4 bg-accent rounded-full border-2 border-accent-foreground" />
          <div className="absolute -left-2 -top-1 w-8 h-2 bg-accent rounded-full" />
        </div>
      </div>
    </div>
  )
}
