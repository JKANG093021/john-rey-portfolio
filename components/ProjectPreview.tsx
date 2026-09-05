import { BarChart3, BookOpen, Building2, CheckCircle2, GraduationCap, ShoppingBag, Smartphone, Users2 } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";

export function ProjectPreview({ project }: { project: PortfolioProject }) {
  if (project.screenshot) {
    return (
      <div className="project-shot-wrap">
        <img
          className="project-screenshot"
          src={project.screenshot}
          alt={`${project.title} actual interface screenshot`}
          loading="lazy"
          decoding="async"
        />
        <span className="actual-ui-badge">Actual project UI</span>
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

  if (project.visualClass === "retail") {
    return (
      <div className="preview-ui" aria-label="Illustrative retail operations interface preview">
        <div className="preview-heading"><ShoppingBag size={18} /><span>Operations</span><b>Branch workflow</b></div>
        <div className="stat-strip"><div><small>Orders</small><strong>Manage</strong></div><div><small>Catalog</small><strong>Products</strong></div><div><small>POS</small><strong>Workflow</strong></div></div>
        <div className="preview-progress"><span style={{ width: "76%" }} /></div>
        <div className="preview-footer"><BarChart3 size={15} /> Ordering, POS & admin workflows</div>
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
