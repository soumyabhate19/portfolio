"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

import Floral from "@/components/floral";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.83-5.97 6.83H1.66l7.73-8.84L1.24 2.25h6.83l4.72 6.24 5.45-6.24Zm-1.16 17.52h1.83L6.99 4.13H5.02l12.06 15.64Z" />
    </svg>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "someone"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:soumyabhate19@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-14">
          <Floral variant="top-right" />
      <span className="font-mono text-xs text-accent-purple">06 — Contact</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-text sm:text-4xl">
        Let&apos;s talk data.
      </h2>
      <p className="mt-4 max-w-lg text-text-muted">
        Looking for full-time Data Scientist, ML Engineer, Data Analyst, or
        Data Engineer roles. Reach out. I&apos;d love to hear about what
        your team is building.
      </p>

      <div className="mt-12 max-w-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
          />
          <textarea
            required
            placeholder="Your message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent-blue px-6 py-3 font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 flex flex-nowrap items-center justify-center gap-x-6 overflow-x-auto">
          <a
            href="mailto:soumyabhate19@gmail.com"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-text-muted transition-colors hover:text-accent-blue"
          >
            <Mail className="h-5 w-5 shrink-0" />
            <span className="text-sm text-text">soumyabhate19@gmail.com</span>
          </a>
          <a
            href="tel:+16674520629"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-text-muted transition-colors hover:text-accent-blue"
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span className="text-sm text-text">+1 (667) 452-0629</span>
          </a>
          <a
            href="https://linkedin.com/in/soumyabhate19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-text-muted transition-colors hover:text-accent-blue"
          >
            <LinkedinIcon className="h-5 w-5 shrink-0" />
            <span className="text-sm text-text">soumyabhate19</span>
          </a>
          <a
            href="https://github.com/soumyabhate19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-text-muted transition-colors hover:text-accent-blue"
          >
            <GithubIcon className="h-5 w-5 shrink-0" />
            <span className="text-sm text-text">soumyabhate19</span>
          </a>
          <a
            href="https://x.com/soumyabhate19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-text-muted transition-colors hover:text-accent-blue"
          >
            <XIcon className="h-5 w-5 shrink-0" />
            <span className="text-sm text-text">soumyabhate19</span>
          </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 font-mono text-xs text-text-muted">
        <span>Boston, MA</span>
        <span>Soumya Bhate · Portfolio © 2026</span>
      </div>
    </section>
  );
}