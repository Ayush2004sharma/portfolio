"use client"

import type React from "react"

import { useState } from "react"

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  hoverColor: string
}

export function SocialLink({ href, icon, label, hoverColor }: SocialLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full border-2 border-border transition-all duration-300 ${
          isHovered ? `border-[${hoverColor}] scale-110` : "hover:border-primary"
        }`}
        style={{
          borderColor: isHovered ? hoverColor : undefined,
          backgroundColor: isHovered ? `${hoverColor}20` : undefined,
        }}
      >
        <div
          className={`transition-all duration-300 ${isHovered ? "scale-125" : ""}`}
          style={{ color: isHovered ? hoverColor : undefined }}
        >
          {icon}
        </div>
      </div>
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </a>
  )
}
