import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">💜</span>
            <span className="text-base font-playfair font-semibold text-foreground">
              BeMyValentine Sifat?
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="text-muted-foreground">For Sifat Tasnim</span>
            <span className="text-muted-foreground">
              Made with 💜 by your hubby
            </span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2026 All rights reserved by your hubby.
          </div>
        </div>
      </div>
    </footer>
  )
}