import Link from "next/link";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { AltamentisLogoWhite } from "./logo";

// X (formerly Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#44cce4] via-[#44cce4]/90 to-[#acf4f0]/80 text-white overflow-hidden safe-bottom">
      {/* Large watermark text - responsive sizing */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden flex justify-center">
        <div
          className="text-[12vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw] font-black leading-none tracking-tight text-white text-center whitespace-nowrap"
          style={{
            opacity: 0.45,
            transform: 'translateY(35%)',
          }}
        >
          AltaMentis
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 md:space-x-3">
              <AltamentisLogoWhite className="w-9 h-9 md:w-10 md:h-10" />
              <span className="text-xl md:text-2xl font-bold text-white">
                AltaMentis Technologies
              </span>
            </div>
            <p className="text-white/90 text-base leading-relaxed max-w-md">
              Trusted. Transparent. Certified. Your smarter way to transform SAP landscapes with the autonomous power of Agentic AI. 20+ years of trust intelligence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/90">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">H1-101, Shriram Shankari Towers, Chennai</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:admin@altamentis.in"
                  className="hover:text-white transition-colors text-sm"
                >
                  admin@altamentis.in
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+917200106280"
                  className="hover:text-white transition-colors text-sm"
                >
                  +91 72001 06280
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 md:mb-6 text-lg">Services</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/sap-services"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  SAP S/4HANA
                </Link>
              </li>
              <li>
                <Link
                  href="/sap-services"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  SAP BTP Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/agentic-ai"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  Applied Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/sap-services"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  Module Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/sap-services"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  Support & Optimization
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 md:mb-6 text-lg">Company</h3>
            <ul className="space-y-1 mb-6 md:mb-8">
              <li>
                <Link
                  href="/team"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/sap-services"
                  className="text-white/90 hover:text-white active:text-white/70 transition-colors text-sm block py-2 touch-manipulation"
                >
                  Case Studies
                </Link>
              </li>
            </ul>

            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Follow us on</h3>
              <div className="flex space-x-3">
                <a
                  href="mailto:admin@altamentis.in"
                  className="w-11 h-11 rounded-lg bg-white/20 hover:bg-white/30 active:bg-white/40 flex items-center justify-center transition-colors touch-manipulation"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-white/20 hover:bg-white/30 active:bg-white/40 flex items-center justify-center transition-colors touch-manipulation"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-white/20 hover:bg-white/30 active:bg-white/40 flex items-center justify-center transition-colors touch-manipulation"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-5 h-5 text-white" />
                </a>
                <a
                  href="tel:+917200106280"
                  className="w-11 h-11 rounded-lg bg-white/20 hover:bg-white/30 active:bg-white/40 flex items-center justify-center transition-colors touch-manipulation"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="#" className="text-white/90 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-white/90 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-white/90 text-xs md:text-sm text-center">
            ©{new Date().getFullYear()} ALTAMENTIS TECHNOLOGY SOLUTIONS (OPC) PRIVATE LIMITED . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
