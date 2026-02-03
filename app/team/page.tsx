"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, TrendingUp, Users, Target, Building2, Briefcase } from "lucide-react";

const EXPERTISE_AREAS = [
  {
    icon: Zap,
    title: "SAP Core Transformation",
    description: "S/4HANA transformation, ECC modernization, AMS, and landscape stabilization. We ensure core systems are resilient, compliant, and future-ready."
  },
  {
    icon: Shield,
    title: "Applied Intelligence on SAP",
    description: "AI-driven insights, intelligent automation, and decision support—introduced deliberately, not decoratively, where it strengthens SAP outcomes."
  },
  {
    icon: TrendingUp,
    title: "Enterprise Outcomes",
    description: "Operational efficiency, decision confidence, and long-term system resilience. Measurable results that matter to the enterprise."
  }
];

const PHILOSOPHY = [
  "True intelligence comes from understanding complexity, not bypassing it",
  "Sustainable transformation requires discipline, not disruption",
  "Enterprises benefit most from partners who think deeply, not loudly",
  "AI does not replace the core; it amplifies it",
  "Core systems deserve respect—stability and governance come first"
];

const WHO_WE_WORK_WITH = [
  { icon: Users, title: "CIOs and CTOs" },
  { icon: Target, title: "Enterprise Transformation Leaders" },
  { icon: Building2, title: "SAP Program Owners" },
  { icon: Briefcase, title: "Operations and Finance Leadership" }
];

const STRENGTHS = [
  "60+ combined years of SAP consulting experience",
  "100% senior-level consultants on every engagement",
  "Full SAP lifecycle: strategy, implementation, migration, optimization",
  "Deep technical knowledge with strategic business acumen",
  "Focus on knowledge transfer and client enablement",
  "Aligned with SAP SE standards, roadmaps, and best practices"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
        >
          <p className="text-sm md:text-base text-altamentis-sky font-semibold tracking-wider uppercase mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            AltaMentis
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
            Elevated Intelligence for Core Enterprise Systems
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Alta Mentis is a SAP first consulting and services firm that helps enterprises modernize,
            stabilize, and extract long term value from their core SAP landscape with applied
            intelligence layered where it delivers measurable impact.
          </p>
        </motion.div>

        {/* Positioning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-altamentis-cyan/10 to-altamentis-sky/10 border-2 border-altamentis-sky/20 rounded-3xl p-8 md:p-12 mb-12 md:mb-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-altamentis-sky">Position</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
              SAP is the foundation. Intelligence is the amplifier.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We believe SAP transformations succeed or fail at the core. AI does not replace that core; it amplifies it.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our work focuses on deep understanding of enterprise processes, data, and decision flows,
              enabling organizations to move beyond surface-level digitization into sustainable, intelligent operations.
            </p>
          </div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            What We <span className="text-altamentis-sky">Do</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {EXPERTISE_AREAS.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-altamentis-sky transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-altamentis-sky/10 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:bg-altamentis-sky/20 transition-colors">
                  <area.icon className="w-6 h-6 md:w-7 md:h-7 text-altamentis-sky" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-20 border-2 border-gray-200"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our <span className="text-altamentis-sky">Philosophy</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-8 font-medium">
            Depth creates value. Elevation creates clarity.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {PHILOSOPHY.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 md:gap-4 bg-white p-4 rounded-xl border border-gray-200"
              >
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-altamentis-sky flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Work With & Why Choose Us Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20"
        >
          {/* Who We Work With */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Who We <span className="text-altamentis-sky">Work With</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Organizations that value precision, accountability, and long-term thinking.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHO_WE_WORK_WITH.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-altamentis-sky transition-colors"
                >
                  <div className="p-2 bg-altamentis-sky/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-altamentis-sky" />
                  </div>
                  <span className="text-base font-medium text-gray-800">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why <span className="text-altamentis-sky">Choose Us</span>
            </h2>
            <div className="space-y-3">
              {STRENGTHS.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-altamentis-sky flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700">{strength}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20"
        >
          <div className="p-5 md:p-6 bg-white border-2 border-gray-200 rounded-xl text-center hover:border-altamentis-sky transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-altamentis-sky mb-2">60+</div>
            <p className="text-xs md:text-sm text-gray-600">Combined Years Experience</p>
          </div>
          <div className="p-5 md:p-6 bg-white border-2 border-gray-200 rounded-xl text-center hover:border-altamentis-sky transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-altamentis-sky mb-2">100%</div>
            <p className="text-xs md:text-sm text-gray-600">Senior-Level Consultants</p>
          </div>
          <div className="p-5 md:p-6 bg-white border-2 border-gray-200 rounded-xl text-center hover:border-altamentis-sky transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-altamentis-sky mb-2">20+</div>
            <p className="text-xs md:text-sm text-gray-600">Years Each Professional</p>
          </div>
          <div className="p-5 md:p-6 bg-white border-2 border-gray-200 rounded-xl text-center hover:border-altamentis-sky transition-colors">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-altamentis-sky mb-2">E2E</div>
            <p className="text-xs md:text-sm text-gray-600">Full SAP Lifecycle</p>
          </div>
        </motion.div>

        {/* SAP Ecosystem Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-10 mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Role in the <span className="text-altamentis-sky">SAP Ecosystem</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            We work within the SAP ecosystem, aligned to the standards, roadmaps, and best practices
            governed by SAP SE. Our role is not to replace SAP's vision—but to execute it intelligently,
            responsibly, and at enterprise scale.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-altamentis-cyan/10 to-altamentis-sky/10 border-2 border-altamentis-sky/30 rounded-2xl p-6 md:p-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Ready to Partner with AltaMentis?
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-5 md:mb-6 max-w-2xl mx-auto">
              Work with experienced professionals who understand your challenges
              and deliver lasting business value through disciplined transformation.
            </p>
            <a
              href="https://cal.com/altamentis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-altamentis-sky text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base hover:shadow-[0_0_20px_rgba(68,204,228,0.4)] transition-all duration-300"
            >
              Schedule a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
