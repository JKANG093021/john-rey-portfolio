import Image from "next/image";
import { BookOpen, Building2, CheckCircle2, GraduationCap, Smartphone, Users2 } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectPreview({ project }: { project: PortfolioProject }) {
  if (project.screenshot) {
    return (
      <div className="project-shot-wrap">
        <Image
          className="project-screenshot"
          src={project.screenshot}
          alt={project.imageAlt ?? `${project.title} interface preview`}
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 560px"
        />
        <span className="actual-ui-badge">{project.imageLabel ?? "Project interface"}</span>
      </div>
    );
  }

  if (project.visualClass === "real-estate") {
    return (
      <div className="preview-ui" aria-label="Illustrative buyer lead interface preview">
        <div className="preview-heading"><Building2 size={18} /><span>Buyer Leads</span><b>Lead workflow</b></div>
        <div className="lead-row"><span className="preview-avatar">01</span><div><strong>Property inquiry</strong><small>Referral source captured</small></div><em>New</em></div>
        <div className="lead-row"><span className="preview-avatar">02</span><div><strong>Buyer follow-up</strong><small>Assigned seller recorded</small></div><em>Open</em></div>
        <div className="preview-footer"><Users2 size={15} /> Lead ownership & attribution</div>
      </div>
    );
  }

  if (project.visualClass === "library") {
    return (
      <div className="preview-ui" aria-label="Illustrative library borrower system preview">
        <div className="preview-heading"><BookOpen size={18} /><span>E-Borrower Portal</span><b>Academic access</b></div>
        <div className="lead-row"><span className="preview-avatar"><GraduationCap size={15} /></span><div><strong>Student access</strong><small>Registered borrower sign-in</small></div><em>Portal</em></div>
        <div className="lead-row"><span className="preview-avatar">AD</span><div><strong>Administrator access</strong><small>Separate admin sign-in path</small></div><em>Secure</em></div>
        <div className="preview-footer"><BookOpen size={15} /> Library borrower & account workflow</div>
      </div>
    );
  }

  return (
    <div className="preview-ui" aria-label="Illustrative loyalty kiosk interface preview">
      <div className="preview-heading"><Smartphone size={18} /><span>Loyalty Kiosk</span><b>Customer flow</b></div>
      <div className="kiosk-check"><CheckCircle2 size={34} /><strong>Receipt detected</strong><small>Customer claim flow available</small></div>
      <div className="preview-footer"><CheckCircle2 size={15} /> Receipt sync & kiosk experience</div>
    </div>
  );
}
