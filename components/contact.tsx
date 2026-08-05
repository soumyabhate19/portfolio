"use client";

import { useState } from "react";

import Floral from "@/components/floral";
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
    <section id="contact" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24">
          <Floral variant="top-left" />
      <span className="font-mono text-xs text-accent-purple">05 — Contact</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-text sm:text-4xl">
        Let&apos;s talk data.
      </h2>
      <p className="mt-4 max-w-lg text-text-muted">
        Looking for full-time Data Scientist, ML Engineer, Data Analyst, or
        Data Engineer roles. Reach out. I&apos;d love to hear about what
        your team is building.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          
            <a href="mailto:soumyabhate19@gmail.com"
            className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-accent-blue"
          >
            <span className="font-mono text-xs text-text-muted">Email</span>
            <span className="text-sm text-text">soumyabhate19@gmail.com</span>
          </a>
          
            <a href="tel:+16674520629"
            className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-accent-blue"
          >
            <span className="font-mono text-xs text-text-muted">Phone</span>
            <span className="text-sm text-text">+1 (667) 452-0629</span>
          </a>
          
            <a href="https://linkedin.com/in/soumyabhate19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-accent-blue"
          >
            <span className="font-mono text-xs text-text-muted">LinkedIn</span>
            <span className="text-sm text-text">soumyabhate19</span>
          </a>
          
            <a href="https://github.com/soumyabhate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-accent-blue"
          >
            <span className="font-mono text-xs text-text-muted">GitHub</span>
            <span className="text-sm text-text">soumyabhate</span>
          </a>
        </div>

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

      <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 font-mono text-xs text-text-muted">
        <span>Boston, MA</span>
        <span>Soumya Bhate · Portfolio © 2026</span>
      </div>
    </section>
  );
}