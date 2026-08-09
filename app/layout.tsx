import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soumyabhate.dev"),
  title: "Soumya Bhate — Data Scientist & ML Engineer",
  description:
    "Data Scientist and ML Engineer specializing in end-to-end pipelines, applied statistics, and LLM-powered applications.",
  openGraph: {
    title: "Soumya Bhate — Data Scientist & ML Engineer",
    description:
      "Data Scientist and ML Engineer specializing in end-to-end pipelines, applied statistics, and LLM-powered applications.",
    url: "https://soumyabhate.dev",
    siteName: "Soumya Bhate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumya Bhate — Data Scientist & ML Engineer",
    description:
      "Data Scientist and ML Engineer specializing in end-to-end pipelines, applied statistics, and LLM-powered applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}