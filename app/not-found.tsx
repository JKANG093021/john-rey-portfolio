import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="eyebrow">404 • Page not found</p>
        <h1>This page isn&apos;t part of the portfolio.</h1>
        <p>The link may be outdated, or the page may have moved.</p>
        <Link href="/" className="primary-button">
          <ArrowLeft size={18} /> Back to homepage
        </Link>
      </div>
    </main>
  );
}
