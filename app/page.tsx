import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MessageCircleMore,
  MonitorCog,
  Puzzle,
  Rocket,
  Sparkles,
  Workflow,
  Users,
  SearchCheck,
  TestTube2,
  Send,
  Clock3,
  CalendarDays,
  Hammer,
  Check,
  ExternalLink,
  FileText,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ProjectPreview } from "@/components/ProjectPreview";
import { TypewriterOnScroll } from "@/components/TypewriterOnScroll";
import { ContactForm } from "@/components/ContactForm";
import { TechMarquee } from "@/components/TechMarquee";
import { profile, projects } from "@/data/portfolio";

const services = [
  {
    icon: Users,
    title: "Technical Virtual Assistance",
    text: "Ongoing remote support for websites, admin systems, technical tasks, documentation, testing, and day-to-day digital operations.",
  },
  {
    icon: MonitorCog,
    title: "Website Support & Troubleshooting",
    text: "Website updates, bug investigation, maintenance, deployment help, forms, and practical fixes without unnecessary rebuilds.",
  },
  {
    icon: Database,
    title: "Business Systems & Data Support",
    text: "Database-backed admin tools, customer workflows, records, reporting, and operational system support.",
  },
  {
    icon: Workflow,
    title: "Automation & API Integrations",
    text: "API connections, form and email flows, and practical automation that reduces repetitive work and manual handoffs.",
  },
];

const skills = [
  "Technical Virtual Assistance",
  "Website Management",
  "Bug Troubleshooting",
  "QA Testing",
  "Deployment Support",
  "Technical Documentation",
  "Database Support",
  "REST APIs",
  "PHP",
  "JavaScript",
  "MySQL",
  "PostgreSQL",
  "Next.js",
  "Git / Version Control",
];

const growth = ["TypeScript", "n8n / Make / Zapier", "Advanced Next.js"];


const process = [
  {
    icon: SearchCheck,
    step: "01",
    title: "Understand & prioritize",
    text: "I clarify the request, current setup, urgency, and what a successful result should look like before changing anything.",
  },
  {
    icon: MonitorCog,
    step: "02",
    title: "Investigate & work",
    text: "I trace the issue or task, work within the existing setup, and use code only when the job actually needs it.",
  },
  {
    icon: TestTube2,
    step: "03",
    title: "Test & verify",
    text: "I check the real workflow, mobile behavior, edge cases, and the parts that matter to day-to-day business use.",
  },
  {
    icon: Send,
    step: "04",
    title: "Update & document",
    text: "I explain what changed, record important details, and keep the next steps clear for ongoing support.",
  },
];


const workOptions = [
  {
    icon: CalendarDays,
    title: "Part-Time Technical VA",
    text: "Ongoing weekly support for businesses that need a dependable technical person to maintain websites, systems, and recurring digital tasks.",
    fit: ["Recurring weekly support", "Website & system upkeep", "Documentation & coordination"],
  },
  {
    icon: Clock3,
    title: "Hourly Technical Support",
    text: "Flexible help for website fixes, updates, QA, troubleshooting, deployment tasks, forms, and smaller technical requests as they come up.",
    fit: ["Flexible task support", "Bug fixing & QA", "Website maintenance"],
  },
  {
    icon: Hammer,
    title: "Project-Based Technical Work",
    text: "A defined technical improvement with a clear scope, such as a website feature, internal tool, workflow, integration, or automation.",
    fit: ["Defined deliverables", "Business systems", "Automation & integrations"],
  },
];

const faqs = [
  {
    q: "Can you work as an ongoing Technical VA?",
    a: "Yes. My main positioning is recurring technical support for businesses that need help maintaining websites, systems, troubleshooting issues, testing workflows, documenting changes, and handling technical tasks without needing a full-time developer.",
  },
  {
    q: "Can you work with an existing website instead of rebuilding it?",
    a: "Yes. I can troubleshoot, maintain, improve, test, or extend an existing website when a full rebuild is not necessary.",
  },
  {
    q: "What kinds of technical VA tasks can you handle?",
    a: "Website updates, bug investigation, forms, database-backed admin tasks, QA testing, deployment support, technical documentation, system upkeep, and practical integrations are good fits for my current skill set.",
  },
  {
    q: "Do you also code when a task needs it?",
    a: "Yes. My web development background lets me go beyond routine admin work when a website or system needs PHP, JavaScript, database changes, API work, or a practical custom fix.",
  },
  {
    q: "Do you also handle automation?",
    a: "I can work on practical API and workflow integrations, while continuing to expand deeper no-code automation skills with tools such as n8n, Make, and Zapier.",
  },
];

const strengths = [
  {
    icon: BadgeCheck,
    title: "Dependable Support",
    text: "I can stay close to the day-to-day technical work instead of treating every task like a separate development project.",
  },
  {
    icon: MessageCircleMore,
    title: "Clear Communication",
    text: "Clear updates, practical explanations, and straightforward next steps throughout the work.",
  },
  {
    icon: Puzzle,
    title: "Technical Problem Solver",
    text: "I trace issues, test practical fixes, and work with the existing system before recommending bigger changes.",
  },
  {
    icon: Code2,
    title: "Development Background",
    text: "When a support task needs code, databases, APIs, or a custom fix, I can work deeper than a typical general VA.",
  },
];

