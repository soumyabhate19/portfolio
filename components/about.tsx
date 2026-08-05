import Floral from "@/components/floral";
export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24">
      <Floral variant="top-left" />
      <span className="font-mono text-xs text-accent-purple">01 — About</span>

      <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-text sm:text-4xl">
        I work across the full data lifecycle, not just one slice of it.
      </h2>

      <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-text-muted">
        <p>
          I didn&apos;t plan to end up working across the whole data
          lifecycle. It just happened one curiosity at a time. Warehouse
          schemas and SQL first, at UMBC. Then statistics, because I got
          tired of trusting a result I couldn&apos;t explain. Most recently,
          building and deploying LLM-powered apps, because I wanted to see
          my work actually used, not just graded.
        </p>
        <p>
          The thread running through all of it is responsibility. When I
          built a crime-prediction model, I left out demographic data on
          purpose, even though it would&apos;ve nudged the accuracy up. When
          I built a wellness companion with facial emotion detection, I made
          sure nothing left the device. I&apos;d rather ship something
          slightly less flashy that I can stand behind than something
          impressive I can&apos;t.
        </p>
        <p>
          I graduated with my Master&apos;s in Data Science from UMBC in May
          2026, and I&apos;m looking for a team that cares about getting it right as much as getting it fast.
        </p>
      </div>
    </section>
  );
}