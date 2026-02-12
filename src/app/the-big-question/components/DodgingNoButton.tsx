'use client';
import { useState, useRef, useEffect } from 'react';

interface DodgingNoButtonProps {
  onNoAttempt: () => void
}

export default function DodgingNoButton({ onNoAttempt }: DodgingNoButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isShaking, setIsShaking] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && buttonRef.current) {
      const container = containerRef.current.getBoundingClientRect()
      const button = buttonRef.current.getBoundingClientRect()
      
      // Center the button initially
      setPosition({
        x: (container.width - button.width) / 2,
        y: (container.height - button.height) / 2,
      })
    }
  }, [])

  const dodgeButton = (e: React.MouseEvent) => {
    if (!buttonRef.current || !containerRef.current) return

    const button = buttonRef.current.getBoundingClientRect()
    const container = containerRef.current.getBoundingClientRect()
    
    const mouseX = e.clientX - container.left
    const mouseY = e.clientY - container.top
    
    const buttonCenterX = position.x + button.width / 2
    const buttonCenterY = position.y + button.height / 2
    
    const distance = Math.sqrt(
      Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
    )
    
    // If cursor is within 150px of button, dodge
    if (distance < 150) {
      onNoAttempt()
      
      // Shake animation
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      
      // Calculate new position (opposite direction from cursor)
      const angle = Math.atan2(buttonCenterY - mouseY, buttonCenterX - mouseX)
      const moveDistance = 200
      
      let newX = position.x + Math.cos(angle) * moveDistance
      let newY = position.y + Math.sin(angle) * moveDistance
      
      // Keep button within container bounds
      const maxX = container.width - button.width - 20
      const maxY = container.height - button.height - 20
      
      newX = Math.max(20, Math.min(newX, maxX))
      newY = Math.max(20, Math.min(newY, maxY))
      
      setPosition({ x: newX, y: newY })
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onNoAttempt()
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 md:h-80"
      onMouseMove={dodgeButton}
    >
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`absolute px-8 py-4 bg-muted text-foreground rounded-2xl font-inter font-semibold text-lg border-2 border-border hover:bg-muted-foreground/10 transition-all duration-300 ${
          isShaking ? 'animate-shake' : ''
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        No 😔
      </button>
    </div>
  )
}