export default function Home() {
  return (
    <main>
      <Nav />

      <section id="home" className="hero section-grid-line">
        <div className="hero-glow" />

        <div className="mobile-hero-backdrop" aria-hidden="true">
          <Image
            className="mobile-hero-backdrop-image"
            src="/john-rey-workspace.png"
            alt=""
            width={1369}
            height={1149}
            priority
          />
          <div className="mobile-hero-backdrop-tint" />
          <div className="mobile-hero-backdrop-shape" />
        </div>

        <div className="container-shell hero-grid">
          <Reveal className="hero-copy">
            <div className="mobile-hero-kicker">Ideas to working solutions</div>
            <div className="eyebrow">{profile.role}</div>
            <h1>
              Hi, I&apos;m <span>{profile.name}.</span>
            </h1>


            <h2>I help businesses keep websites, systems, and technical workflows running smoothly.</h2>
            <p className="hero-text">
              I provide hands-on remote support for website updates, troubleshooting, QA,
              database-backed tasks, deployments, API integrations, and practical automation.
            </p>

            <div className="mobile-hero-capabilities" aria-label="Core services">
              <div>
                <Users size={28} />
                <span>Technical<br />VA</span>
              </div>
              <div>
                <MonitorCog size={28} />
                <span>Web<br />Support</span>
              </div>
              <div>
                <TestTube2 size={28} />
                <span>QA &<br />Testing</span>
              </div>
              <div>
                <Workflow size={28} />
                <span>Automation</span>
              </div>
            </div>

            <div className="mobile-hero-motto" aria-label="Support, maintain, test, automate">
              <span className="mobile-hero-motto-line" />
              <span>Support</span><b>•</b><span>Maintain</span><b>•</b><span>Test</span><b>•</b><span>Automate</span>
            </div>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View My Work <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="availability">
              <span className="status-dot" />
              <span>Available for Remote</span>
              <span className="bullet">•</span>
              <span>Hourly</span>
              <span className="bullet">•</span>
              <span>Part-time</span>
              <span className="bullet">•</span>
              <span>Project-based Work</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="desktop-hero-visual">
            <div className="hero-art hero-portrait-art" aria-label="Portrait of John Rey Baliguat">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="portrait-halo" />

              <div className="portrait-ring">
                <div className="portrait-frame">
                  <div className="portrait-grid" aria-hidden="true" />
                  <Image
                    className="hero-portrait-image"
                    src="/john-rey-workspace.png"
                    alt="John Rey Baliguat working at a modern web development workspace"
                    width={1369}
                    height={1149}
                    priority
                  />
                  <div className="portrait-blend" aria-hidden="true" />
                </div>
              </div>

              <div className="floating-skill skill-one">
                <MonitorCog size={18} /> Support
              </div>
              <div className="floating-skill skill-two">
                <TestTube2 size={18} /> Test
              </div>
              <div className="floating-skill skill-three">
                <Workflow size={18} /> Automate
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="proof-strip-section section-grid-line" aria-label="Portfolio proof points">
        <div className="container-shell proof-strip">
          <div className="proof-item"><Users size={19} /><span><strong>Technical VA Support</strong><small>Websites, systems, and recurring tasks</small></span></div>
          <div className="proof-item"><TestTube2 size={19} /><span><strong>QA & Troubleshooting</strong><small>Hands-on issue tracing and testing</small></span></div>
          <div className="proof-item"><Workflow size={19} /><span><strong>API Integration</strong><small>External system experience</small></span></div>
          <div className="proof-item"><BadgeCheck size={19} /><span><strong>Remote Available</strong><small>Hourly, part-time, or project-based</small></span></div>
        </div>
      </section>

      <TechMarquee />

      <section id="about" className="section section-grid-line">
        <div className="container-shell about-grid">
          <Reveal>
            <div className="eyebrow">About</div>
            <h2 className="section-title">A technical VA who understands the systems behind the task.</h2>
          </Reveal>
          <Reveal className="about-copy" delay={100}>
            <p>
              I&apos;m {profile.fullName}. My web development background lets me handle more than routine admin work: I can maintain websites, troubleshoot issues, test workflows, support database-backed systems, and make practical technical improvements when needed.
            </p>
            <div className="about-highlights">
              <span><BadgeCheck size={17} /> Website & system upkeep</span>
              <span><BadgeCheck size={17} /> Troubleshooting & QA</span>
              <span><BadgeCheck size={17} /> Clear technical communication</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section section-grid-line">
        <div className="container-shell">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">Services</div>
              <h2 className="section-title">Technical support that goes beyond admin tasks</h2>
            </div>
          </div>

          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="service-card">
                  <div className="icon-box"><Icon size={23} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section section-grid-line">
        <div className="container-shell">
          <div className="eyebrow">Projects</div>
          <h2 className="section-title"><TypewriterOnScroll text="Featured Work" /></h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <article className="project-card">
                  <div className={`project-visual ${project.visualClass}`}>
                    <div className="visual-window">
                      <div className="visual-topbar"><span /><span /><span /></div>
                      <div className="visual-body preview-body">
                        <ProjectPreview project={project} />
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <p className="project-label">{project.label}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="chips">
                      {project.technologies.slice(0, 3).map((chip) => <span key={chip}>{chip}</span>)}
                    </div>
                    <div className="project-links">
                      <a className="project-link" href={`/projects/${project.slug}`}>
                        View case study <ArrowRight size={16} />
                      </a>
                      {project.liveUrl && (
                        <a
                          className="project-link live-project-link"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.liveLabel || "Live website"} <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section section-grid-line">
        <div className="container-shell">
          <Reveal>
            <div className="eyebrow">How I Work</div>
            <h2 className="section-title">Clear process. Practical delivery.</h2>
            <p className="section-intro">
              For recurring VA work or one-off technical issues, I keep tasks organized, testable, and focused on what the business actually needs.
            </p>
          </Reveal>
          <div className="process-grid">
            {process.map(({ icon: Icon, step, title, text }, index) => (
              <Reveal key={step} delay={index * 65}>
                <article className="process-card">
                  <div className="process-top"><span>{step}</span><Icon size={21} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work-options" className="section section-grid-line">
        <div className="container-shell">
          <Reveal>
            <div className="eyebrow">Ways to Work Together</div>
            <h2 className="section-title">Technical support that fits the way your business works.</h2>
            <p className="section-intro">
              Choose recurring Technical VA support, flexible hourly help, or a defined technical project depending on your workload.
            </p>
          </Reveal>

          <div className="engagement-grid">
            {workOptions.map(({ icon: Icon, title, text, fit }, index) => (
              <Reveal key={title} delay={index * 70}>
                <article className="engagement-card">
                  <div className="icon-box"><Icon size={23} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="engagement-fit">
                    {fit.map((item) => <span key={item}><Check size={15} /> {item}</span>)}
                  </div>
                  <a href="#contact" className="engagement-link">Contact Me <ArrowRight size={15} /></a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section-grid-line">
        <div className="container-shell skills-layout">
          <div>
            <div className="eyebrow">Core Skills</div>
            <h2 className="section-title">Technical support skills & tools</h2>
            <div className="skill-cloud">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>

          <aside className="growth-card">
            <p>Currently learning & expanding</p>
            {growth.map((item) => (
              <div key={item} className="growth-item">
                <Sparkles size={16} /> {item}
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section id="why-me" className="section section-grid-line">
        <div className="container-shell">
          <div className="eyebrow">Why Work With Me</div>
          <h2 className="section-title">Technical support with a developer&apos;s problem-solving mindset</h2>
          <div className="strengths-grid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div className="strength-item" key={title}>
                <div className="strength-icon"><Icon size={21} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section section-grid-line">
        <div className="container-shell faq-layout">
          <Reveal>
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title">Before we work together</h2>
            <p className="section-intro">Quick answers for clients considering remote technical support.</p>
          </Reveal>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 45}>
                <details className="faq-item">
                  <summary>{item.q}<span>+</span></summary>
                  <p>{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section section-grid-line">
        <div className="container-shell contact-grid contact-grid-form">
          <Reveal>
            <div>
              <div className="eyebrow">Let&apos;s Connect</div>
              <h2 className="section-title">Need dependable technical support?</h2>
              <p className="contact-copy">
                Tell me what website, system, or recurring technical tasks you need help with and whether you prefer part-time, hourly, or project-based support.
              </p>
              <div className="contact-actions">
                <a className="secondary-button" href={`mailto:${profile.email}`}>
                  <Mail size={18} /> {profile.email}
                </a>
                {profile.linkedin ? (
                  <a className="secondary-button" href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                ) : null}
                {profile.github ? (
                  <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
                    <Github size={18} /> GitHub
                  </a>
                ) : null}
                {profile.resumeHref ? (
                  <a className="secondary-button" href={profile.resumeHref} download>
                    <FileText size={18} /> Download Resume
                  </a>
                ) : null}
                {profile.resumePageHref ? (
                  <a className="secondary-button" href={profile.resumePageHref}>View Resume</a>
                ) : null}
              </div>
              <div className="contact-promise">
                <BadgeCheck size={18} />
                <span>Portfolio inquiries receive an automatic email confirmation after submission.</span>
              </div>
              <blockquote className="quote-card contact-quote">
                “Clear systems. Practical support. Reliable follow-through.”
                <span>— John Rey</span>
              </blockquote>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container-shell footer-inner">
          <div><strong>{profile.fullName}</strong> <span>{profile.role}</span></div>
          <div>{profile.location} • Remote • Hourly • Part-time • Project-based</div>
        </div>
      </footer>
    </main>
  );
}
