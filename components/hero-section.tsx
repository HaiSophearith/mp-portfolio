"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [text, setText] = useState("")
  const [fullText] = useState("Web Developer & Designer")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 100)
    }
  }, [index, text, fullText])

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Welcome to my portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground h-8">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              I create stunning digital experiences that make an impact. With expertise in web development and design, I
              bring ideas to life through clean code and beautiful interfaces.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="John Doe"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
