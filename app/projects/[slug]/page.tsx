import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { ProjectPreview } from "@/components/ProjectPreview";
import { ThemeToggle } from "@/components/ThemeToggle";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | John Rey Baliguat`,
      description: project.summary,
      type: "article",
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="case-page">
      <div className="case-nav container-shell">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={17} /> Back to portfolio
        </Link>
        <div className="case-nav-actions">
          <ThemeToggle />
          <Link href="/#contact" className="nav-cta">
            Contact Me
          </Link>
        </div>
      </div>

      <section className="case-hero section-grid-line">
        <div className="container-shell case-hero-grid">
          <div>
            <div className="eyebrow">{project.label}</div>
            <h1>{project.title}</h1>
            <p className="case-lead">{project.overview}</p>
            <div className="chips case-chips">
              {project.technologies.map((item) => <span key={item}>{item}</span>)}
            </div>
            {project.liveUrl && (
              <a
                className="secondary-button case-live-button"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {project.liveLabel || "Visit Live Website"} <ExternalLink size={17} />
              </a>
            )}
          </div>
          <div className={`case-visual ${project.visualClass}`}>
            <div className="visual-window case-window">
              <div className="visual-topbar"><span /><span /><span /></div>
              <div className="visual-body preview-body case-preview-body">
                <ProjectPreview project={project} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-grid-line">
        <div className="container-shell case-grid">
          <article className="case-card">
            <p className="case-kicker">The challenge</p>
            <h2>Business problem</h2>
            <p>{project.problem}</p>
          </article>
          <article className="case-card">
            <p className="case-kicker">My contribution</p>
            <h2>My role</h2>
            <p>{project.role}</p>
          </article>
        </div>
      </section>

      <section className="section section-grid-line">
        <div className="container-shell solution-layout">
          <div>
            <div className="eyebrow">Solution</div>
            <h2 className="section-title">What I worked on</h2>
          </div>
          <div className="solution-list">
            {project.solution.map((item) => (
              <div className="solution-row" key={item}>
                <CheckCircle2 size={20} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-grid-line">
        <div className="container-shell case-grid">
          <div>
            <div className="eyebrow">Highlights</div>
            <h2 className="section-title">Support skills demonstrated</h2>
          </div>
          <div className="highlight-list">
            {project.highlights.map((item) => (
              <span key={item}><ShieldCheck size={17} /> {item}</span>
            ))}
          </div>
        </div>
        {project.note && (
          <div className="container-shell privacy-note">
            <ShieldCheck size={18} />
            <span>{project.note}</span>
          </div>
        )}
      </section>

      <section className="case-cta">
        <div className="container-shell case-cta-inner">
          <div>
            <div className="eyebrow">Need dependable support?</div>
            <h2>Let&apos;s make the workflow clearer for your team and customers.</h2>
          </div>
          <Link href="/#contact" className="primary-button">
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
