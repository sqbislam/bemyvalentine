'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
 import Header from'@/components/common/Header';
 import Footer from'@/components/common/Footer';
 import FloatingHearts from'./components/FloatingHearts';
 import DodgingNoButton from'./components/DodgingNoButton';
 import DramaticMessages from'./components/DramaticMessages';
 import Icon from'@/components/ui/AppIcon';

export default function TheBigQuestion() {
  const router = useRouter()
  const [noAttempts, setNoAttempts] = useState(0)

  const handleYesClick = () => {
    router.push('/the-celebration')
  }

  const handleNoAttempt = () => {
    setNoAttempts((prev) => prev + 1)
  }

  // YES button scale increases with each NO attempt
  const yesButtonScale = 1 + Math.min(noAttempts * 0.15, 0.6)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-purple-50 to-pink-50">
      <Header />
      
      {/* Floating Hearts Background */}
      <FloatingHearts />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
          <div className="text-center space-y-12">
            {/* Main Question */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-foreground leading-tight tracking-tight">
              Will you be my{' '}
              <span className="text-primary italic">Valentine</span>?
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl font-inter text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              My gorgeous wife, I am forever your valentine. But I would still ask you to be mine every year. You are deeply loved and never taken for granted
            </p>

            {/* Buttons Section */}
            <div className="space-y-8 mt-16">
              {/* YES Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleYesClick}
                  className="px-12 py-6 bg-primary text-primary-foreground rounded-2xl font-inter font-bold text-2xl md:text-3xl flex items-center gap-4 hover:scale-105 transition-all duration-300 animate-pulse-glow"
                  style={{
                    transform: `scale(${yesButtonScale})`,
                  }}
                >
                  <Icon name="HeartIcon" variant="solid" size={32} className="text-primary-foreground" />
                  YES! 💕
                  <Icon name="HeartIcon" variant="solid" size={32} className="text-primary-foreground" />
                </button>
              </div>

              {/* NO Button (Dodging) */}
              <DodgingNoButton onNoAttempt={handleNoAttempt} />

              {/* Dramatic Messages */}
              <DramaticMessages attemptCount={noAttempts} />
            </div>

            {/* Stats */}
            {noAttempts > 0 && (
              <div className="mt-12 p-6 bg-card border-2 border-border rounded-2xl max-w-md mx-auto">
                <p className="text-sm font-inter text-muted-foreground uppercase tracking-wider mb-2">
                  Rejection Attempts
                </p>
                <p className="text-5xl font-playfair font-bold text-primary">
                  {noAttempts}
                </p>
                <p className="text-sm font-inter text-muted-foreground mt-2 italic">
                  But I'm not giving up! 💪
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}