"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  ["Profile", "/#about"],
  ["Support", "/#support"],
  ["Work", "/#projects"],
  ["Certificates", "/#certificates"],
  ["Resume", "/resume"],
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap container-shell">
        <Link className="brand" href="/#home" aria-label="John Rey Baliguat home">
          <span className="brand-mark" aria-hidden="true">JR</span>
          <span className="brand-copy">
            <strong>John Rey Baliguat</strong>
            <small>Technical VA · Web Support</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link className="nav-cta desktop-cta" href="/#contact">Let&apos;s Talk</Link>
          <button
            type="button"
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="nav-cta" href="/#contact" onClick={() => setOpen(false)}>Let&apos;s Talk</Link>
        </nav>
      ) : null}
    </header>
  );
}
