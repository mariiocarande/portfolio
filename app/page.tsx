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
      year: "2020 - Presente",
      company: "Empresa Innovadora",
      position: "Senior Frontend Developer",
      description:
        "Desarrollo de aplicaciones web utilizando React, Next.js y GSAP. Implementación de animaciones avanzadas y mejora de la experiencia de usuario.",
    },
    {
      year: "2018 - 2020",
      company: "Agencia Digital",
      position: "UI/UX Developer",
      description:
        "Diseño y desarrollo de interfaces de usuario para clientes de diversos sectores. Creación de prototipos interactivos y desarrollo frontend.",
    },
    {
      year: "2016 - 2018",
      company: "Startup Tecnológica",
      position: "Frontend Developer",
      description:
        "Desarrollo de aplicaciones web y móviles. Implementación de diseños responsivos y optimización de rendimiento.",
    },
    {
      year: "2014 - 2016",
      company: "Consultora Web",
      position: "Web Developer",
      description:
        "Desarrollo de sitios web corporativos y tiendas online. Implementación de soluciones personalizadas para clientes.",
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

    // Project cards animation
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
      <section ref={headerRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-5xl">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 overflow-hidden">
              <SplitText>Creando experiencias digitales únicas y memorables</SplitText>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
              Desarrollador web & diseñador UI/UX especializado en crear soluciones digitales impactantes.
            </p>
            <Button
              className="hero-button bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2 group"
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              Mi experiencia
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="profile-image-container relative aspect-square w-full max-w-md mx-auto lg:ml-auto overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Tu foto de perfil"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" ref={experienceRef} className="py-24 px-6 md:px-12 lg:px-24 relative">
        <h2 className="experience-title text-3xl md:text-4xl font-bold mb-16 text-center">
          Mi trayectoria profesional
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
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-24 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Proyectos destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProjectCard
            title="E-commerce Platform"
            description="Una plataforma de comercio electrónico completa con pasarela de pagos y gestión de inventario."
            tags={["Next.js", "Stripe", "Tailwind CSS"]}
            image="/placeholder.svg?height=600&width=800"
            link="#"
          />
          <ProjectCard
            title="Dashboard Analytics"
            description="Panel de control interactivo para visualización de datos y análisis en tiempo real."
            tags={["React", "D3.js", "Firebase"]}
            image="/placeholder.svg?height=600&width=800"
            link="#"
          />
          <ProjectCard
            title="Mobile App"
            description="Aplicación móvil para gestión de tareas y productividad personal."
            tags={["React Native", "Redux", "Node.js"]}
            image="/placeholder.svg?height=600&width=800"
            link="#"
          />
          <ProjectCard
            title="Portfolio Website"
            description="Sitio web de portfolio con animaciones avanzadas y diseño responsivo."
            tags={["GSAP", "Three.js", "Next.js"]}
            image="/placeholder.svg?height=600&width=800"
            link="#"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Sobre mí</h2>
          <div className="about-content space-y-6 text-lg text-gray-300">
            <p>
              Soy un desarrollador web y diseñador UI/UX apasionado por crear experiencias digitales que combinan
              estética y funcionalidad.
            </p>
            <p>
              Con más de 5 años de experiencia en el desarrollo web, me especializo en crear sitios web y aplicaciones
              que no solo se ven bien, sino que también funcionan de manera excepcional.
            </p>
            <p>
              Mi enfoque se centra en la atención al detalle, la optimización del rendimiento y la creación de
              interfaces intuitivas que mejoran la experiencia del usuario.
            </p>
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Habilidades</h3>
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
                  "Three.js",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="contact-item flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <a href="mailto:tu@email.com" className="text-lg hover:text-gray-300 transition-colors">
                  tu@email.com
                </a>
              </div>
              <div className="contact-item flex items-center gap-4">
                <Linkedin className="w-6 h-6" />
                <a
                  href="https://linkedin.com/in/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-gray-300 transition-colors"
                >
                  linkedin.com/in/tuusuario
                </a>
              </div>
              <div className="contact-item flex items-center gap-4">
                <Github className="w-6 h-6" />
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-gray-300 transition-colors"
                >
                  github.com/tuusuario
                </a>
              </div>
            </div>
            <div className="contact-item">
              <p className="text-lg text-gray-300 mb-6">
                ¿Interesado en trabajar juntos? Envíame un mensaje y conversemos sobre tu proyecto.
              </p>
              <Button
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium flex items-center gap-2 group"
                onClick={() => (window.location.href = "mailto:tu@email.com")}
              >
                Enviar mensaje
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
            © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="mailto:tu@email.com" aria-label="Email">
              <Mail className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
