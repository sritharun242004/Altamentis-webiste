"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AltamentisLogo } from "./logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sap-services", label: "SAP Services" },
  { href: "/agentic-ai", label: "Agentic AI" },
  { href: "/team", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
              <div className="relative transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(68,204,228,0.6)]">
                <AltamentisLogo className="w-9 h-9 md:w-10 md:h-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  AltaMentis <span className="text-altamentis-sky">Technologies</span>
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">
                  Elevating Enterprise Intelligence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive
                        ? "text-altamentis-sky"
                        : "text-gray-700 hover:text-altamentis-sky"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-altamentis-sky/10 border border-altamentis-sky/30 rounded-lg"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <a
              href="https://calendly.com/chandrus-altamentis/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-altamentis-sky text-white font-bold rounded-full px-6 py-2 hover:shadow-[0_0_20px_rgba(68,204,228,0.4)] transition-all duration-300"
            >
              Schedule a Call
            </a>

            {/* Mobile Menu Button - Touch-friendly size */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 -mr-2 text-altamentis-sky rounded-lg hover:bg-altamentis-sky/10 active:bg-altamentis-sky/20 transition-colors touch-manipulation"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[min(300px,85vw)] bg-white z-50 md:hidden shadow-xl safe-right"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 safe-top">
                  <span className="text-lg font-bold text-gray-900">Menu</span>
                  <button
                    onClick={closeMenu}
                    className="p-3 -mr-2 text-gray-500 hover:text-altamentis-sky rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`block px-6 py-4 text-base font-medium transition-colors touch-manipulation ${isActive
                              ? "text-altamentis-sky bg-altamentis-sky/10 border-r-4 border-altamentis-sky"
                              : "text-gray-700 hover:text-altamentis-sky hover:bg-gray-50 active:bg-gray-100"
                            }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile Menu CTA */}
                <div className="p-4 border-t border-gray-200 safe-bottom">
                  <a
                    href="https://calendly.com/chandrus-altamentis/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="block w-full text-center bg-altamentis-sky text-white font-bold rounded-full px-6 py-4 hover:shadow-[0_0_20px_rgba(68,204,228,0.4)] active:scale-[0.98] transition-all duration-300 touch-manipulation"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
