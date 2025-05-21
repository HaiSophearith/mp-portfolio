"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, MapPin, Phone } from "lucide-react"

export default function AboutSection() {
  const personalInfo = [
    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "john.doe@example.com" },
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "New York, USA" },
  ]

  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "UI/UX Design", percentage: 75 },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better and learn about my skills, experience, and passion for creating amazing digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=800&width=600" alt="John Doe" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              I'm <span className="text-primary">John Doe</span>, a Web Developer & Designer
            </h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development and design, I specialize in creating responsive,
              user-friendly websites and applications. My passion lies in combining technical expertise with creative
              design to deliver exceptional digital experiences.
            </p>
            <p className="text-muted-foreground">
              I'm proficient in front-end and back-end technologies, with a strong focus on modern JavaScript frameworks
              like React and Next.js. I also have experience in UI/UX design, ensuring that the websites I build are not
              only functional but also visually appealing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {personalInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="p-2 rounded-full bg-primary/10 text-primary mb-2">{info.icon}</div>
                    <h4 className="font-medium">{info.label}</h4>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">My Skills</h4>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted dark:bg-muted/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button className="mt-4">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
