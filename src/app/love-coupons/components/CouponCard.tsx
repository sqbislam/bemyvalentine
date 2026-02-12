interface CouponCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  delay: number;
}

export default function CouponCard({ title, description, icon, color, delay }: CouponCardProps) {
  return (
    <div
      className="reveal group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Coupon Ticket */}
      <div className="relative bg-card rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
        {/* Gradient Header */}
        <div className={`bg-gradient-to-r ${color} p-6 relative`}>
          {/* Tear-off perforation effect */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-card">
            <div className="absolute top-0 left-0 right-0 border-t-4 border-dashed border-white opacity-50"></div>
          </div>
          
          {/* Icon */}
          <div className="text-5xl mb-2 text-center">{icon}</div>
        </div>

        {/* Coupon Content */}
        <div className="p-6 space-y-3">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-playfair font-bold text-foreground text-center leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base font-inter text-muted-foreground text-center leading-relaxed">
            {description}
          </p>

          {/* Dotted Border Separator */}
          <div className="border-t-2 border-dashed border-border my-4"></div>

          {/* Redeem Text */}
          <p className="text-xs font-inter text-primary text-center uppercase tracking-wider font-semibold">
            Redeemable Anytime 💜
          </p>
        </div>

        {/* Side Perforations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Left side dots */}
          <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-around py-4">
            {[...Array(8)].map((_, i) => (
              <div key={`left-${i}`} className="w-2 h-2 bg-background rounded-full"></div>
            ))}
          </div>
          
          {/* Right side dots */}
          <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-around py-4">
            {[...Array(8)].map((_, i) => (
              <div key={`right-${i}`} className="w-2 h-2 bg-background rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}