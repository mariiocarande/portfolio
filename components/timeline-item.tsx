"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface TimelineItemProps {
  year: string
  company: string
  position: string
  description: string
  website?: string
  index: number
  isLast?: boolean
}

export default function TimelineItem({
  year,
  company,
  position,
  description,
  website,
  index,
  isLast = false,
}: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (itemRef.current) {
      // Animate the timeline item when it comes into view
      gsap.fromTo(
        itemRef.current,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 80%",
          },
        },
      )
    }
  }, [index])

  return (
    <div ref={itemRef} className="timeline-item relative">
      {/* Timeline connector */}
      <div className="absolute left-[7px] md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-zinc-700">
        {/* Dot */}
        <div className="absolute z-10 top-[24px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white"></div>
        {/* Hide the line after the last item */}
        {isLast && <div className="absolute z-0 top-[24px] bottom-0 w-full bg-black"></div>}
      </div>

      {/* Content */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-12 md:pb-20 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
      >
        {/* Year - always on the opposite side in desktop */}
        <div className={`pl-10 md:pl-0 ${isLast ? "md:text-left" : "md:text-right"} ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
          <span className="inline-block bg-zinc-800 text-white px-4 py-1 rounded-full text-sm font-medium">{year}</span>
        </div>

        {/* Content - always on the opposite side in desktop */}
        <div
          className={`pl-10 md:pl-0 ${index % 2 === 0 ? "md:order-2" : "md:order-1"} ${index % 2 === 1 ? "md:text-right" : ""}`}
        >
          <h3 className="text-xl font-bold">{company}</h3>
          <h4 className="text-lg text-gray-400 mb-2">{position}</h4>
          <p className="text-gray-300">{description}</p>
          <div className="mt-4">
            <a
              href={website || "#"}
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

