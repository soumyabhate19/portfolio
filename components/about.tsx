import Floral from "@/components/floral";
export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-14">
      <Floral variant="top-left" />
      <span className="font-mono text-xs text-accent-purple">01 — About</span>

      <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-text sm:text-4xl">
        I work across the full data lifecycle, not just one slice of it.
      </h2>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-text-muted">
      <p>
        My journey in data science has been a mix of learning, experimenting, and figuring out what I actually enjoy building. At UMBC, I started with SQL, databases, and data warehousing, then moved deeper into statistics and machine learning. Over time, I became more interested in not just analyzing data, but actually building things with it — which eventually led me to AI and LLM-powered applications.
      </p>
      
      <p>
        Some of my projects have also made me think beyond just model accuracy. While working on a crime prediction model, for example, I chose not to use demographic information because I didn't want the predictions to rely on sensitive attributes just for a small improvement in accuracy. For a wellness companion using facial emotion detection, I designed it so the data stays on the user's device.
      </p>
      
      <p>
        I completed my Master's in Data Science at UMBC in May 2026. Now, I'm looking for opportunities where I can keep learning, solve real problems, and build data and AI products that people can actually use.
      </p>
      </div>
    </section>
  );
}
