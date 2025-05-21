"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  type Certificate = {
    id: number
    title: string
    issuer: string
    date: string
    image: string
    credentialUrl: string
    description: string
  }

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "June 2022",
      image: "/placeholder.svg?height=600&width=800",
      credentialUrl: "https://example.com/credential/123",
      description:
        "Comprehensive course covering front-end and back-end web development technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    },
    {
      id: 2,
      title: "UI/UX Design Professional",
      issuer: "Coursera",
      date: "March 2021",
      image: "/placeholder.svg?height=600&width=800",
      credentialUrl: "https://example.com/credential/456",
      description:
        "Professional certification in UI/UX design principles, user research, wireframing, prototyping, and usability testing.",
    },
    {
      id: 3,
      title: "React Native Specialist",
      issuer: "LinkedIn Learning",
      date: "November 2020",
      image: "/placeholder.svg?height=600&width=800",
      credentialUrl: "https://example.com/credential/789",
      description:
        "Specialized training in building cross-platform mobile applications using React Native, including state management, navigation, and native module integration.",
    },
    {
      id: 4,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "August 2019",
      image: "/placeholder.svg?height=600&width=800",
      credentialUrl: "https://example.com/credential/101",
      description:
        "Professional certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS.",
    },
  ]

  return (
    <section id="certificates" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Certificates</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="h-full hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedCertificate(certificate)}
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{certificate.title}</CardTitle>
                  <CardDescription>{certificate.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">{certificate.description}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">{certificate.date}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCertificate} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
        {selectedCertificate && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedCertificate.title}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={selectedCertificate.image || "/placeholder.svg"}
                  alt={selectedCertificate.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-semibold">Issuer</h4>
                    <p className="text-muted-foreground">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Date</h4>
                    <p className="text-muted-foreground">{selectedCertificate.date}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground">{selectedCertificate.description}</p>
                </div>
                <a href={selectedCertificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" /> Verify Credential
                  </Button>
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
