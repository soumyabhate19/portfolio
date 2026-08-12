"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-border bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-lg text-text-muted">
          soumya<span className="text-accent-mint">.dev</span>
        </a>

        <ul className="hidden gap-8 font-mono text-base text-text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            className="hidden rounded-md border border-border px-4 py-2 font-mono text-sm text-text transition-colors hover:border-accent-blue sm:inline-block"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="rounded-md border border-border p-2 text-text sm:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col bg-bg px-6 py-4 shadow-xl">
            <div className="flex items-center justify-between">
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="font-mono text-lg text-text-muted"
              >
                soumya<span className="text-accent-mint">.dev</span>
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="rounded-md border border-border p-2 text-text"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="mt-10 flex flex-col gap-6 font-mono text-lg text-text-muted">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/resume.pdf"
              onClick={() => setMenuOpen(false)}
              className="mt-10 rounded-md border border-border px-4 py-2 text-center font-mono text-sm text-text transition-colors hover:border-accent-blue"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
