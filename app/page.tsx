"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Database,
  Sparkles,
  Users,
  Mail,
  CheckCircle2,
  Award,
  Target,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { HalfCircles, CirclePattern } from "@/components/geometric-shapes";

const mainServices = [
  {
    href: "/sap-services",
    icon: Database,
    title: "SAP Services",
    description: "Integrated digital core for your enterprise excellence",
    className: "col-span-1 md:col-span-2 row-span-1",
    gradient: "from-altamentis-sky/5 to-altamentis-cyan/5",
  },
  {
    href: "/agentic-ai",
    icon: Sparkles,
    title: "Agentic AI",
    description: "Autonomous intelligence for your enterprise",
    className: "col-span-1 md:col-span-2 row-span-1",
    gradient: "from-altamentis-cyan/5 to-altamentis-sky/5",
  },
];

const contactItems = [
  {
    href: "/team",
    icon: Users,
    title: "About Us",
    description: "Discover our expertise and experience",
    className: "col-span-1",
    gradient: "from-altamentis-sky/5 to-transparent",
  },
  {
    href: "/contact",
    icon: Mail,
    title: "Contact",
    description: "Let's transform your business",
    className: "col-span-1",
    gradient: "from-altamentis-cyan/5 to-transparent",
  },
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Dedicated SAP-only firm",
    description: "No distractions. We focus exclusively on SAP excellence.",
  },
  {
    icon: Award,
    title: "Senior-level expertise",
    description: "20+ years each. Experience you can trust.",
  },
  {
    icon: Zap,
    title: "End-to-end capability",
    description: "Strategy, architecture, implementation — all under one roof.",
  },
  {
    icon: CheckCircle2,
    title: "Focus on delivering value",
    description: "Your success is our success. Results-driven approach.",
  },
  {
    icon: Shield,
    title: "Flexible engagement models",
    description: "Tailored solutions that fit your unique needs.",
  },
  {
    icon: TrendingUp,
    title: "Proven track record",
    description: "Successful transformations across industries and scales.",
  },
];

const keyValuePropositions = [
  {
    icon: Zap,
    title: "Bespoke SAP S/4HANA implementations & migrations",
    description: "Customized implementation strategies and seamless migrations tailored to your specific enterprise needs.",
  },
  {
    icon: Database,
    title: "SAP BTP, integration & extension services",
    description: "Expert integration and extension services using SAP Business Technology Platform for a unified landscape.",
  },
  {
    icon: Shield,
    title: "SAP module-specific consulting (FI/CO, MM, SD)",
    description: "Specialized consulting across core SAP modules to optimize your business processes and financial workflows.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing SAP support & roadmap consultation",
    description: "Dedicated production support and strategic roadmap planning to ensure long-term system stability and growth.",
  },
  {
    icon: Users,
    title: "Trusted Team of SAP Professionals",
    description: "Leveraging 20+ years of senior-level experience to deliver excellence in every enterprise engagement.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-12 md:py-20 px-4">
        <CirclePattern />
        <div className="absolute top-20 right-0 w-64 h-64 bg-altamentis-sky/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-altamentis-cyan/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Empowering Your Enterprise with <br className="hidden lg:block" />
              <span className="text-altamentis-sky">SAP Excellence</span> &{" "}
              <span className="text-altamentis-sky">Agentic Intelligence</span>
            </h1>
            <p className="text-gray-900 text-sm md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              Altamentis Technologies specializes in delivering high-end SAP consulting and innovative Agentic AI solutions,
              bridging the gap between traditional enterprise systems and modern autonomous intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="bg-altamentis-sky text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 hover:shadow-[0_0_20px_rgba(68,204,228,0.4)] transition-all duration-300 inline-block text-center"
              >
                Get Started
              </Link>
              <Link
                href="/sap-services"
                className="bg-white text-gray-900 font-bold rounded-full px-6 md:px-8 py-3 md:py-4 border-2 border-gray-200 hover:border-altamentis-sky transition-all duration-300 inline-block text-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-8 max-w-7xl mx-auto"
          >
            {mainServices.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative overflow-hidden bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-altamentis-sky hover:shadow-lg transition-all duration-300 min-h-[180px] md:min-h-[200px] flex flex-col ${item.className}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 flex flex-col h-full">
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-altamentis-sky mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base flex-grow">{item.description}</p>
                </div>
              </Link>
            ))}
          </motion.div>

          <div className="py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-altamentis-sky uppercase border border-altamentis-sky/20 rounded-full bg-altamentis-sky/5">
                Key Value
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Key Value Propositions
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto px-4">
              {keyValuePropositions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-altamentis-sky/30 transition-all duration-300 group relative overflow-hidden flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)]"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-altamentis-sky/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative z-10 flex flex-col h-full text-left">
                    <div className="w-14 h-14 bg-altamentis-sky/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-altamentis-sky group-hover:text-white transition-colors duration-300 text-altamentis-sky">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20 max-w-7xl mx-auto px-4"
          >
            {contactItems.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-altamentis-sky hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-3 bg-altamentis-sky/10 w-fit rounded-lg mb-6 group-hover:bg-altamentis-sky/20 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-altamentis-sky" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-gradient-to-br from-altamentis-cyan/10 to-altamentis-sky/10 border-2 border-altamentis-sky/20 rounded-3xl p-6 md:p-12 max-w-7xl mx-auto"
          >
            <HalfCircles position="right" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-altamentis-sky/20 blur-xl rounded-full" />
                <Database className="relative w-12 h-12 md:w-16 md:h-16 text-altamentis-sky" />
              </div>
              <div className="h-1 w-12 md:w-16 bg-gradient-to-r from-altamentis-cyan to-altamentis-sky rounded-full" />
              <div className="relative">
                <div className="absolute inset-0 bg-altamentis-cyan/20 blur-xl rounded-full" />
                <Sparkles className="relative w-12 h-12 md:w-16 md:h-16 text-altamentis-sky" />
              </div>
            </div>
            <p className="text-center text-base md:text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Bridging the gap between traditional SAP Enterprise Services and
              modern Agentic AI. Your trusted partner in digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-altamentis-sky/5 to-transparent hidden lg:block" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-altamentis-sky">Altamentis</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Experience, expertise, and excellence in every engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 hover:border-altamentis-sky hover:shadow-lg transition-all duration-300 group min-h-[160px] flex flex-col"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-altamentis-sky/10 rounded-lg group-hover:bg-altamentis-sky/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-altamentis-sky" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
