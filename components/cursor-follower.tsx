"use client"

import { useEffect, useState, useRef } from "react"

export function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const mousePositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePositionRef.current.x - 10}px, ${mousePositionRef.current.y - 10}px)`
      }
    }

    const updateMousePosition = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY }

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(updateCursorPosition)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target
      if (!target || !(target instanceof Element)) return

      const element = target as HTMLElement
      if (
        element.tagName === "BUTTON" ||
        element.tagName === "A" ||
        element.closest("button") ||
        element.closest("a") ||
        element.classList.contains("cursor-pointer") ||
        element.style.cursor === "pointer"
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 transition-all duration-300 ${
        isHovering ? "scale-150 bg-primary/20" : "scale-100 bg-primary/10"
      }`}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "2px solid #ec4899",
        willChange: "transform",
      }}
    />
  )
}
