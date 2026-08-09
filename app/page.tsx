import Navbar from "@/components/navbar";
import About from "@/components/about";
import Education from "@/components/education";
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
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-sm text-white" style={{ backgroundColor: "#C87B3F" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Open to Data Science / ML / Analytics roles
          </div>

          <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl">
            Soumya Bhate
          </h1>
          <p className="mt-4 font-display text-xl text-accent-blue sm:text-2xl">
            I make data simple, but significant.
        </p>

          <p className="mt-6 max-w-xl text-lg text-text-muted">
            Data Scientist &amp; ML Engineer who builds pipelines, statistical rigor, and LLM-powered applications, end to end.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-accent-blue px-6 py-3 font-medium text-bg transition-transform hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="/resume.pdf" className="rounded-lg bg-accent-blue px-6 py-3 font-medium text-bg transition-transform hover:-translate-y-0.5">
              Download Resume
            </a>
            <a href="#contact" className="rounded-lg bg-accent-blue px-6 py-3 font-medium text-bg transition-transform hover:-translate-y-0.5">
              Contact Me
            </a>
          </div>
        </section>
        <Reveal><About /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
    </>
  );
}