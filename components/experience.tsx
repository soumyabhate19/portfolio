const roles = [
  {
    color: "#5CBB68",
    period: "Mar 2025 to May 2026",
    role: "Business Intelligence Analyst & IT Assistant",
    org: "University of Maryland, Baltimore County (UMBC)",
    location: "Baltimore, MD",
    points: [
      "Built Tableau dashboards and SQL/Python workflows as part of a student team that migrated 170+ legacy reports to Tableau, with 100+ more in progress across a ~300-report initiative.",
      "Built and maintained ETL pipelines and data warehouse schemas for scalable reporting.",
      "Wrote optimized SQL queries to process large datasets, improving reporting efficiency.",
      "Partnered with stakeholders to translate business requirements into data solutions.",
    ],
    stack: ["SQL", "Python", "Tableau", "ETL"],
  },
  {
    color: "#4E9DD1",
    period: "Jan 2023 to Jul 2024",
    role: "Data Engineer & Business Consultant",
    org: "OMEG Digital Technology Solutions",
    location: "Remote",
    points: [
      "Built end-to-end data pipelines for web/mobile analytics on large-scale interaction data, leading 2 projects including a business banking client in Malaysia.",
      "Ran statistical analysis and A/B tests to optimize user engagement and performance, contributing to a 12% increase in user engagement across client projects.",
      "Built KPI dashboards tracking user behavior, funnel performance, and cross-platform trends, completing 20+ Agile/Scrum tasks and 45+ Technical Specification Documents (TSDs).",
      "Cleaned, validated, and transformed large datasets using SQL to ensure data quality, resolving recurring tracking failures that eliminated data loss in downstream reporting.",
    ],
    stack: ["SQL", "A/B Testing", "KPI Dashboards", "Data Cleaning"],
  },
  {
    color: "#A15FC0",
    period: "Jan 2021 to Feb 2021",
    role: "Web Development Intern",
    org: "REGex Software Services",
    location: "Jaipur, India (Remote)",
    points: [
      "Worked with a team of 6 developers to build a content management system.",
      "Built front-end features using HTML, CSS, and JavaScript with a React-based workflow.",
      "Collaborated in a remote, part-time team setting during an early academic internship.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    color: "#E2664B",
    period: "Aug 2020 to Nov 2020",
    role: "Social Media Marketing Intern",
    org: "Medics (NGO)",
    location: "Hybrid",
    points: [
      "Ran social media optimization (SMO) and advertising campaigns to raise COVID-19 awareness.",
      "Built digital marketing and content strategy to spread accurate public-health information during the pandemic.",
      "Worked in a hybrid, part-time internship setting alongside a small nonprofit marketing team.",
    ],
    stack: ["Digital Marketing", "SMO", "Social Media Advertising", "Digital Strategy"],
  },
];

import Floral from "@/components/floral";
export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-14">
              <Floral variant="top-left" />
      <span className="font-mono text-xs text-accent-purple">03 — Experience</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-text sm:text-4xl">
        Where this has played out
      </h2>

      <div className="relative mt-14">
        <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

        <div className="flex flex-col gap-2 sm:gap-0">
          {roles.map((job, i) => {
            const alignRight = i % 2 === 0;
            return (
              <div
                key={job.role}
                className={`relative flex flex-col sm:grid sm:grid-cols-2 sm:gap-10 ${
                  i === 1 ? "sm:-mt-48" : i === 2 ? "sm:-mt-24" : i > 0 ? "sm:-mt-20" : ""
                }`}
              >
                <span
                  className="absolute left-4 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 bg-bg sm:left-1/2"
                  style={{ borderColor: job.color }}
                />

                <div
                  className={`pl-10 sm:pl-0 ${
                    alignRight ? "sm:col-start-1 sm:pr-10" : "sm:col-start-2 sm:pl-10"
                  }`}
                  style={{ direction: "ltr" }}
                >
                  <p className="font-mono text-sm" style={{ color: job.color }}>
                    {job.period} · {job.location}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-text">{job.role}</h3>
                  <p className="mt-1 text-sm text-text-muted">{job.org}</p>

                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-mint" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border px-2 py-0.5 font-mono text-xs"
                        style={{ borderColor: job.color, color: job.color }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}