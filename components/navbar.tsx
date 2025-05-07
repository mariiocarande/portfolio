"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Animate menu opening
      gsap.fromTo(
        ".mobile-menu-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power3.out" },
      )
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 transition-all duration-300 ${
          scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            MCS
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </button>
            {/* <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button> */}
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <Button
              className="bg-white text-black hover:bg-gray-200 rounded-full px-6"
              onClick={() => (window.location.href = "mailto:tu@email.com")}
            >
              Let's talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-24 px-6 flex flex-col">
          <div className="flex flex-col gap-8 text-2xl">
            <button
              className="mobile-menu-item text-left py-4 border-b border-zinc-800"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className="mobile-menu-item text-left py-4 border-b border-zinc-800"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="mobile-menu-item text-left py-4 border-b border-zinc-800"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className="mobile-menu-item text-left py-4 border-b border-zinc-800"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            <Button
              className="mobile-menu-item mt-4 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-6 text-lg"
              onClick={() => (window.location.href = "mailto:tu@email.com")}
            >
              Let's talk
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
