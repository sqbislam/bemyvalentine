'use client';
import { useEffect, useState } from 'react';

interface Confetti {
  id: string
  left: string
  animationDelay: string
  animationClass: string
  emoji: string
  color: string
}

export default function ConfettiBurst() {
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    const emojis = ['💜', '💕', '❤️', '💖', '🌸', '✨', '🎉', '💗']
    const colors = ['#C084FC', '#F9A8D4', '#FBBF24', '#E9D5FF', '#F472B6']
    const animationClasses = [
      'animate-confetti-fall',
      'animate-confetti-fall-left',
      'animate-confetti-fall-right',
    ]

    const generatedConfetti: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
      id: `confetti_${i}`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 0.5}s`,
      animationClass: animationClasses[Math.floor(Math.random() * animationClasses.length)],
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setConfetti(generatedConfetti)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((item) => (
        <div
          key={item.id}
          className={`absolute ${item.animationClass}`}
          style={{
            left: item.left,
            top: '-50px',
            animationDelay: item.animationDelay,
            fontSize: '24px',
            color: item.color,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  )
}