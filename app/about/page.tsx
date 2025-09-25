import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TimelineItem } from "@/components/timeline-item"
import { StatsCounter } from "@/components/stats-counter"
import { Button } from "@/components/ui/button"

const experience = [
  {
    year: "2024",
    title: "Senior Full-Stack Developer",
    company: "Tech Unicorn Inc.",
    description:
      "Leading a team of 8 developers in building next-generation web applications. Architected scalable solutions serving 1M+ users with 99.9% uptime.",
    skills: ["React", "Node.js", "AWS", "Team Leadership", "System Architecture"],
  },
  {
    year: "2022",
    title: "Creative Developer",
    company: "Digital Agency Pro",
    description:
      "Specialized in creating award-winning interactive experiences for Fortune 500 clients. Pioneered new animation techniques that became industry standards.",
    skills: ["Three.js", "GSAP", "WebGL", "Creative Coding", "Client Relations"],
  },
  {
    year: "2020",
    title: "Frontend Engineer",
    company: "Startup Accelerator",
    description:
      "Built responsive web applications from concept to deployment. Collaborated with designers and product managers to deliver pixel-perfect user experiences.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Figma", "Agile Development"],
  },
  {
    year: "2018",
    title: "Junior Developer",
    company: "Local Web Studio",
    description:
      "Started my journey in web development, learning the fundamentals while contributing to client projects. Developed a passion for clean code and user experience.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "Problem Solving"],
  },
]

const values = [
  {
    title: "Craftsmanship",
    description:
      "Every line of code is written with intention. I believe in building things that last and perform beautifully.",
    icon: "🎯",
  },
  {
    title: "Innovation",
    description:
      "Pushing boundaries and exploring new technologies to create experiences that haven't been seen before.",
    icon: "🚀",
  },
  {
    title: "Collaboration",
    description: "The best work happens when diverse minds come together. I thrive in collaborative environments.",
    icon: "🤝",
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do I. Always learning, always growing, always improving.",
    icon: "📚",
  },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
                    The Human Behind the <span className="text-primary">Code</span>
                  </h1>
                  <p className="text-xl text-muted-foreground font-serif leading-relaxed mb-8">
                    I'm not just a developer—I'm a digital craftsperson who believes that great code is an art form.
                    Every project is an opportunity to push boundaries and create something extraordinary.
                  </p>
                  <Button size="lg" className="animate-glow">
                    Let's Connect
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                    <img
                      src="/professional-developer-portrait.png"
                      alt="Professional developer portrait"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float" />
                  <div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 font-sans">By the Numbers</h2>
                <p className="text-xl text-muted-foreground font-serif">A snapshot of my journey in web development</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-8">
              <ScrollReveal delay={100}>
                <div className="text-center">
                  <StatsCounter end={50} suffix="+" />
                  <p className="text-muted-foreground mt-2">Projects Completed</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="text-center">
                  <StatsCounter end={6} suffix=" Years" />
                  <p className="text-muted-foreground mt-2">Experience</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="text-center">
                  <StatsCounter end={15} suffix="+" />
                  <p className="text-muted-foreground mt-2">Technologies Mastered</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="text-center">
                  <StatsCounter end={99} suffix="%" />
                  <p className="text-muted-foreground mt-2">Client Satisfaction</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 font-sans">My Story</h2>
                <p className="text-xl text-muted-foreground font-serif">From curious beginner to industry leader</p>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    My journey into web development started with a simple question: "How do websites work?" That
                    curiosity led me down a rabbit hole of HTML, CSS, and JavaScript that I'm still exploring today, six
                    years later.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    What sets me apart isn't just technical skill—it's the obsession with craft. I believe that code
                    should be beautiful, not just functional. Every animation should have purpose, every interaction
                    should delight, and every line of code should tell a story.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Today, I'm not just building websites—I'm crafting digital experiences that push the boundaries of
                    what's possible on the web. From interactive 3D environments to micro-animations that bring
                    interfaces to life, I'm constantly exploring new ways to merge art and technology.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 font-sans">Experience Journey</h2>
                <p className="text-xl text-muted-foreground font-serif">The path that led me to become the G.O.A.T.</p>
              </div>
            </ScrollReveal>

            <div className="relative">
              {experience.map((item, index) => (
                <TimelineItem key={item.year} {...item} delay={index * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 font-sans">What Drives Me</h2>
                <p className="text-xl text-muted-foreground font-serif">
                  The principles that guide every project I touch
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <div className="p-6 bg-card/50 rounded-lg hover:bg-card/70 transition-colors duration-300">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">Ready to Work Together?</h2>
              <p className="text-xl text-muted-foreground font-serif mb-8 max-w-2xl mx-auto">
                I'm always excited to collaborate on projects that challenge the status quo and create meaningful
                digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="animate-glow">
                  Start a Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent hover:bg-primary hover:text-primary-foreground"
                >
                  Download Resume
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
