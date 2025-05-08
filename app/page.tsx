"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import ProjectCard from "@/components/project-card"
import Navbar from "@/components/navbar"
import SplitText from "@/components/split-text"
import TimelineItem from "@/components/timeline-item"
import Image from "next/image"

export default function Portfolio() {
  const headerRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  // Experience data
  const experiences = [
    {
      year: "2023 - Present",
      company: "The Blue Box",
      position: "Full Stack Developer",
      description:
        "Development of web and mobile applications, including landing pages, admin dashboards, and mobile apps using React Native. Leveraging modern tools to create responsive, user-focused solutions and optimize the overall user experience.",
      website: "https://www.thebluebox.dev"
    },
    {
      year: "2019 - 2023",
      company: "Nimble LA",
      position: "Frontend Developer",
      description:
        "Development of web applications, including landing pages, admin dashboards, and Chrome extensions, using modern tools. Refactoring of applications with legacy code, creation of PWAs, and management of real-time data. Independent and team-based work, utilizing project management tools to optimize processes and enhance user experience.",
      website: "https://nimble.la",
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Initial animation for the header
    gsap.fromTo(
      ".hero-title .word",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      },
    )

    gsap.fromTo(
      ".hero-subtitle",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1.2,
      },
    )

    gsap.fromTo(
      ".hero-button",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1.4,
      },
    )

    gsap.fromTo(
      ".profile-image-container",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1.6,
      },
    )

    // Experience section title animation
    gsap.fromTo(
      ".experience-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
        },
      },
    )

    // Timeline line drawing animation
    gsap.fromTo(
      ".timeline-progress",
      { scaleY: 0, transformOrigin: "top" },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.6,
        },
      },
    )

    // // Project cards animation
    gsap.fromTo(
      ".project-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
      },
    )

    // About section animation
    gsap.fromTo(
      ".about-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      },
    )

    // Contact section animation
    gsap.fromTo(
      ".contact-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      },
    )

    // Cursor animation
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")

    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      })

      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      })
    })

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(".cursor", { scale: 1.5, opacity: 0.5, duration: 0.3 })
        gsap.to(".cursor-follower", { scale: 3, opacity: 0.1, duration: 0.3 })
      })

      el.addEventListener("mouseleave", () => {
        gsap.to(".cursor", { scale: 1, opacity: 1, duration: 0.3 })
        gsap.to(".cursor-follower", { scale: 1, opacity: 0.3, duration: 0.3 })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main className="relative bg-black text-white min-h-screen">
      {/* Custom cursor */}
      <div className="cursor fixed w-5 h-5 rounded-full bg-white z-50 pointer-events-none mix-blend-difference"></div>
      <div className="cursor-follower fixed w-10 h-10 rounded-full bg-white opacity-30 z-40 pointer-events-none"></div>

      <Navbar />

      {/* Hero Section */}
      <section ref={headerRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-5xl">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 overflow-hidden">
              <SplitText>Creating unique and memorable digital experiences</SplitText>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
              Passionate web & mobile developer creating innovative digital solutions.
            </p>
            <Button
              className="hero-button bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2 group"
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              My experience
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="profile-image-container relative aspect-square w-full max-w-md mx-auto lg:ml-auto overflow-hidden rounded-full">
            <Image
              src="/profile-pic-1.png?height=800&width=800"
              alt="Profile Image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" ref={experienceRef} className="py-24 px-6 md:px-12 lg:px-24 relative bg-zinc-900">
        <h2 className="experience-title text-3xl md:text-4xl font-bold mb-16 text-center">
          My professional career path
        </h2>

        {/* Timeline progress indicator (animated line) */}
        <div className="timeline-progress absolute left-[7px] md:left-1/2 top-[120px] bottom-[100px] w-[2px] bg-white/50 md:transform md:-translate-x-1/2"></div>

        <div className="relative max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              year={exp.year}
              company={exp.company}
              position={exp.position}
              description={exp.description}
              website={exp.website}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-24 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProjectCard
            title="Landing Page"
            description="Landing page for a web application using Next.js and Tailwind CSS."
            tags={["Next.js", "Lucide","TypeScript", "Lenis", "Tailwind CSS"]}
            image="/project-1.png?height=600&width=800"
            link="https://landing-example-chi.vercel.app/"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">About me</h2>
          <div className="about-content space-y-6 text-lg text-gray-300">
            <p>
              I am a web & mobile developer passionate about creating digital experiences that combine
              aesthetics and functionality.
            </p>
            <p>
              With over 5 years of experience in web development, I specialize in creating websites and applications
              that not only look good but also work exceptionally well.
            </p>
            <p>
              My approach focuses on attention to detail, performance optimization, and creating
              intuitive interfaces that enhance user experience.
            </p>
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "GSAP",
                  "Tailwind CSS",
                  "UI/UX Design",
                  "Figma",
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-zinc-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="contact-item flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <a href="mailto:mdc.mariio@gmail.com" className="text-lg hover:text-gray-300 transition-colors">
                  mdc.mariio@gmail.com
                </a>
              </div>
              <div className="contact-item flex items-center gap-4">
                <Linkedin className="w-6 h-6" />
                <a
                  href="https://linkedin.com/in/mario-carande-scarafia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-gray-300 transition-colors"
                >
                  linkedin.com/in/mario-carande-scarafia
                </a>
              </div>
              <div className="contact-item flex items-center gap-4">
                <Github className="w-6 h-6" />
                <a
                  href="https://github.com/mariiocarande"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-gray-300 transition-colors"
                >
                  github.com/mariiocarande
                </a>
              </div>
            </div>
            <div className="contact-item">
              <p className="text-lg text-gray-300 mb-6">
                Interested in working together? Send me a message and let's discuss your project.
              </p>
              <Button
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2 group"
                onClick={() => (window.location.href = "mailto:mdc.mariio@gmail.com")}
              >
                Send Message
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Mario Carande Scarafía. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/mario-carande-scarafia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://github.com/mariiocarande" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="mailto:mdc.mariio@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
