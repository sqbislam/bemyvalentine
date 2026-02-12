'use client';
import { useState } from 'react';
 import Link from'next/link';
import { usePathname } from 'next/navigation';
 import Icon from'@/components/ui/AppIcon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { id: 'nav_question', label: 'The Big Question', href: '/the-big-question' },
    { id: 'nav_scrapbook', label: 'Scrapbook', href: '/scrapbook-of-love' },
    { id: 'nav_coupons', label: 'Love Coupons', href: '/love-coupons' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/the-big-question" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-2xl">💜</span>
          <span className="text-xl font-playfair font-semibold text-foreground tracking-tight">
            BeMyValentine
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-base font-inter font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-primary border-b-2 border-primary' :'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Icon name={mobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} className="text-foreground" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-inter font-medium py-2 transition-colors ${
                  isActive(link.href)
                    ? 'text-primary border-l-4 border-primary pl-4' :'text-foreground hover:text-primary hover:pl-4'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}