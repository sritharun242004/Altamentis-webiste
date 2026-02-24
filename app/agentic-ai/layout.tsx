import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic AI",
  description:
    "Innovative Agentic AI solutions for enterprise automation. AltaMentis integrates autonomous AI with SAP systems to enhance decision-making, automate processes, and unlock operational value.",
  keywords: [
    "Agentic AI",
    "Enterprise AI Solutions",
    "AI Automation",
    "SAP AI Integration",
    "Autonomous AI",
    "AI for Business",
  ],
  alternates: {
    canonical: "https://altamentis.in/agentic-ai",
  },
  openGraph: {
    title: "Agentic AI | AltaMentis Technologies",
    description:
      "Autonomous AI solutions integrated with SAP systems to enhance decision-making and automate enterprise processes.",
    url: "https://altamentis.in/agentic-ai",
  },
};

export default function AgenticAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
