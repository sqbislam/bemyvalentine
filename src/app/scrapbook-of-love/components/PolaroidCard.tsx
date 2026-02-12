interface PolaroidCardProps {
  image: string
  alt: string
  caption: string
  rotation: string
  delay: number
}

export default function PolaroidCard({ image, alt, caption, rotation, delay }: PolaroidCardProps) {
  return (
    <div
      className={`reveal bg-card border-8 border-card shadow-xl hover:shadow-2xl min-h-[400px] transition-all duration-500 hover:scale-105 ${rotation} p-4`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Photo */}
      <div className="aspect-[3/4] bg-muted overflow-hidden mb-4">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover grayscale-[10%] sepia-[5%]"
        />
      </div>

      {/* Caption */}
      <p className="text-center font-inter text-sm md:text-base text-foreground italic leading-relaxed">
        {caption}
      </p>
    </div>
  )
}