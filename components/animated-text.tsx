"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  /** The text to animate */
  text: string
  /** Optional CSS classes for the container span */
  className?: string
  /** Delay in milliseconds before the animation starts */
  initialDelay?: number
  /** The speed of typing in milliseconds per character */
  speed?: number
}

export function AnimatedText({
  text,
  className = "",
  initialDelay = 0,
  speed = 75, // Default speed of 75ms per character
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Reset state when text prop changes
    setDisplayedText("")
    setIsAnimating(true)

    let currentIndex = 0

    // Start the animation after the initial delay
    const startAnimationTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndex >= text.length -1) {
          // When animation is complete
          clearInterval(intervalId)
          setIsAnimating(false)
        }
        
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++

      }, speed)

      // Cleanup function for the interval
      return () => clearInterval(intervalId)
    }, initialDelay)

    // Cleanup function for the initial timeout
    return () => clearTimeout(startAnimationTimeout)
  }, [text, speed, initialDelay]) // Rerun effect if these props change

  return (
    <span className={className}>
      {displayedText}
      {/* Show the blinking cursor only while animating */}
      {isAnimating && <span className="animate-pulse">|</span>}
    </span>
  )
}