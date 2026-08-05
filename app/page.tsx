import Navbar from "@/components/navbar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Reveal from "@/components/reveal";
import Floral from "@/components/floral";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative mx-auto max-w-5xl overflow-hidden px-6 pt-32 pb-24">
          <Floral />
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-accent-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-mint" />
            Open to Data Science / ML / Analytics roles
          </div>

          <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl">
            Hi, I&apos;m Soumya.
            <br />
            <span className="text-accent-blue">I build intelligent data systems</span>
            <br />
            that turn complexity into decisions.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-text-muted">
            Data Scientist &amp; ML Engineer who builds pipelines, statistical rigor, and LLM-powered applications, end to end.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-accent-blue px-6 py-3 font-medium text-bg transition-transform hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="/resume.pdf" className="rounded-lg border border-border px-6 py-3 font-medium text-text transition-colors hover:border-accent-blue">
              Download Resume
            </a>
            <a href="#contact" className="rounded-lg border border-border px-6 py-3 font-medium text-text transition-colors hover:border-accent-blue">
              Contact Me
            </a>
          </div>
        </section>
        <Reveal><About /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
    </>
  );
}