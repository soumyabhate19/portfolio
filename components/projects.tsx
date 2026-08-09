"use client";

import { useState } from "react";
import {
  MessageCircleMore,
  BarChart3,
  Activity,
  TrendingUp,
  HeartHandshake,
  ChevronDown,
} from "lucide-react";

const icons = {
  legal: MessageCircleMore,
  crime: BarChart3,
  fitness: Activity,
  stock: TrendingUp,
  emocare: HeartHandshake,
};

const projects = [
  {
    key: "crime",
    color: "#5CBB68",
    tag: "Machine Learning · Feb–May 2025",
    title: "Crime & Economic Analysis",
    subtitle: "Predicting violent crime risk from crime and census data",
    repo: "https://github.com/soumyabhate/crime-and-economic-analysis-washington-dc",
    stack: ["Python", "Scikit-learn", "XGBoost", "PyTorch", "SMOTE"],
    overview:
      "A model comparison project predicting violent-crime likelihood by combining DC crime records with Census economic indicators — with a deliberate focus on fairness, not just accuracy.",
    problem:
      "Raw crime prediction models tend to either ignore class imbalance or lean on demographic features in ways that raise real bias concerns. The goal was a model that performs well without taking that shortcut.",
    approach: [
      "Cleaned and integrated 29K+ DC crime records with Census ACS economic indicators.",
      "Built and compared four model families: Logistic Regression, Random Forest, XGBoost, and a PyTorch feed-forward network.",
      "Applied SMOTE and class-weighting to address severe class imbalance in violent-crime cases.",
      "Deliberately excluded demographic data from modeling to reduce bias, following responsible-AI practice.",
    ],
    results: [
      "Raised violent-crime recall from 3% to up to 70% through class-imbalance handling.",
      "Compared four model families head-to-head rather than settling for the first that worked.",
      "Excluded demographic features by design which was a fairness trade-off, made explicitly.",
    ],
  },
  {
    key: "stock",
    color: "#4E9DD1",
    tag: "Big Data · Spark · Feb–May 2025",
    title: "Stock Market Volatility Analysis",
    subtitle: "Large-scale price trend analysis using Apache Spark",
    repo: null,
    stack: ["Apache Spark", "PySpark", "Spark MLlib", "Python"],
    overview:
      "A big-data pipeline project analyzing five years of daily price data across thousands of U.S. tickers, built to practice distributed data engineering at real scale.",
    problem:
      "Standard pandas workflows don't scale to hundreds of millions of rows. The goal was to build the feature engineering and modeling pipeline entirely in Spark, and be honest about what a simple model can and can't predict in markets.",
    approach: [
      "Processed 5 years of daily price data for 8,000+ U.S. tickers (~700MB) using Apache Spark.",
      "Engineered returns, moving averages, and rolling volatility using Spark window functions.",
      "Built a Logistic Regression model in Spark MLlib to predict next-day price direction.",
    ],
    results: [
      "Built and ran a full feature-engineering pipeline at ~700MB scale in Spark.",
      "Model reached 53.7% next-day-direction accuracy, a reminder that price direction is close to a random walk, and the real value was the pipeline, not the prediction.",
    ],
  },
  {
    key: "legal",
    color: "#A15FC0",
    tag: "RAG · LLM · Voice · Capstone · Aug–Dec 2025",
    title: "AI Legal Advisor",
    subtitle: "A RAG-based legal chatbot with a full voice interface",
    repo: "https://github.com/soumyabhate/ai-legal-advisor",
    stack: ["Python", "Streamlit", "Groq Llama 3.3", "MongoDB Atlas", "LangChain", "RAG"],
    overview:
      "A conversational assistant that lets someone ask plain-language legal questions and get answers grounded in real legal-text documents, not model hallucination, with a voice interface layered on top.",
    problem:
      "Legal documents are dense and hard to search. A keyword search misses context, and a raw LLM answer risks confidently inventing facts. The goal was an assistant that only answers from retrieved, cited source text, and handles sensitive documents responsibly.",
    approach: [
      "Built the interface in Streamlit, with Groq's Llama 3.3 70B as the reasoning engine.",
      "Indexed 470+ legal-text chunks in MongoDB Atlas vector search for grounded retrieval.",
      "Built a PDF Q&A pipeline with automated PII redaction across 10 categories of sensitive data.",
      "Added a full voice loop (speech-to-text and text-to-speech) for hands-free use.",
      "Deployed the finished app to Streamlit Cloud for public access.",
    ],
    results: [
      "470+ legal-text chunks embedded and retrievable via vector search.",
      "PII automatically redacted across 10 sensitive-data categories before processing.",
      "Fully deployed, voice-enabled app, not just a notebook demo.",
    ],
  },
  {
    key: "emocare",
    color: "#E2664B",
    tag: "Edge AI · LLM · Computer Vision · Aug–Dec 2025",
    title: "EmoCare",
    subtitle: "A personalized, voice-enabled wellness companion",
    repo: "https://github.com/soumyabhate/emocare-wellness-bot-jetson-nano",
    stack: ["Groq Llama 3.1", "ElevenLabs", "Streamlit", "OpenCV", "Jetson Nano"],
    overview:
      "A wellness companion, not a chatbot, that helps someone process emotions, find a healthy coping strategy, and reflect mindfully in a calm, non-judgmental space.",
    problem:
      "Most wellness apps are generic chat interfaces or heavyweight cloud services with real latency and privacy tradeoffs. The goal was something responsive that adapts to mood, and for camera-based mood detection, never sends a frame off the device.",
    approach: [
      "Built a mood-aware conversational core on Groq's Llama 3.1, with a calming custom Streamlit UI.",
      "Added a full voice mode (ElevenLabs STT/TTS) for hands-free, natural conversation.",
      "Let users upload journal notes as grounding context, with an auto-generated word cloud for emotional insight.",
      "Built an 'Action Compass' with gentle, mood-based nudges, plus a 60-second 'Calm Quest' mini-game.",
      "Extended with real-time facial emotion detection on an NVIDIA Jetson Nano, fully on-device via ONNX.",
    ],
    results: [
      "Real-time facial emotion detection running fully on-device, no camera frames ever leave the Jetson Nano.",
      "Combines conversation, journaling, a mini-game, and mood-based music into one coherent companion.",
      "Built and shipped as a full application for a graduate AI course, not a personal side experiment.",
    ],
  },
  {
    key: "fitness",
    color: "#2CA192",
    tag: "Applied Statistics · Feb–May 2026",
    title: "Fitness & Diabetes Prediction",
    subtitle: "Statistical analysis of lifestyle predictors using NHANES survey data",
    repo: "https://github.com/soumyabhate/physical-fitness-prediction",
    stack: ["Python", "ANOVA", "Logistic Regression", "Statistical Testing"],
    overview:
      "A rigorous statistical study of how activity level and lifestyle factors relate to fitness and diabetes status, using national health survey data.",
    problem:
      "It's easy to eyeball a correlation and call it a finding. The goal was to actually test whether the relationships were statistically significant, and build a properly validated predictive model rather than an over-fit one.",
    approach: [
      "Analyzed NHANES survey data covering 1,028 observations on lifestyle and health.",
      "Ran ANOVA and post-hoc tests (Tukey HSD, Bonferroni, Scheffé) across BMI groups.",
      "Built a logistic regression model with VIF checks to rule out multicollinearity.",
      "Used Welch's t-test to confirm activity level differs significantly by diabetes status.",
    ],
    results: [
      "Confirmed activity level differs significantly by diabetes status (p < 0.001).",
      "Built a multicollinearity-checked logistic regression model, not a black-box fit.",
      "Applied three separate post-hoc correction methods for rigor, not just one.",
    ],
  },
];

