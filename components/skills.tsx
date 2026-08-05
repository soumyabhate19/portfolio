const categories = [
  {
    label: "Programming & Databases",
    items: ["Python", "SQL"],
  },
  {
    label: "AI & Machine Learning",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Deep Learning",
      "Feature Engineering",
      "LLMs",
      "RAG",
    ],
  },
  {
    label: "Data Engineering",
    items: ["ETL Pipelines", "Data Warehousing", "Apache Spark", "PySpark"],
  },
  {
    label: "Analytics & BI",
    items: [
      "Tableau",
      "Power BI",
      "Adobe Analytics",
      "Adobe Launch",
      "Adobe Target",
      "Adobe Experience Manager",
      "Adobe Dashboards",
    ],
  },
  {
    label: "Tools & Libraries",
    items: ["Pandas", "NumPy", "OpenCV", "Streamlit", "LangChain", "FAISS"],
  },
  {
    label: "Methods",
    items: [
      "Statistical Modeling",
      "A/B Testing",
      "Prompt Engineering",
      "Data Analysis",
    ],
  },
];

import Floral from "@/components/floral";
export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24">
          <Floral variant="top-right" />
      <span className="font-mono text-xs text-accent-purple">04 — Skills</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-text sm:text-4xl">
        The stack
      </h2>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.label}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent-blue"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-accent-mint">
              {category.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}