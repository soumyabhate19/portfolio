"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-border bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-sm text-text-muted">
          soumya<span className="text-accent-mint">.dev</span>
        </a>

        <ul className="hidden gap-8 font-mono text-xs text-text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              
                <a href={link.href}
                className="transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        
          <a href="/resume.pdf"
          className="rounded-md border border-border px-4 py-2 font-mono text-xs text-text transition-colors hover:border-accent-blue"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}