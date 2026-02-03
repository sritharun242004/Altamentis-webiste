"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLogs = [
  { text: "Initializing Agent...", delay: 0 },
  { text: "✓ Agent initialized successfully", delay: 800 },
  { text: "Connecting to SAP S/4HANA...", delay: 1600 },
  { text: "✓ Connected to SAP instance", delay: 2400 },
  { text: "Analyzing Supply Chain Data...", delay: 3200 },
  { text: "├─ Processing 10,000+ transactions", delay: 4000 },
  { text: "├─ Identifying bottlenecks", delay: 4800 },
  { text: "└─ Analyzing delivery patterns", delay: 5600 },
  { text: "✓ Analysis complete", delay: 6400 },
  { text: "Optimization Found: Re-routing logistics", delay: 7200 },
  { text: "├─ Estimated cost savings: $142,000/month", delay: 8000 },
  { text: "├─ Delivery time improvement: 23%", delay: 8600 },
  { text: "└─ Generating implementation plan...", delay: 9200 },
  { text: "✓ Plan ready for review", delay: 10000 },
  { text: "Agent standing by for next task", delay: 10800 },
];

export function SimulationTerminal() {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= terminalLogs.length) {
      const resetTimer = setTimeout(() => {
        setDisplayedLogs([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(() => {
      setDisplayedLogs((prev) => [...prev, terminalLogs[currentIndex].text]);
      setCurrentIndex((prev) => prev + 1);
    }, terminalLogs[currentIndex].delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="bg-gray-900 border-2 border-gray-700 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
      <div className="bg-gray-800 px-3 md:px-4 py-2 md:py-3 border-b border-gray-700 flex items-center space-x-2">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
        <span className="text-gray-300 text-xs md:text-sm ml-2 md:ml-4 font-mono truncate">
          agentic-ai-terminal
        </span>
      </div>
      <div className="p-3 md:p-6 h-64 md:h-96 overflow-y-auto font-mono text-xs md:text-sm bg-gray-950">
        {displayedLogs.map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`mb-2 ${
              log.includes("✓")
                ? "text-green-400"
                : log.includes("├") || log.includes("└")
                ? "text-gray-400"
                : log.includes("Optimization") ||
                  log.includes("cost savings") ||
                  log.includes("improvement")
                ? "text-altamentis-sky"
                : "text-gray-300"
            }`}
          >
            <span className="text-altamentis-sky mr-2">$</span>
            {log}
            {index === displayedLogs.length - 1 && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-altamentis-sky ml-1"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
