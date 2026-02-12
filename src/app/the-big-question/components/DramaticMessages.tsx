interface DramaticMessagesProps {
  attemptCount: number
}

export default function DramaticMessages({ attemptCount }: DramaticMessagesProps) {
  const messages = [
    "Are you sure? 🥺",
    "My heart just cracked a little...",
    "Please reconsider, I made you a whole website!",
    "I'll do the dishes for a MONTH!",
    "I'll watch your favorite movie... TWICE!",
    "I promise to bring you coffee in bed!",
    "Okay now you're just being mean 😭",
    "The hearts are crying... can't you see?",
    "Even the YES button is getting bigger! It's a sign!",
    "This is your last chance... (not really, but still!)",
  ]

  if (attemptCount === 0) return null

  const messageIndex = Math.min(attemptCount - 1, messages.length - 1)

  return (
    <div className="text-center mt-8 animate-pulse">
      <p className="text-xl md:text-2xl font-playfair italic text-primary">
        {messages[messageIndex]}
      </p>
    </div>
  )
}