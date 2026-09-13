import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "ATS Resume",
  description:
    "ATS-friendly resume of John Rey Baliguat for technical support, e-commerce support, customer support, administrative operations, website support, and junior IT roles.",
};

const coreSkills = [
  "Technical support and troubleshooting",
  "Customer assistance by email and chat",
  "Administrative and operations support",
  "E-commerce storefront, product, and order support",
  "Business system familiarization",
  "Admin dashboard support and record maintenance",
  "Issue reproduction and escalation notes",
  "Website and system maintenance",
  "Software, printer, and peripheral installation",
  "Basic hardware setup and troubleshooting",
  "QA testing and workflow verification",
  "Technical documentation",
  "Database-backed workflows",
  "Responsive and mobile testing",
  "REST API integration",
];

const technicalSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Next.js",
  "Tailwind CSS",
  "REST APIs",
  "Git and version control",
  "ChatGPT and Claude as personal productivity tools",
  "AI-assisted research, drafting, and debugging",
  "Hardware, printer, device, and internet troubleshooting",
];

const projectExperience = [
  {
    title: "Triple Vision Realty Platform",
    context: "Real estate website and admin system",
    bullets: [
      "Supported property listings, buyer inquiries, admin records, mobile lead workflows, and agent referral attribution.",
      "Translated business requirements into clearer customer-facing and administrator workflows while preserving existing functionality.",
    ],
  },
  {
    title: "Milk Tea E-commerce Experience",
    context: "Self-directed portfolio concept",
    bullets: [
      "Planned a responsive product-discovery, pickup or delivery, cart, and checkout journey for a fictional milk-tea storefront.",
    ],
  },
  {
    title: "Chuchu Milktea Loyalty Kiosk",
    context: "Client loyalty system and Loyverse API integration",
    bullets: [
      "Built and supported a tablet-first customer loyalty flow connected to external receipt data.",
      "Investigated production issues involving receipt synchronization, browser polling, customer claim windows, and kiosk operation.",
    ],
  },
  {
    title: "DOUS E-Borrower's Card System",
    context: "Academic library system and OJT project",
    bullets: [
      "Built and deployed a student and administrator portal for registration, borrower access, and database-driven workflows.",
      "Tested user journeys and supported common IT concerns in an academic environment.",
    ],
  },
];

