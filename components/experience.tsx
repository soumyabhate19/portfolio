const roles = [
  {
    period: "Mar 2025 — May 2026",
    role: "Business Intelligence Analyst & IT Assistant",
    org: "University of Maryland, Baltimore County (UMBC)",
    location: "Baltimore, MD",
    points: [
      "Built Tableau dashboards and SQL/Python workflows to support data-driven IT decisions.",
      "Built and maintained ETL pipelines and data warehouse schemas for scalable reporting.",
      "Wrote optimized SQL queries to process large datasets, improving reporting efficiency.",
      "Partnered with stakeholders to translate business requirements into data solutions.",
    ],
    stack: ["SQL", "Python", "Tableau", "ETL"],
  },
  {
    period: "Jan 2023 — Jul 2024",
    role: "Data Engineer & Business Consultant",
    org: "OMEG Digital Technology Solutions",
    location: "Remote",
    points: [
      "Built end-to-end data pipelines for web/mobile analytics on large-scale interaction data.",
      "Ran statistical analysis and A/B tests to optimize user engagement and performance.",
      "Built KPI dashboards tracking user behavior, funnel performance, and cross-platform trends.",
      "Cleaned, validated, and transformed large datasets using SQL to ensure data quality.",
    ],
    stack: ["SQL", "A/B Testing", "KPI Dashboards", "Data Cleaning"],
  },
];

import Floral from "@/components/floral";
export default function Experience() {
  return (
      <section id="experience" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24">
          <Floral variant="top-right" />
      <span className="font-mono text-xs text-accent-purple">02 — Experience</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-text sm:text-4xl">
        Where this has played out
      </h2>

      <div className="mt-14 space-y-14 border-l border-border pl-8">
        {roles.map((job) => (
          <div key={job.role} className="relative">
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent-blue bg-bg" />

            <p className="font-mono text-xs text-text-muted">{job.period} · {job.location}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-text">{job.role}</h3>
            <p className="mt-1 text-sm text-text-muted">{job.org}</p>

            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-mint" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}