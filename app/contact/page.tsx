import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ContactForm } from "@/components/contact-form"
import { SocialLink } from "@/components/social-link"

const contactMethods = [
  {
    title: "Email",
    description: "Drop me a line anytime",
    value: "ayushsharma1153gmail.com",
    icon: "📧",
  },
  {
    title: "Phone",
    description: "Let's have a quick chat",
    value: "+91 8171971349",
    icon: "📱",
  },
  {
    title: "Location",
    description: "Based in India",
    value: "Available worldwide",
    icon: "🌍",
  },
]

const socialLinks = [
  {
    href: "https://github.com/Ayush2004sharma",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    hoverColor: "#333",
  },
  {
    href: "https://www.linkedin.com/in/ayush-sharma-492980260/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    hoverColor: "#0077B5",
  },
 
]

export default function ContactPage() {
  return (
    <PageTransition>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
                Let's <span className="text-primary">Talk</span>
              </h1>
              <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
                Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you. Let's
                create something amazing together.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 font-sans">Get In Touch</h2>
                <p className="text-xl text-muted-foreground font-serif">Choose your preferred way to connect</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <ScrollReveal key={method.title} delay={index * 100}>
                  <div className="text-center p-6 bg-card/50 rounded-lg hover:bg-card/70 transition-colors duration-300">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{method.title}</h3>
                    <p className="text-muted-foreground mb-3">{method.description}</p>
                    <p className="text-primary font-medium">{method.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Social Links */}
            <ScrollReveal>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-8 font-sans">Follow My Journey</h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <div
                      key={social.label}
                      className="animate-slide-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <SocialLink {...social} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 font-sans">Send a Message</h2>
                <p className="text-xl text-muted-foreground font-serif">
                  Tell me about your project and let's start the conversation
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-card/50 rounded-2xl p-8 border border-border">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 font-sans">Quick Answers</h2>
                <p className="text-xl text-muted-foreground font-serif">Common questions about working together</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">What's your typical project timeline?</h3>
                  <p className="text-muted-foreground">
                    Most projects take 4-12 weeks depending on complexity. I'll provide a detailed timeline after our
                    initial consultation.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Do you work with international clients?</h3>
                  <p className="text-muted-foreground">
                    I work with clients worldwide and am comfortable with different time zones and communication
                    preferences.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">What's included in your service?</h3>
                  <p className="text-muted-foreground">
                    Full-stack development, UI/UX design, performance optimization, and post-launch support. Every
                    project is tailored to your needs.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">How do you handle project communication?</h3>
                  <p className="text-muted-foreground">
                    Regular updates via your preferred channel (Slack, email, video calls) plus a shared project
                    dashboard for real-time progress tracking.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
