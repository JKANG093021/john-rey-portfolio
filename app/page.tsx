import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  BadgeCheck,
  Bot,
  Check,
  ClipboardCheck,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Headphones,
  Mail,
  MapPin,
  MessageSquareText,
  MonitorCog,
  Printer,
  SearchCheck,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Nav } from "@/components/Nav";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Reveal } from "@/components/Reveal";
import { SupportCaseTimeline } from "@/components/SupportCaseTimeline";
import { certificates, customerSupportStory, profile, projects } from "@/data/portfolio";

const supportAreas = [
  {
    number: "01",
    icon: MonitorCog,
    label: "Websites and systems",
    title: "Website and Business System Support",
    text: "Dependable help with website updates, admin dashboards, workflow checks, issue reproduction, and the day-to-day systems a team relies on.",
    examples: ["Website maintenance", "Admin-system support", "QA and issue checks"],
    image: "/services/web-system-support.png",
    imageAlt: "Remote website and business-system support workspace",
  },
  {
    number: "02",
    icon: Headphones,
    label: "People and operations",
    title: "Technical VA, Admin and Customer Support",
    text: "Clear customer communication, accurate records, product and order updates, organized documentation, inquiry follow-up, and reliable support for recurring digital tasks.",
    examples: ["Email and chat support", "Product and order updates", "Records and documentation"],
    image: "/services/admin-customer-support.png",
    imageAlt: "Organized customer support and administrative workspace",
  },
  {
    number: "03",
    icon: Printer,
    label: "Installation and maintenance",
    title: "Hardware, Printer and Maintenance Support",
    text: "Practical setup and troubleshooting for computers, printers, drivers, peripherals, software, connectivity, and routine preventive maintenance.",
    examples: ["Printer and driver setup", "Hardware and peripherals", "Maintenance and troubleshooting"],
    image: "/services/hardware-printer-support.png",
    imageAlt: "Technician supporting a desktop computer and office printer",
  },
];

const foundations = [
  {
    icon: Printer,
    title: "Hardware, installation and maintenance",
    text: "My first professional role was as a hardware technician. I am comfortable with careful diagnosis, basic component and peripheral installation, printer setup, drivers, and practical maintenance.",
  },
  {
    icon: UserRoundCheck,
    title: "Hands-on IT support during OJT",
    text: "I helped users with everyday technical concerns, including internet connectivity, while working in an academic environment.",
  },
  {
    icon: Code2,
    title: "Client website and system work",
    text: "My web background lets me investigate more deeply when an admin, customer, or support issue reaches the website, database, or integration layer.",
  },
];

