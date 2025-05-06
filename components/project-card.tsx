"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export default function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isHovered) {
      gsap.to(cardRef.current, {
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      })
    } else {
      gsap.to(cardRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }, [isHovered])

  return (
    <div
      ref={cardRef}
      className="project-card group relative overflow-hidden rounded-xl bg-zinc-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          {title}
          <ArrowUpRight
            className={`w-5 h-5 transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
          />
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a
        href={link}
        className="absolute inset-0 z-10"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver proyecto ${title}`}
      ></a>
    </div>
  )
}
