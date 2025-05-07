interface SplitTextProps {
  children: string
}

export default function SplitText({ children }: SplitTextProps) {
  // Split text into words
  const words = children.split(" ")

  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-[0.10em]">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </>
  )
}