const tabs = ["overview", "problem", "approach", "results"] as const;

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<(typeof tabs)[number]>("overview");
  const Icon = icons[project.key as keyof typeof icons];

  return (
    <div className="min-w-0 rounded-2xl border border-border bg-card p-6 transition-all sm:p-8">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div className="flex items-start gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: project.color }}
          >
            <Icon className="h-[18px] w-[18px] text-white" />
          </div>
          <div>
            <span className="font-mono text-sm font-medium" style={{ color: project.color }}>
              {project.tag}
            </span>
            <h3 className="mt-1 font-display text-xl font-semibold text-text sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-text-muted">{project.subtitle}</p>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs hover:underline"
                style={{ color: project.color }}
              >
                View on GitHub →
              </a>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border px-2.5 py-1 font-mono text-xs"
                  style={{ borderColor: project.color, color: project.color }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <ChevronDown
          className={`mt-2 h-5 w-5 shrink-0 text-text-muted transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <div className="mt-5">
          <div className="flex gap-1 overflow-x-auto border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`shrink-0 rounded-t-lg px-4 py-2 font-mono text-xs capitalize transition-colors ${active === tab ? "bg-bg text-accent-blue" : "text-text-muted hover:text-text"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-4 min-h-[80px]">
            {active === "overview" && (
              <p className="text-sm leading-relaxed text-text-muted">{project.overview}</p>
            )}
            {active === "problem" && (
              <p className="text-sm leading-relaxed text-text-muted">{project.problem}</p>
            )}
            {active === "approach" && (
              <ul className="space-y-2">
                {project.approach.map((step) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-mint" />
                    {step}
                  </li>
                ))}
              </ul>
            )}
            {active === "results" && (
              <ul className="space-y-2">
                {project.results.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-text">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-mint" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

import Floral from "@/components/floral";
export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-14">
      <Floral variant="top-right" />
      <span className="font-mono text-xs text-accent-purple">04 — Projects</span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-text sm:text-4xl">
        Applied work, end to end
      </h2>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </section>
  );
}