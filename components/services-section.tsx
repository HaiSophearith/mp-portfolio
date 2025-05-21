"use client"

import { motion } from "framer-motion"
import { Code, Layout, Smartphone, Globe, Database, PenTool } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Web Design",
      description:
        "Creating beautiful, responsive websites that provide an exceptional user experience across all devices.",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "Building robust, scalable web applications using modern technologies and best practices.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications that work seamlessly on iOS and Android devices.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "SEO Optimization",
      description: "Improving your website's visibility in search engines to drive more organic traffic.",
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Database Design",
      description: "Creating efficient database structures that ensure data integrity and optimal performance.",
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that delight users and achieve business goals.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a wide range of services to help businesses and individuals establish a strong online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
