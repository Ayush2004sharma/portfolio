"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface EnhancedButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  onClick?: () => void
  href?: string
  type?: "button" | "submit"
  disabled?: boolean
}

export function EnhancedButton({
  children,
  className = "",
  variant = "default",
  size = "default",
  onClick,
  href,
  type = "button",
  disabled = false,
}: EnhancedButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newRipple = { x, y, id: Date.now() }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)

    onClick?.()
  }

  const ButtonComponent = href ? "a" : "button"

  return (
    <ButtonComponent
      href={href}
      type={href ? undefined : type}
      onClick={href ? undefined : handleClick}
      disabled={disabled}
      className={`relative overflow-hidden group ${className}`}
    >
      <Button variant={variant} size={size} className="w-full h-full" disabled={disabled}>
        {children}
      </Button>

      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: "20px",
            height: "20px",
          }}
        />
      ))}

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </ButtonComponent>
  )
}