const training = [
  {
    title: "Licensed Real Estate Salesperson",
    meta: "Philippines | Light real-estate experience",
  },
  {
    title: "Real Estate Brokerage Seminar for Real Estate Salespersons",
    meta: "Philippines Center for Real Estate Professional Studies, Inc. | 12 credit units | June 20–21, 2026",
  },
  {
    title: "Explainable AI (XAI) and Front-End Web Development Essentials webinars",
    meta: "West Visayas State University CICT | September 27, 2024",
  },
  {
    title: "Career Development in IT: From College to Industry",
    meta: "West Visayas State University CICT | September 28, 2024",
  },
  {
    title: "Azure AZ-104 Insight learning event",
    meta: "Styava.dev | September 25, 2024",
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar container-shell">
        <Link href="/#resume" className="back-link"><ArrowLeft size={17} /> Back to portfolio</Link>
        <div className="resume-toolbar-actions">
          <ThemeToggle />
          <a className="secondary-button" href={profile.resumeDocxHref} download><FileText size={17} /> DOCX</a>
          <a className="primary-button" href={profile.resumeHref} download><Download size={17} /> PDF</a>
        </div>
      </div>

      <article className="resume-document" aria-label="ATS resume of John Rey Baliguat">
        <header className="resume-document-header">
          <h1>{profile.fullName}</h1>
          <p className="resume-target-title">Technical Support | E-commerce Support | Customer and Administrative Operations | Web Systems</p>
          <div className="resume-contact-row">
            <span><MapPin size={14} /> {profile.location} | Remote</span>
            <a href={`mailto:${profile.email}`}><Mail size={14} /> {profile.email}</a>
            <a href={profile.portfolioUrl} target="_blank" rel="noreferrer">{profile.portfolioUrl.replace("https://", "")}</a>
          </div>
        </header>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Bachelor of Science in Information Technology graduate with approximately two years of hands-on web, hardware, and technical project experience. Supports users, customer and administrative workflows, websites, business systems, hardware, printers, quality assurance, databases, deployment, and API integrations. Open to e-commerce support roles involving storefront, product, order, and customer operations. Licensed real estate salesperson with light industry experience in property, inquiry, and lead workflows.
          </p>
        </section>

        <section className="resume-section">
          <h2>Core Skills</h2>
          <p className="resume-keyword-list">{coreSkills.join(" | ")}</p>
        </section>

        <section className="resume-section">
          <h2>Relevant Experience</h2>

          <div className="resume-entry">
            <div className="resume-entry-heading">
              <div><h3>Independent Web Developer and Technical Support</h3><p>Project-based | Philippines and remote</p></div>
              <span>Current</span>
            </div>
            <ul>
              <li>Build, maintain, test, and troubleshoot websites and database-backed systems for business and academic workflows.</li>
              <li>Work with client requirements, admin processes, customer journeys, forms, records, responsive interfaces, and production fixes.</li>
              <li>Support software, computer hardware, printer, and peripheral setup; investigate issues systematically and verify changes.</li>
              <li>Explain technical work clearly and support deployment, hosting configuration, REST API integrations, and ongoing improvements.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-heading">
              <div><h3>Hardware Technician</h3><p>Earlier professional experience</p></div>
            </div>
            <ul>
              <li>Diagnosed hardware problems, performed practical maintenance, and used step-by-step root-cause isolation to restore reliable device operation.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-heading">
              <div><h3>Information Technology OJT and Technical Support</h3><p>Don Mariano Marcos Memorial State University - Mid La Union Campus</p></div>
            </div>
            <ul>
              <li>Assisted users with common technical concerns, including internet connectivity issues.</li>
              <li>Developed and deployed the DOUS E-Borrower's Card System for student and administrator library workflows.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Selected Project Experience</h2>
          {projectExperience.map((project) => (
            <div className="resume-entry resume-project-entry" key={project.title}>
              <div className="resume-entry-heading">
                <div><h3>{project.title}</h3><p>{project.context}</p></div>
              </div>
              <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <p className="resume-keyword-list">{technicalSkills.join(" | ")}</p>
          <p className="resume-growth"><strong>Currently expanding:</strong> TypeScript, n8n, Make, Zapier, and advanced Next.js workflows.</p>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-entry-heading resume-education-entry">
            <div>
              <h3>Bachelor of Science in Information Technology</h3>
              <p>Don Mariano Marcos Memorial State University - Mid La Union Campus</p>
            </div>
            <span>Graduated</span>
          </div>
        </section>

        <section className="resume-section">
          <h2>Licenses, Training and Certificates</h2>
          {training.map((item) => (
            <div className="resume-entry resume-training-entry" key={item.title}>
              <div className="resume-entry-heading">
                <div><h3>{item.title}</h3><p>{item.meta}</p></div>
              </div>
            </div>
          ))}
        </section>

        <section className="resume-section resume-last-section">
          <h2>Target Roles and Availability</h2>
          <p>
            Technical Support, Application Support, E-commerce Support or Virtual Assistant, Customer Support by Email or Chat, Administrative or Operations Assistant, Website and System Support, Junior IT Support, Real Estate Support, and Hardware Installation or Maintenance Support. Available for remote full-time, part-time, and suitable project-based opportunities.
          </p>
        </section>
      </article>

      <div className="resume-mobile-actions container-shell">
        <a className="primary-button" href={profile.resumeHref} download><Download size={18} /> Download PDF</a>
        <a className="secondary-button" href={profile.resumeDocxHref} download><FileText size={18} /> Download DOCX</a>
      </div>
    </main>
  );
}
