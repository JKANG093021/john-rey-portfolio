"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  ["Home", "/#home"],
  ["Services", "/#services"],
  ["Projects", "/#projects"],
  ["Skills", "/#skills"],
  ["Resume", "/resume"],
  ["Contact", "/#contact"],
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap container-shell">
        <a className="brand" href="/#home" aria-label="John Rey Baliguat home">
          John Rey<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <a className="nav-cta desktop-cta" href="/#contact">
            Contact Me
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="/#contact" onClick={() => setOpen(false)}>
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
}
