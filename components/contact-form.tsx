"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedInput } from "./animated-input"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedInput label="Your Name" name="name" required />
        <AnimatedInput label="Email Address" name="email" type="email" required />
      </div>

      <AnimatedInput label="Subject" name="subject" required />

      <AnimatedInput label="Tell me about your project..." name="message" multiline rows={6} required />

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full animate-glow disabled:animate-none">
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
            Sending Message...
          </div>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
