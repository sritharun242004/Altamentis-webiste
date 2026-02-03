"use client";

import { motion } from "framer-motion";
import {
  Server,
  Workflow,
  Package,
  Settings,
  ArrowRight,
  CheckCircle2,
  Database,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { CirclePattern } from "@/components/geometric-shapes";

const sapCoreServices = [
  {
    id: "s4hana",
    icon: Server,
    title: "SAP S/4HANA Transformation",
    description: "Complete transformation and migration to intelligent ERP",
    details: [
      "Greenfield implementation—start fresh with clean, modern SAP S/4HANA",
      "System conversion—migrate your existing SAP ECC to S/4HANA",
      "Selective data transition—choose what data to migrate strategically",
      "Business process optimization during migration",
      "Custom code remediation and simplification",
    ],
  },
  {
    id: "ecc",
    icon: Database,
    title: "SAP ECC Modernization",
    description: "Optimize and stabilize your existing SAP landscape",
    details: [
      "Performance tuning and system optimization",
      "Technical debt reduction programs",
      "Data integrity and quality improvement",
      "Process harmonization and standardization",
      "Preparation for future S/4HANA migration",
    ],
  },
  {
    id: "ams",
    icon: Settings,
    title: "SAP AMS & Stabilization",
    description: "Application management with focus on stability and governance",
    details: [
      "Continuous optimization of SAP landscapes",
      "Patch management and system updates",
      "24/7 support options available",
      "User training and change management",
      "Proactive monitoring and incident management",
    ],
  },
  {
    id: "modules",
    icon: Package,
    title: "Module Expertise",
    description: "Deep expertise across core SAP modules",
    details: [
      "FI/CO—Financial Accounting & Controlling excellence",
      "MM—Materials Management optimization",
      "SD—Sales & Distribution effectiveness",
      "PP—Production Planning efficiency",
      "Cross-module integration and harmonization",
    ],
  },
];

const enterpriseOutcomes = [
  {
    icon: TrendingUp,
    title: "Reduced Operational Friction",
    description: "Streamlined processes that eliminate bottlenecks and inefficiencies across your SAP landscape.",
  },
  {
    icon: Shield,
    title: "Improved Decision Confidence",
    description: "Clean data, clear insights, and reliable systems that support strategic decision-making.",
  },
  {
    icon: Zap,
    title: "Measurable Efficiency Gains",
    description: "Quantifiable improvements in performance, cost savings, and operational velocity.",
  },
  {
    icon: Database,
    title: "Long-term System Sustainability",
    description: "Future-ready architectures that scale with your business and adapt to change.",
  },
];

const processSteps = [
  {
    title: "Assess",
    description: "Deep dive into your current state, data integrity, and process interdependencies",
  },
  {
    title: "Design",
    description: "Architect the optimal solution with focus on stability and scalability",
  },
  {
    title: "Execute",
    description: "Implement with precision, discipline, and minimal business disruption",
  },
  {
    title: "Partner",
    description: "Ongoing support, continuous improvement, and knowledge transfer",
  },
];

export default function SAPServicesPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4 relative overflow-hidden">
      <CirclePattern />
      <div className="absolute top-0 right-0 w-96 h-96 bg-altamentis-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-sm md:text-base text-altamentis-sky font-semibold tracking-wider uppercase mb-3">
            SAP-Led by Design
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            SAP Core <span className="text-altamentis-sky">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            We engage with enterprises across the full SAP lifecycle strategy, implementation,
            migration, optimization, and application management ensuring that core systems are
            resilient, compliant, and future ready.
          </p>
          <div className="bg-altamentis-sky/10 border border-altamentis-sky/30 rounded-xl p-4 md:p-6 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 font-medium">
              Core systems deserve respect. We prioritize stability, governance, and continuity before acceleration.
            </p>
          </div>
        </motion.div>

        {/* SAP Core Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            SAP Core <span className="text-altamentis-sky">Transformation & Optimization</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {sapCoreServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-altamentis-sky hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-5">
                  <div className="p-3 md:p-4 bg-altamentis-sky/10 rounded-xl group-hover:bg-altamentis-sky/20 transition-colors duration-300 flex-shrink-0">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-altamentis-sky" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 border-t border-gray-100 pt-5">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-altamentis-sky flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-base">{detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise Outcomes Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-6 md:p-12 border-2 border-gray-200 mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Enterprise <span className="text-altamentis-sky">Outcomes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            Measurable results that matter to the enterprise not surface level digitization, but sustainable, intelligent operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {enterpriseOutcomes.map((outcome, index) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 md:p-6 border-2 border-gray-200 hover:border-altamentis-sky transition-colors text-center group"
              >
                <div className="w-12 h-12 bg-altamentis-sky/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-altamentis-sky/20 transition-colors">
                  <outcome.icon className="w-6 h-6 text-altamentis-sky" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{outcome.title}</h3>
                <p className="text-sm text-gray-600">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-12 border-2 border-gray-200 relative mb-12 md:mb-20"
        >
          <div className="absolute top-4 right-4 w-24 h-24 bg-altamentis-sky/10 rounded-full blur-2xl" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            Our <span className="text-altamentis-sky">Process</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-altamentis-sky/10 border-2 border-altamentis-sky flex items-center justify-center mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl font-bold text-altamentis-sky">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)]">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-altamentis-sky mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-altamentis-cyan/10 to-altamentis-sky/10 border-2 border-altamentis-sky/30 rounded-2xl p-6 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your SAP Landscape?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Let's discuss how our proven SAP expertise can drive value for your organization—with
              the discipline and depth your core systems deserve.
            </p>
            <a
              href="https://cal.com/altamentis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-altamentis-sky text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 hover:shadow-[0_0_20px_rgba(68,204,228,0.4)] transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
