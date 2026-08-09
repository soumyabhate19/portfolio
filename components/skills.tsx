"use client";

import {
  Code2,
  Database,
  Brain,
  Network,
  Flame,
  MessagesSquare,
  Layers,
  Settings2,
  Bot,
  Search,
  Workflow,
  Boxes,
  Zap,
  Sparkles,
  BarChart3,
  PieChart,
  LineChart,
  Rocket,
  Target,
  LayoutTemplate,
  LayoutDashboard,
  Table2,
  Sigma,
  Eye,
  AppWindow,
  Link2,
  SearchCode,
  TrendingUp,
  SplitSquareHorizontal,
  Terminal,
  Activity,
  Server,
  type LucideIcon,
} from "lucide-react";

const skillIcons: Record<string, LucideIcon> = {
  Python: Code2,
  SQL: Database,
  MongoDB: Server,
  "Scikit-learn": Brain,
  TensorFlow: Network,
  PyTorch: Flame,
  NLP: MessagesSquare,
  "Deep Learning": Layers,
  "Feature Engineering": Settings2,
  LLMs: Bot,
  RAG: Search,
  "ETL Pipelines": Workflow,
  "Data Warehousing": Boxes,
  "Apache Spark": Zap,
  PySpark: Sparkles,
  Tableau: BarChart3,
  "Power BI": PieChart,
  "Adobe Analytics": LineChart,
  "Adobe Launch": Rocket,
  "Adobe Target": Target,
  "Adobe Experience Manager": LayoutTemplate,
  "Adobe Dashboards": LayoutDashboard,
  Pandas: Table2,
  NumPy: Sigma,
  OpenCV: Eye,
  Streamlit: AppWindow,
  LangChain: Link2,
  FAISS: SearchCode,
  "Statistical Modeling": TrendingUp,
  "A/B Testing": SplitSquareHorizontal,
  "Prompt Engineering": Terminal,
  "Data Analysis": Activity,
};

const categories = [
  {
    label: "Programming & Databases",
    color: "#5CBB68",
    items: ["Python", "SQL", "MongoDB"],
  },
  {
    label: "AI & Machine Learning",
    color: "#E9A245",
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
    color: "#4E9DD1",
    items: ["ETL Pipelines", "Data Warehousing", "Apache Spark", "PySpark"],
  },
  {
    label: "Analytics & BI",
    color: "#E2664B",
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
    color: "#A15FC0",
    items: ["Pandas", "NumPy", "OpenCV", "Streamlit", "LangChain", "FAISS"],
  },
  {
    label: "Methods",
    color: "#2CA192",
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
    <section id="skills" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-14">
      <Floral variant="top-left" />
      <span className="font-mono text-xs text-accent-purple">05 — Skills</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-text sm:text-4xl">
        The stack
      </h2>

      <div className="mt-10 flex flex-col gap-6">
        {categories.map((category) => (
          <div key={category.label}>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wide text-accent-mint">
              {category.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.items.map((item) => {
                const Icon = skillIcons[item];
                return (
                  <div
                    key={item}
                    className="flex w-[92px] flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-2 py-2.5 text-center transition-transform hover:-translate-y-0.5"
                  >
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full"
                      style={{ backgroundColor: category.color }}
                    >
                      <Icon className="h-[18px] w-[18px] text-white" />
                    </span>
                    <span
                      className="font-mono text-xs font-medium leading-tight"
                      style={{ color: category.color }}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}