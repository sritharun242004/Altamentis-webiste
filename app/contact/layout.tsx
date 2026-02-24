import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AltaMentis Technologies for SAP consulting, S/4HANA implementation, and Agentic AI solutions. Located in Chennai, India.",
  keywords: [
    "Contact AltaMentis",
    "SAP Consulting Inquiry",
    "Enterprise AI Contact",
    "SAP Services Chennai",
  ],
  alternates: {
    canonical: "https://altamentis.in/contact",
  },
  openGraph: {
    title: "Contact Us | AltaMentis Technologies",
    description:
      "Get in touch for SAP consulting, S/4HANA implementation, and Agentic AI solutions.",
    url: "https://altamentis.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
