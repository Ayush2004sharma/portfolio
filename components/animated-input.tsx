"use client"

import { useState, useRef } from "react"

interface AnimatedInputProps {
  label: string
  type?: string
  name: string
  required?: boolean
  multiline?: boolean
  rows?: number
}

export function AnimatedInput({
  label,
  type = "text",
  name,
  required = false,
  multiline = false,
  rows = 4,
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => {
    setIsFocused(false)
    setHasValue(inputRef.current?.value !== "")
  }

  const InputComponent = multiline ? "textarea" : "input"

  return (
    <div className="relative">
      <InputComponent
        ref={inputRef as any}
        type={multiline ? undefined : type}
        name={name}
        required={required}
        rows={multiline ? rows : undefined}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full px-4 py-4 bg-input border border-border rounded-lg text-foreground placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
        placeholder={label}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue ? "top-2 text-xs text-primary" : "top-4 text-base text-muted-foreground"
        }`}
      >
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
    </div>
  )
}
