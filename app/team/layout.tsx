import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the AltaMentis team — senior SAP consultants and AI specialists with 20+ years of enterprise experience delivering transformative solutions across industries.",
  keywords: [
    "SAP Consultants India",
    "Enterprise AI Team",
    "SAP Experts Chennai",
    "AltaMentis Team",
  ],
  alternates: {
    canonical: "https://altamentis.in/team",
  },
  openGraph: {
    title: "About Us | AltaMentis Technologies",
    description:
      "Senior SAP consultants and AI specialists with 20+ years of enterprise experience.",
    url: "https://altamentis.in/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
