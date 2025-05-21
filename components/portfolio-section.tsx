"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  type Project = {
    id: number
    title: string
    category: string
    image: string
    description: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
    longDescription: string
  }

  const categories = ["All", "Web Development", "UI/UX Design", "Mobile App"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      description: "A fully responsive e-commerce platform with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "A comprehensive e-commerce solution built with React on the frontend and Node.js on the backend. Features include product catalog, user authentication, shopping cart, payment processing with Stripe, and order management. The platform is fully responsive and optimized for all devices.",
    },
    {
      id: 2,
      title: "Travel App UI Design",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "Modern UI design for a travel booking application",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "A sleek and intuitive UI design for a travel booking application. The design focuses on user experience, with easy navigation and visually appealing interfaces. The project included user research, wireframing, prototyping, and final design implementation.",
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      category: "Mobile App",
      image: "/placeholder.svg?height=600&width=800",
      description: "Cross-platform mobile app for tracking fitness activities",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "A cross-platform mobile application built with React Native for tracking fitness activities. The app allows users to log workouts, track progress, set goals, and view statistics. It uses Firebase for backend services and Redux for state management.",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      description: "Personal portfolio website with modern design",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "A personal portfolio website built with Next.js and Tailwind CSS. The website features a modern design with smooth animations powered by Framer Motion. It showcases projects, skills, and experience in an engaging and interactive way.",
    },
    {
      id: 5,
      title: "Restaurant Booking System",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
      description: "Online reservation system for restaurants",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "An online reservation system for restaurants that allows customers to book tables, view menus, and leave reviews. The system includes an admin dashboard for restaurant owners to manage bookings, update menus, and respond to customer reviews.",
    },
    {
      id: 6,
      title: "Health App UI Kit",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "Comprehensive UI kit for health and wellness apps",
      technologies: ["Sketch", "Photoshop", "InVision"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      longDescription:
        "A comprehensive UI kit designed for health and wellness applications. The kit includes over 100 components and 50 screens, covering various features such as activity tracking, nutrition planning, meditation guides, and health metrics visualization.",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects and see how I've helped clients achieve their goals through innovative solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 text-center">{project.description}</p>
                  <span className="px-3 py-1 bg-primary/80 rounded-full text-xs">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.category}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                <p className="text-muted-foreground mb-4">{selectedProject.longDescription}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button>
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Preview
                    </Button>
                  </a>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
