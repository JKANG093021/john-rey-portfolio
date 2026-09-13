import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Building2,
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
  Network,
  Printer,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Wrench,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Nav } from "@/components/Nav";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Reveal } from "@/components/Reveal";
import { TechMarquee } from "@/components/TechMarquee";
import { certificates, profile, projects } from "@/data/portfolio";

const supportAreas = [
  {
    number: "01",
    icon: Headphones,
    label: "Customer-facing",
    title: "Customer Support and User Assistance",
    text: "Clear email or chat assistance, process guidance, inquiry follow-up, and useful escalation notes when an issue needs another team member.",
    examples: ["Email and chat support", "User guidance", "Inquiry follow-up"],
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    label: "Behind the scenes",
    title: "Administrative and Operations Support",
    text: "Accurate record updates, organized documentation, recurring digital tasks, and dependable support for the workflows that keep a team moving.",
    examples: ["Admin dashboards", "Records and documentation", "Recurring tasks"],
  },
  {
    number: "03",
    icon: Network,
    label: "Platform-focused",
    title: "Business System Familiarization",
    text: "I learn user roles, status flows, standard procedures, business rules, and common requests so I can work accurately inside an unfamiliar platform.",
    examples: ["SOP familiarization", "Workflow support", "Issue escalation"],
  },
  {
    number: "04",
    icon: MonitorCog,
    label: "Technical",
    title: "IT Installation, Maintenance and Web Support",
    text: "Website and system maintenance, software setup, basic hardware installation, printer and peripheral support, troubleshooting, quality checks, and practical fixes.",
    examples: ["Printer and device setup", "System maintenance", "Web troubleshooting"],
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
  {
    icon: Building2,
    title: "Early real-estate industry exposure",
    text: "Property-platform work and a 12-credit-unit brokerage seminar introduced me to listing, buyer-inquiry, ethics, taxation, and documentation-oriented workflows.",
  },
];

const roleMatches = [
  "Technical or Application Support",
  "Customer Support by Email or Chat",
  "Administrative or Operations Assistant",
  "Website and System Support",
  "Junior IT Support",
  "Hardware Installation and Maintenance Support",
];

const systemSteps = [
  {
    number: "01",
    title: "Understand the workflow",
    text: "Learn what the platform is for, who uses it, and what a correct outcome looks like.",
  },
  {
    number: "02",
    title: "Follow the operating process",
    text: "Study the SOP, user roles, status meanings, common requests, and escalation path.",
  },
  {
    number: "03",
    title: "Handle and verify",
    text: "Complete routine tasks carefully, communicate clearly, and confirm that the result is correct.",
  },
  {
    number: "04",
    title: "Document what matters",
    text: "Record useful context, recurring issues, and improvements so the next task becomes easier.",
  },
];

const skillGroups = [
  {
    title: "Support and Administration",
    icon: ClipboardCheck,
    items: [
      "Customer assistance",
      "Email and chat communication",
      "Inquiry follow-up",
      "Admin dashboard support",
      "Record updates",
      "Documentation",
      "SOP-based tasks",
      "Clear escalation notes",
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
      "Customer and admin journeys",
      "Issue reproduction",
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
      "Git",
    ],
  },
];

const aiTools = [
  {
    name: "ChatGPT",
    icon: Bot,
    text: "A personal productivity tool for research support, drafting, troubleshooting, coding assistance, and task planning.",
  },
  {
    name: "Claude",
    icon: Sparkles,
    text: "A personal productivity tool for document analysis, code review, debugging support, and exploring implementation options.",
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

        <div className="container-shell hero-layout">
          <Reveal className="hero-copy">
            <div className="hero-identity">
              <span>{profile.fullName}</span>
              <span className="hero-identity-divider" />
              <span><MapPin size={14} /> {profile.location} · Remote</span>
            </div>

            <p className="eyebrow">Technical support · Admin operations · Customer support</p>
            <h1>
              Reliable support for the work your customers see
              <span> and the systems behind it.</span>
            </h1>
            <p className="hero-text">
              I&apos;m a BS Information Technology graduate who can assist with customer communication,
              administrative workflows, business platforms, websites, hardware and peripheral installation,
              and ongoing maintenance. I learn systems carefully, communicate clearly, and stay with the task until it is verified.
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
                <p>Support spectrum</p>
                <div><span>01</span><strong>Customer assistance</strong></div>
                <div><span>02</span><strong>Admin operations</strong></div>
                <div><span>03</span><strong>Business systems</strong></div>
                <div><span>04</span><strong>Web, devices and maintenance</strong></div>
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
          <div className="proof-item"><Wrench size={20} /><span><small>Foundation</small><strong>Hardware, printer and web troubleshooting</strong></span></div>
          <div className="proof-item"><ShieldCheck size={20} /><span><small>Work style</small><strong>Careful, practical, verified</strong></span></div>
        </div>
      </section>

      <section id="about" className="section section-grid-line about-section">
        <div className="container-shell about-layout">
          <Reveal>
            <p className="eyebrow">Beyond web development</p>
            <h2 className="section-title">A broader support professional with technical depth.</h2>
            <p className="section-lead">
              Web development is one part of what I bring. I can also support the people, records,
              routines, and business systems around the website—the work that needs patience,
              accuracy, and dependable follow-through every day.
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
              <p className="eyebrow">Where I can contribute</p>
              <h2 className="section-title">One reliable person across four support lanes.</h2>
            </div>
            <p>
              A practical blend for teams that need someone comfortable with customers,
              administration, software workflows, and technical problem-solving.
            </p>
          </Reveal>

          <div className="support-grid">
            {supportAreas.map(({ number, icon: Icon, label, title, text, examples }, index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="support-card">
                  <div className="support-card-top"><span>{number}</span><Icon size={23} /></div>
                  <p className="support-label">{label}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul>
                    {examples.map((example) => <li key={example}><Check size={14} /> {example}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="role-match">
            <div>
              <span className="role-match-kicker">Open to the right role</span>
              <h3>Roles I can support now and continue growing into</h3>
            </div>
            <div className="role-match-list">
              {roleMatches.map((role) => <span key={role}>{role}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="section section-grid-line projects-section">
        <div className="container-shell">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">Systems that prove how I think and support.</h2>
            </div>
            <p>
              These projects show more than code: they involve customer journeys, admin records,
              user guidance, business rules, troubleshooting, and real-world workflow decisions.
            </p>
          </Reveal>

          <div className="work-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70} className={index === 0 ? "work-featured-wrap" : ""}>
                <article className={`work-card ${index === 0 ? "work-card-featured" : ""}`}>
                  <div className={`work-visual ${project.visualClass}`}>
                    <div className="work-browser-bar"><span /><span /><span /><small>Selected project</small></div>
                    <ProjectPreview project={project} />
                  </div>
                  <div className="work-content">
                    <p className="work-label">{project.label}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="transferable-list" aria-label="Transferable skills demonstrated">
                      {project.transferableSkills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
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

      <section id="systems" className="section section-grid-line systems-section">
        <div className="container-shell systems-layout">
          <Reveal className="systems-intro">
            <p className="eyebrow">Business system familiarization</p>
            <h2 className="section-title">I learn the workflow before I act inside it.</h2>
            <p className="section-lead">
              Every company has different tools and rules. I start with the platform&apos;s purpose,
              user roles, SOPs, common requests, status meanings, and escalation path so I can
              support the business accurately instead of guessing.
            </p>
            <div className="systems-note"><BadgeCheck size={18} /> Comfortable learning unfamiliar dashboards and database-backed systems.</div>
          </Reveal>

          <div className="system-steps">
            {systemSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 55}>
                <article className="system-step">
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
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
              <p className="eyebrow">Capabilities and tools</p>
              <h2 className="section-title">Useful on day one. Ready to keep learning.</h2>
            </div>
            <p>
              I combine support habits with enough technical depth to understand the system,
              reproduce issues, and communicate clearly with both users and developers.
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
              <p>I use these tools personally to work more efficiently, then check the details, output, and final result myself.</p>
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

          <Reveal className="growth-note">
            <span>Currently expanding</span>
            <p>TypeScript · n8n · Make · Zapier · advanced Next.js workflows</p>
          </Reveal>
        </div>
      </section>

      <TechMarquee />

      <section id="certificates" className="section section-grid-line certificates-section">
        <div className="container-shell">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Certificates and continuous learning</p>
              <h2 className="section-title">Training that adds context to my technical foundation.</h2>
            </div>
            <p>
              Verified participation across front-end development, explainable AI, Azure,
              career readiness, and an introductory real-estate salesperson seminar.
              Select any certificate to view the original image.
            </p>
          </Reveal>

          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <Reveal
                key={certificate.title}
                delay={index * 55}
                className={index === 0 ? "certificate-featured-wrap" : ""}
              >
                <article className={`certificate-card certificate-${certificate.orientation} ${index === 0 ? "certificate-featured" : ""}`}>
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
                      sizes={index === 0 ? "(max-width: 700px) 100vw, 360px" : "(max-width: 700px) 100vw, 50vw"}
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
            <p>Technical Support · Customer Support · Admin Operations · Web Systems</p>
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
              I&apos;m open to remote technical support, customer support, administrative operations,
              website support, junior IT, and suitable project-based work.
            </p>
            <a className="direct-email" href={`mailto:${profile.email}`}><Mail size={19} /> {profile.email}</a>
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
          <div><strong>{profile.fullName}</strong><span>Support · Systems · Web</span></div>
          <p>{profile.location} · Remote · Open to opportunities</p>
        </div>
      </footer>
    </main>
  );
}
