"use client";

const education = [
  {
    color: "#5CBB68",
    degree: "Master of Professional Studies, Data Science",
    school: "University of Maryland, Baltimore County (UMBC)",
    location: "USA",
    period: "2024 to 2026",
    meta: "CGPA 3.74 / 4.0",
    focus:
      "Data Modeling and Warehousing, Database Administration, Statistics and Probability, Statistical Modeling",
  },
  {
    color: "#4E9DD1",
    degree: "Bachelor of Technology, Information Technology",
    school: "Medi-Caps University (MU)",
    location: "Indore, India",
    period: "2019 to 2023",
    meta: "CGPA 3.51 / 4.0",
    focus: "Web Technologies and IoT",
  },
];

import Floral from "@/components/floral";
export default function Education() {
  return (
      <section id="education" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-14">
          <Floral variant="top-right" />
      <span className="font-mono text-xs text-accent-purple">02 — Education</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-text sm:text-4xl">
        Foundation
      </h2>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-xl border border-border bg-card p-6 transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = edu.color)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
          >
            <p className="font-mono text-sm" style={{ color: edu.color }}>
              {edu.period} · {edu.location}
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold text-text">
              {edu.degree}
            </h3>
            <p className="mt-1 text-sm text-text-muted">{edu.school}</p>
            <p className="mt-3 font-mono text-sm" style={{ color: edu.color }}>{edu.meta}</p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{edu.focus}</p>
          </div>
        ))}
      </div>
    </section>
  );
}