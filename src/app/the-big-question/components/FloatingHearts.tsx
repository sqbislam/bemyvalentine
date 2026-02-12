'use client';
import { useEffect, useState } from 'react';

interface Heart {
  id: string
  left: string
  animationDelay: string
  animationDuration: string
  animationClass: string
  size: number
  color: string
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const colors = ['#C084FC', '#F9A8D4', '#FBBF24', '#E9D5FF']
    const animationClasses = ['animate-float-heart', 'animate-float-heart-slow', 'animate-float-heart-fast']
    
    const generatedHearts: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: `heart_${i}`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${10 + Math.random() * 10}s`,
      animationClass: animationClasses[Math.floor(Math.random() * animationClasses.length)],
      size: 20 + Math.random() * 30,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    
    setHearts(generatedHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute ${heart.animationClass}`}
          style={{
            left: heart.left,
            bottom: '-50px',
            animationDelay: heart.animationDelay,
            animationDuration: heart.animationDuration,
            fontSize: `${heart.size}px`,
            color: heart.color,
          }}
        >
          💜
        </div>
      ))}
    </div>
  )
}