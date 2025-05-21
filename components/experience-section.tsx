"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExperienceSection() {
  const workExperience = [
    {
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description:
        "Lead developer for client projects, managing a team of 5 developers. Implemented modern front-end architectures using React and Next.js, resulting in a 40% improvement in website performance.",
    },
    {
      title: "Web Developer",
      company: "Digital Creations",
      period: "2018 - 2020",
      description:
        "Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UI. Optimized existing websites for better performance and SEO.",
    },
    {
      title: "Junior Developer",
      company: "WebCraft Agency",
      period: "2016 - 2018",
      description:
        "Assisted in the development of websites using HTML, CSS, and JavaScript. Maintained and updated existing client websites. Participated in team code reviews and project planning.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description:
        "Specialized in Web Technologies and User Interface Design. Graduated with honors. Thesis on 'Optimizing Web Application Performance'.",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description:
        "Focused on Software Development and Database Management. Participated in various hackathons and coding competitions.",
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      period: "2009 - 2010",
      description:
        "Intensive program covering front-end and back-end web development technologies. Completed with distinction.",
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </div>

        <Tabs defaultValue="work" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="work" className="text-base">
              <Briefcase className="mr-2 h-4 w-4" /> Work Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="text-base">
              <GraduationCap className="mr-2 h-4 w-4" /> Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription className="text-base">{job.company}</CardDescription>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {job.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription className="text-base">{edu.institution}</CardDescription>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
