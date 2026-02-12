'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
 import Header from'@/components/common/Header';
 import Footer from'@/components/common/Footer';
 import ConfettiBurst from'./components/ConfettiBurst';
 import Icon from'@/components/ui/AppIcon';

export default function TheCelebration() {
  const router = useRouter()

  useEffect(() => {
    // Auto-redirect to scrapbook after 4 seconds
    const timer = setTimeout(() => {
      router.push('/scrapbook-of-love')
    }, 4000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/20 via-secondary/20 to-pink-100">
      <Header />

      {/* Confetti Burst */}
      <ConfettiBurst />

      <main className="flex-1 flex items-center justify-center relative z-10">
        <section className="container mx-auto px-6 py-20 max-w-4xl">
          <div className="text-center space-y-12 animate-pulse">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <Icon name="HeartIcon" variant="solid" size={64} className="text-primary-foreground" />
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-foreground leading-tight">
              I knew you'd say{' '}
              <span className="text-primary italic">yes</span>! 💕
            </h1>

            <p className="text-2xl md:text-3xl font-inter text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
              You just made me the happiest person in the world!
            </p>

            {/* Animated Hearts */}
            <div className="flex justify-center gap-4 text-6xl animate-bounce">
              <span>💜</span>
              <span>💕</span>
              <span>❤️</span>
            </div>

            {/* Redirect Notice */}
            <div className="mt-16 p-6 bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl max-w-md mx-auto">
              <p className="text-base font-inter text-muted-foreground">
                Taking you to our special memories in a moment...
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}