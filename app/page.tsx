import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { GoatModel3D } from "@/components/3d-goat-model"
import { AnimatedText } from "@/components/animated-text"
import { SkillCard } from "@/components/skill-card"
import { ProjectTeaser } from "@/components/project-teaser"
import { Button } from "@/components/ui/button"
import Link from "next/link" // Import the Link component

const skills = [
  {
    name: "Frontend Magic",
    description: "React, Next.js, TypeScript with pixel-perfect precision",
    icon: "⚡",
  },
  {
    name: "3D & Animation",
    description: "Three.js, GSAP, Framer Motion for immersive experiences",
    icon: "🎨",
  },
  {
    name: "Backend Power",
    description: "Node.js, PostgreSQL, Redis for scalable architectures",
    icon: "🚀",
  },
  {
    name: "AI Integration",
    description: "OpenAI, LangChain, vector databases for intelligent apps",
    icon: "🤖",
  },
]

export default function HomePage() {
  return (
    <PageTransition>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div
              className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent/50 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div className="mb-12">
              <GoatModel3D />
            </div>

            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-sans">
                <AnimatedText text="Crafting Digital" className="block" />
                <AnimatedText text="Excellence" className="block text-primary" speed={300} />
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground font-serif max-w-3xl mx-auto">
                <AnimatedText
                  text="Hi, I'm Ayush Sharma. A creative developer who builds extraordinary web experiences that push the boundaries of what's possible."
                  speed={100}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects">
                <Button size="lg" className="animate-glow text-lg px-8 py-4">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">What I Do Best</h2>
              <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
                Transforming ideas into digital masterpieces with cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <SkillCard {...skill} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Teaser */}
        <ProjectTeaser />

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-muted-foreground font-serif mb-8 max-w-2xl mx-auto">
              Let's collaborate and create digital experiences that leave a lasting impact
            </p>
            <Link href="/contact">
              <Button size="lg" className="animate-glow text-lg px-8 py-4">
                Start a Project
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}