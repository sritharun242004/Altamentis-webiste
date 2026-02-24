import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP Services",
  description:
    "Expert SAP S/4HANA consulting, implementation, migration, and BTP integration services. AltaMentis delivers end-to-end SAP transformation with 20+ years of enterprise expertise.",
  keywords: [
    "SAP S/4HANA Implementation",
    "SAP Consulting India",
    "SAP BTP Integration",
    "SAP Migration Services",
    "SAP AMS",
    "ECC to S/4HANA",
  ],
  alternates: {
    canonical: "https://altamentis.in/sap-services",
  },
  openGraph: {
    title: "SAP Services | AltaMentis Technologies",
    description:
      "Expert SAP S/4HANA consulting, implementation, and BTP integration services with 20+ years of enterprise expertise.",
    url: "https://altamentis.in/sap-services",
  },
};

export default function SAPServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
