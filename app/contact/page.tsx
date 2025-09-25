import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ContactForm } from "@/components/contact-form"
import { SocialLink } from "@/components/social-link"

const contactMethods = [
  {
    title: "Email",
    description: "Drop me a line anytime",
    value: "hello@goatdev.com",
    icon: "📧",
  },
  {
    title: "Phone",
    description: "Let's have a quick chat",
    value: "+1 (555) 123-4567",
    icon: "📱",
  },
  {
    title: "Location",
    description: "Based in San Francisco",
    value: "Available worldwide",
    icon: "🌍",
  },
]

const socialLinks = [
  {
    href: "https://github.com/goatdev",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    hoverColor: "#333",
  },
  {
    href: "https://linkedin.com/in/goatdev",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    hoverColor: "#0077B5",
  },
  {
    href: "https://twitter.com/goatdev",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    label: "Twitter",
    hoverColor: "#1DA1F2",
  },
  {
    href: "https://dribbble.com/goatdev",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
      </svg>
    ),
    label: "Dribbble",
    hoverColor: "#EA4C89",
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
