"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Eye, Cog, TrendingUp, Shield, Target, BarChart3, Workflow, CheckCircle2 } from "lucide-react";
import { SimulationTerminal } from "@/components/simulation-terminal";

const aiPrinciples = [
  {
    title: "To improve decision quality",
    description: "AI-driven insights that enhance strategic and operational decision-making across the enterprise.",
  },
  {
    title: "To automate complexity",
    description: "Intelligent automation layered on stable architectures, reducing manual effort without adding risk.",
  },
  {
    title: "To uncover hidden operational value",
    description: "Predictive analytics that reveal patterns, inefficiencies, and opportunities in your SAP data.",
  },
];

const appliedIntelligence = [
  {
    icon: BarChart3,
    title: "AI-Driven Analytics on SAP Data",
    description: "Deep analysis of your SAP data to uncover patterns, trends, and actionable insights that drive business value.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation for SAP Processes",
    description: "Smart automation layered deliberately on stable SAP architectures—not to replace, but to amplify.",
  },
  {
    icon: Brain,
    title: "Decision Intelligence in Workflows",
    description: "AI embedded into business workflows to support faster, more confident decision-making.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Insights Aligned to KPIs",
    description: "Forward-looking intelligence that connects directly to your business objectives and performance metrics.",
  },
];

const capabilities = [
  {
    icon: Eye,
    title: "Intelligent Process Optimization",
    description: "Continuous analysis and optimization of SAP business processes using AI-driven insights.",
  },
  {
    icon: Target,
    title: "Predictive Insights on SAP Data",
    description: "Anticipate issues, identify opportunities, and make data-driven decisions with confidence.",
  },
  {
    icon: Cog,
    title: "Automation on Stable Architectures",
    description: "Intelligence layered thoughtfully on resilient SAP foundations—not retrofitted haphazardly.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with full audit trails and compliance built into every solution.",
  },
  {
    icon: Zap,
    title: "Value Acceleration",
    description: "Identify cost savings and efficiency gains across your operations with measurable outcomes.",
  },
  {
    icon: Brain,
    title: "SAP-Native Integration",
    description: "Seamless integration with your existing SAP S/4HANA and ECC infrastructure.",
  },
];

export default function AgenticAIPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-sm md:text-base text-altamentis-sky font-semibold tracking-wider uppercase mb-3">
            Intelligence-Enhanced
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Applied Intelligence <span className="text-altamentis-sky">on SAP</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Artificial intelligence introduced deliberately, not decoratively where it strengthens
            SAP outcomes and delivers measurable enterprise value.
          </p>
          <div className="bg-gradient-to-br from-altamentis-cyan/10 to-altamentis-sky/10 border-2 border-altamentis-sky/20 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">
              AI is a means, not the message.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              We apply AI only where it amplifies SAP not to replace the core, but to elevate it.
            </p>
          </div>
        </motion.div>

        {/* AI Principles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Intelligence That <span className="text-altamentis-sky">Serves the Enterprise</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-8 md:mb-10 max-w-2xl mx-auto">
            We apply AI deliberately and with discipline:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {aiPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:border-altamentis-sky transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-altamentis-sky flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-gray-900">{principle.title}</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base pl-9">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Live Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6 md:mb-8">
            See It in <span className="text-altamentis-sky">Action</span>
          </h2>
          <SimulationTerminal />
          <p className="text-center text-gray-600 mt-3 md:mt-4 text-xs md:text-sm px-2">
            Live demonstration of an AI agent analyzing SAP data and identifying optimization opportunities
          </p>
        </motion.div>

        {/* Applied Intelligence Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Applied Intelligence <span className="text-altamentis-sky">Services</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            AI capabilities designed specifically for SAP environments introduced with discipline, measured by outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {appliedIntelligence.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:border-altamentis-sky hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-altamentis-sky/10 rounded-xl group-hover:bg-altamentis-sky/20 transition-colors flex-shrink-0">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-altamentis-sky" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-20 border-2 border-gray-200"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            Core <span className="text-altamentis-sky">Capabilities</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-xl p-4 md:p-6 hover:border-altamentis-sky hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 md:p-4 bg-altamentis-sky/10 rounded-full mb-3 md:mb-4 group-hover:bg-altamentis-sky/20 transition-colors duration-300">
                    <capability.icon className="w-6 h-6 md:w-8 md:h-8 text-altamentis-sky" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-10 mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Our <span className="text-altamentis-sky">Approach</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Most AI implementations focus on technology first. We focus on <strong>outcomes first</strong>.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              We recognize that SAP systems are mission-critical. Intelligence is layered thoughtfully on stable
              architectures, with clear governance, and always in service of the enterprise's real objectives.
              Not every problem needs AI. But where it does, we apply it with discipline.
            </p>
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
          <div className="bg-gradient-to-r from-altamentis-cyan/10 to-altamentis-sky/10 border-2 border-altamentis-sky/30 rounded-2xl p-6 md:p-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Ready to Apply Intelligence to Your SAP Landscape?
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-5 md:mb-6 max-w-2xl mx-auto">
              Discover how applied intelligence can enhance your SAP operations—with the discipline
              and depth your enterprise deserves.
            </p>
            <a
              href="https://cal.com/altamentis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-altamentis-sky text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base hover:shadow-[0_0_20px_rgba(68,204,228,0.4)] transition-all duration-300"
            >
              Explore Possibilities
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
