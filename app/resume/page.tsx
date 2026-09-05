import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Mail,
  MapPin,
  BriefcaseBusiness,
  Code2,
  Database,
  Wrench,
  Workflow,
  TestTube2,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of John Rey Baliguat, a Technical Virtual Assistant focused on web support, troubleshooting, QA, systems, and automation for remote clients.",
};

const capabilities = [
  [BriefcaseBusiness, "Technical VA Support", "Ongoing website, system, documentation, and remote technical task support."],
  [Wrench, "Website Support", "Updates, maintenance, deployment support, forms, and practical fixes."],
  [TestTube2, "QA & Troubleshooting", "Workflow testing, issue tracing, mobile checks, and verification."],
  [Database, "Systems & Database Support", "Admin tools, records, workflows, and database-backed features."],
  [Workflow, "API & Automation", "REST APIs, Loyverse integration, email flows, and workflow automation."],
  [Code2, "Web Development", "Custom PHP, JavaScript, and modern web work when a support task needs code."],
] as const;

const resumeProjects = [
  {
    title: "Triple Vision Realty Platform",
    meta: "Real Estate / Lead & Sales Attribution",
    bullets: [
      "Property listings, admin workflows, buyer leads, and agent referral attribution.",
      "Mobile buyer-lead improvements and practical lead-ownership workflow support.",
    ],
  },
  {
    title: "DOUS E-Borrower's Card System",
    meta: "Academic Library / OJT Project",
    bullets: [
      "Deployed student and administrator portal for borrower access and library workflows.",
      "Account registration, database-driven access, testing, and interface design.",
    ],
  },
  {
    title: "Soy Yummy E-commerce Platform",
    meta: "E-commerce / Retail Operations",
    bullets: [
      "Customer ordering, products, branches, inventory-related records, POS, and admin workflows.",
      "Database setup, UI iteration, debugging, and customer/admin workflow testing.",
    ],
  },
  {
    title: "Chuchu Milktea Loyalty Kiosk",
    meta: "Loyalty / Loyverse API Integration",
    bullets: [
      "Tablet-first loyalty flow connected to Loyverse receipt data.",
      "Receipt polling and synchronization, per-customer claim windows, kiosk UX, and deployment support.",
    ],
  },
];

const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Next.js",
  "Tailwind CSS",
  "REST APIs",
  "Git / Version Control",
  "AI-Assisted Development",
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-topbar container-shell">
        <Link href="/#home" className="back-link">
          <ArrowLeft size={17} /> Back to portfolio
        </Link>
        <div className="resume-topbar-actions">
          <ThemeToggle />
          <a className="primary-button resume-download-top" href={profile.resumeHref} download>
            <Download size={17} /> Download PDF
          </a>
        </div>
      </div>

      <section className="resume-paper" aria-label="John Rey Baliguat resume">
        <header className="resume-header">
          <p className="resume-kicker">Resume / Curriculum Vitae</p>
          <h1>{profile.fullName}</h1>
          <h2>{profile.role}</h2>
          <div className="resume-contact-line">
            <span><MapPin size={15} /> {profile.location} / Remote</span>
            <a href={`mailto:${profile.email}`}><Mail size={15} /> {profile.email}</a>
          </div>
        </header>

        <div className="resume-rule" />

        <section className="resume-block">
          <h3>Professional Summary</h3>
          <p>
            Technical Virtual Assistant focused on web support, troubleshooting, QA, business systems, and practical automation. I have hands-on experience maintaining and improving live websites, resolving user-flow and database-backed issues, supporting admin tools, testing responsive interfaces, assisting with deployment, and working with REST API integrations. My web development background lets me handle technical VA tasks that sometimes require code, while keeping the priority on dependable day-to-day support for remote clients.
          </p>
        </section>

        <section className="resume-block">
          <h3>Core Capabilities</h3>
          <div className="resume-capability-grid">
            {capabilities.map(([Icon, title, text]) => (
              <div key={title} className="resume-capability">
                <Icon size={19} />
                <div><strong>{title}</strong><span>{text}</span></div>
              </div>
            ))}
          </div>
        </section>


        <section className="resume-block">
          <h3>Technical Support Experience</h3>
          <ul className="resume-support-list">
            <li>Diagnose and resolve website, form, database, admin-dashboard, and user-flow issues.</li>
            <li>Maintain and update live web applications, customer-facing pages, and internal business systems.</li>
            <li>Test customer and administrator workflows across desktop and mobile before deployment.</li>
            <li>Support hosting, deployment, configuration, browser troubleshooting, and production fixes.</li>
            <li>Work with REST APIs, third-party integrations, email flows, and practical workflow automation.</li>
            <li>Create clear technical notes and use AI-assisted development to speed up debugging while manually validating fixes.</li>
          </ul>
        </section>

        <section className="resume-block">
          <h3>Selected Project Experience</h3>
          <div className="resume-project-list">
            {resumeProjects.map((project) => (
              <article className="resume-project-item" key={project.title}>
                <h4>{project.title}</h4>
                <p className="resume-project-meta">{project.meta}</p>
                <ul>
                  {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-block">
          <h3>Tools & Technologies</h3>
          <div className="resume-tools">
            {tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </section>


        <section className="resume-block">
          <h3>Education</h3>
          <div className="resume-education">
            <strong>Bachelor of Science in Information Technology</strong>
            <span>Don Mariano Marcos Memorial State University - Mid La Union Campus</span>
            <span>Graduated</span>
          </div>
        </section>

        <section className="resume-block resume-final-block">
          <h3>Current Growth & Availability</h3>
          <p>
            <strong>Currently expanding:</strong> TypeScript, n8n / Make / Zapier, and advanced Next.js.
            <strong> Availability:</strong> Remote, hourly, part-time, and project-based work.
          </p>
        </section>
      </section>

      <div className="resume-bottom-actions container-shell">
        <a className="primary-button" href={profile.resumeHref} download>
          <Download size={18} /> Download Resume PDF
        </a>
        <Link className="secondary-button" href="/#contact">Contact John Rey</Link>
      </div>
    </main>
  );
}