const skillGroups = [
  {
    title: "Support and Administration",
    icon: ClipboardCheck,
    items: [
      "Customer assistance",
      "Email and chat communication",
      "E-commerce product and order support",
      "Inquiry follow-up",
      "Record updates",
      "Documentation",
      "SOP-based tasks",
    ],
  },
  {
    title: "Systems, Maintenance and Quality",
    icon: SearchCheck,
    items: [
      "Business system familiarization",
      "Website and system maintenance",
      "Software installation",
      "Printer setup and drivers",
      "Basic hardware and peripherals",
      "Device and internet troubleshooting",
      "Workflow testing",
      "QA verification",
    ],
  },
  {
    title: "Technical Toolkit",
    icon: Database,
    items: [
      "HTML and CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
];

const aiTools = [
  {
    name: "ChatGPT",
    icon: Bot,
    text: "Used personally for research support, drafting, troubleshooting, coding assistance, and task planning.",
  },
  {
    name: "Claude",
    icon: Sparkles,
    text: "Used personally for document analysis, code review, debugging support, and exploring implementation options.",
  },
];

export default function Home() {
  return (
    <main>
      <Nav />

      <section id="home" className="hero section-grid-line">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-signal hero-signal-one" aria-hidden="true" />
        <div className="hero-signal hero-signal-two" aria-hidden="true" />
        <div className="mobile-hero-backdrop" aria-hidden="true">
          <Image
            className="mobile-hero-backdrop-image"
            src="/john-rey-workspace.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="mobile-hero-backdrop-tint" />
          <div className="mobile-hero-backdrop-shape" />
        </div>

        <div className="container-shell hero-layout">
          <Reveal className="hero-copy">
            <div className="hero-identity">
              <span>Technical VA &amp; Web Support</span>
              <span className="hero-identity-divider" />
              <span><MapPin size={14} /> {profile.location} · Remote</span>
            </div>

            <p className="eyebrow">Web systems · Admin operations · Customer support</p>
            <h1>
              Hi, I&apos;m <span>{profile.name}.</span>
            </h1>
            <h2 className="hero-positioning">Technical VA &amp; Web Support for the systems behind your business.</h2>
            <p className="hero-text">
              I help teams maintain websites and business systems, support customers and admin workflows,
              and troubleshoot computers, printers, software, and everyday technical issues. I&apos;m also
              open to e-commerce support roles.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#support">
                See How I Can Help <ArrowDownRight size={18} />
              </a>
              <a className="secondary-button" href={profile.resumeHref} download>
                <Download size={18} /> Download ATS Resume
              </a>
            </div>

            <div className="hero-availability" aria-label="Current work availability">
              <span className="status-dot" />
              <strong>Open to remote roles</strong>
              <span>Full-time · Part-time · Project-based</span>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={100}>
            <div className="portrait-panel">
              <div className="portrait-image-wrap">
                <Image
                  className="portrait-image"
                  src="/john-rey-workspace.png"
                  alt="John Rey Baliguat at his workspace"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
                <div className="portrait-overlay" aria-hidden="true" />
                <div className="portrait-badge">
                  <GraduationCap size={18} />
                  <span><strong>BS Information Technology</strong><small>Technical foundation</small></span>
                </div>
              </div>

              <div className="support-ledger" aria-label="Support areas">
                <p>Core services</p>
                <div><span>01</span><strong>Websites and business systems</strong></div>
                <div><span>02</span><strong>Admin and customer support</strong></div>
                <div><span>03</span><strong>Hardware and maintenance</strong></div>
              </div>
            </div>
            <p className="portrait-caption">
              Technical enough to investigate the issue. Clear enough to guide the person using the system.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="proof-strip-section section-grid-line" aria-label="Professional foundation">
        <div className="container-shell proof-strip">
          <div className="proof-item"><GraduationCap size={20} /><span><small>Education</small><strong>BS Information Technology</strong></span></div>
          <div className="proof-item"><BadgeCheck size={20} /><span><small>Experience</small><strong>Approx. 2 years hands-on</strong></span></div>
          <div className="proof-item"><ShoppingBag size={20} /><span><small>Also open to</small><strong>E-commerce support and operations</strong></span></div>
          <div className="proof-item"><ShieldCheck size={20} /><span><small>Additional credential</small><strong>Licensed Real Estate Salesperson · Light experience</strong></span></div>
        </div>
      </section>

      <section id="about" className="section section-grid-line about-section">
        <div className="container-shell about-layout">
          <Reveal>
            <p className="eyebrow">Technical VA &amp; Web Support</p>
            <h2 className="section-title">Practical support for people, processes, and technology.</h2>
            <p className="section-lead">
              Web development is one part of what I bring. I also support the customers, records,
              routines, devices, and business systems around it—with patience, accuracy, and dependable follow-through.
            </p>
            <div className="about-quote">
              <MessageSquareText size={22} />
              <p>My goal is simple: understand the process, help the user, solve what I can, and escalate clearly when needed.</p>
            </div>
          </Reveal>

          <div className="foundation-list">
            {foundations.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 60}>
                <article className="foundation-item">
                  <div className="foundation-icon"><Icon size={21} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="section section-grid-line support-section">
        <div className="container-shell">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">What I offer</p>
              <h2 className="section-title">Three focused ways I can help.</h2>
            </div>
            <p>
              A useful blend for growing teams that need one dependable person across web systems,
              e-commerce operations, customer care, and everyday technical support.
            </p>
          </Reveal>

          <div className="support-grid">
            {supportAreas.map(({ number, icon: Icon, label, title, text, examples, image, imageAlt }, index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="support-card">
                  <div className="support-image-wrap">
                    <Image src={image} alt={imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" />
                    <div className="support-image-shade" aria-hidden="true" />
                    <div className="support-card-top"><span>{number}</span><Icon size={22} /></div>
                  </div>
                  <div className="support-card-copy">
                    <p className="support-label">{label}</p>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <ul>
                      {examples.map((example) => <li key={example}><Check size={14} /> {example}</li>)}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SupportCaseTimeline story={customerSupportStory} />

      <section id="projects" className="section section-grid-line projects-section">
        <div className="container-shell">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">Relevant work, presented clearly.</h2>
            </div>
            <p>
              Four focused examples of customer journeys, admin workflows, troubleshooting,
              record handling, and responsive web systems.
            </p>
          </Reveal>

          <div className="work-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70}>
                <article className="work-card">
                  <div className={`work-visual ${project.visualClass}`}>
                    <ProjectPreview project={project} />
                  </div>
                  <div className="work-content">
                    <p className="work-label">{project.label}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="work-links">
                      <Link href={`/projects/${project.slug}`}>Read case study <ArrowRight size={16} /></Link>
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          {project.liveLabel ?? "View live system"} <ExternalLink size={15} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section-grid-line skills-section">
        <div className="container-shell">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Relevant capabilities</p>
              <h2 className="section-title">The tools behind the support.</h2>
            </div>
            <p>
              Support habits plus enough technical depth to understand workflows,
              reproduce issues, maintain websites, and communicate clearly.
            </p>
          </Reveal>

          <div className="skill-groups">
            {skillGroups.map(({ title, icon: Icon, items }, index) => (
              <Reveal key={title} delay={index * 65}>
                <article className="skill-group">
                  <div className="skill-group-heading"><Icon size={20} /><h3>{title}</h3></div>
                  <div className="skill-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="ai-toolbox">
            <div className="ai-toolbox-intro">
              <span><Bot size={18} /> Personal AI toolkit</span>
              <h3>AI-assisted work, reviewed with human judgment.</h3>
              <p>I use these tools to work more efficiently, then review the details and final result myself.</p>
            </div>
            <div className="ai-tool-list">
              {aiTools.map(({ name, icon: Icon, text }) => (
                <article key={name} className="ai-tool-card">
                  <div className="ai-tool-icon"><Icon size={19} /></div>
                  <div><h4>{name}</h4><p>{text}</p></div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="certificates" className="section section-grid-line certificates-section">
        <div className="container-shell">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Certificates and continuous learning</p>
              <h2 className="section-title">Training that adds context to my technical foundation.</h2>
            </div>
            <p>
              Verified participation across front-end development, explainable AI, Azure,
              career readiness, plus a real-estate credential and salesperson seminar.
              Select any certificate to view the original image.
            </p>
          </Reveal>

          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <Reveal key={certificate.title} delay={index * 55}>
                <article className={`certificate-card certificate-${certificate.orientation}`}>
                  <a
                    className="certificate-image-frame"
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${certificate.title} certificate at full size`}
                  >
                    <Image
                      className="certificate-image"
                      src={certificate.image}
                      alt={`${certificate.title} certificate awarded to ${profile.fullName}`}
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                    <span className="certificate-view">View full certificate <ExternalLink size={14} /></span>
                  </a>
                  <div className="certificate-copy">
                    <span className="certificate-category"><Award size={14} /> {certificate.category}</span>
                    <h3>{certificate.title}</h3>
                    <div className="certificate-meta">
                      <span>{certificate.issuer}</span>
                      <span>{certificate.date}</span>
                    </div>
                    <p>{certificate.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="section section-grid-line resume-promo-section">
        <div className="container-shell resume-promo">
          <Reveal className="resume-promo-copy">
            <p className="eyebrow">Recruiter-ready resume</p>
            <h2 className="section-title">A clean ATS resume built for support, admin, and technical roles.</h2>
            <p>
              The downloadable resume uses a single-column structure, standard section names,
              selectable text, and direct role keywords. It avoids graphics, rating bars, and
              multi-column layouts that can confuse applicant tracking systems.
            </p>
            <div className="resume-actions">
              <a className="primary-button" href={profile.resumeHref} download><Download size={18} /> Download PDF</a>
              <a className="secondary-button" href={profile.resumeDocxHref} download><FileText size={18} /> Download DOCX</a>
              <Link className="text-link" href={profile.resumePageHref}>View online resume <ArrowRight size={16} /></Link>
            </div>
          </Reveal>

          <Reveal className="ats-sheet" delay={90}>
            <div className="ats-sheet-header"><FileText size={24} /><span>ATS Resume</span></div>
            <h3>{profile.fullName}</h3>
            <p>Technical Support · E-commerce Support · Admin Operations · Web Systems</p>
            <ul>
              <li><Check size={16} /> Single-column reading order</li>
              <li><Check size={16} /> Standard ATS section headings</li>
              <li><Check size={16} /> Relevant, defensible keywords</li>
              <li><Check size={16} /> PDF and editable DOCX formats</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container-shell contact-layout">
          <Reveal className="contact-copy-block">
            <p className="eyebrow">Let&apos;s connect</p>
            <h2 className="section-title">Need someone who can support both people and systems?</h2>
            <p className="section-lead">
              I&apos;m open to remote technical support, e-commerce support, customer support,
              administrative operations, website support, junior IT, and suitable project-based work.
              I also have light real-estate experience as a licensed salesperson.
            </p>
            <div className="contact-methods" aria-label="Direct contact options">
              <a className="contact-method" href={`mailto:${profile.email}`}>
                <span className="contact-method-icon"><Mail size={18} /></span>
                <span className="contact-method-copy">
                  <small>Email me</small>
                  <strong>{profile.email}</strong>
                </span>
              </a>
              <a
                className="contact-method"
                href={profile.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-method-icon facebook-mark" aria-hidden="true">f</span>
                <span className="contact-method-copy">
                  <small>Facebook</small>
                  <strong>facebook.com/JanuareyB</strong>
                </span>
                <ExternalLink className="contact-method-external" size={15} />
              </a>
            </div>
            <div className="contact-principle">
              <ShieldCheck size={19} />
              <span>Clear communication, honest skill positioning, and no exaggerated claims.</span>
            </div>
          </Reveal>
          <Reveal delay={90}><ContactForm /></Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container-shell footer-inner">
          <div><strong>{profile.fullName}</strong><span>Technical VA · Web Support</span></div>
          <p>{profile.location} · Remote · Open to opportunities</p>
        </div>
      </footer>
    </main>
  );
}
