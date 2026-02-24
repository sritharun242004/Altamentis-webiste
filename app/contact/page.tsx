"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+41", country: "CH", flag: "🇨🇭" },
  { code: "+46", country: "SE", flag: "🇸🇪" },
  { code: "+47", country: "NO", flag: "🇳🇴" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone
            ? `${formData.countryCode} ${formData.phone}`
            : "",
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", countryCode: "+91", phone: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please try again or email us directly.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Let's <span className="text-altamentis-sky">Transform</span> Your
            Business
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bridge SAP excellence with Agentic AI? Get in touch with
            our team of experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-altamentis-sky/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-altamentis-sky" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1 text-sm md:text-base">Address</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      H1-101, Shriram Shankari Towers
                      <br />
                      Chennai, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-altamentis-sky/10 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-altamentis-sky" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1 text-sm md:text-base">Email</h3>
                    <a
                      href="mailto:info@altamentis.in"
                      className="text-altamentis-sky hover:underline transition-colors text-sm md:text-base"
                    >
                      info@altamentis.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-altamentis-sky/10 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-altamentis-sky" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1 text-sm md:text-base">Phone</h3>
                    <a
                      href="tel:+919600653863"
                      className="text-altamentis-sky hover:underline transition-colors text-sm md:text-base"
                    >
                      +91 96006 53863
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-altamentis-cyan/10 to-altamentis-sky/10 border-2 border-altamentis-sky/30 rounded-2xl p-5 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Why Choose Altamentis?
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-altamentis-sky mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    Dedicated SAP-only firm with 20+ years expertise each
                  </p>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-altamentis-sky mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    Cutting-edge Agentic AI integration
                  </p>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-altamentis-sky mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    End-to-end capability from strategy to execution
                  </p>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-altamentis-sky mt-2 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">
                    Flexible engagement models tailored to your needs
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white border-gray-300 text-gray-900 focus:border-altamentis-sky focus:ring-altamentis-sky"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border-gray-300 text-gray-900 focus:border-altamentis-sky focus:ring-altamentis-sky"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-[110px] h-10 px-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-altamentis-sky focus:ring-1 focus:ring-altamentis-sky focus:outline-none text-sm"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 bg-white border-gray-300 text-gray-900 focus:border-altamentis-sky focus:ring-altamentis-sky"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-white border-gray-300 text-gray-900 focus:border-altamentis-sky focus:ring-altamentis-sky"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-altamentis-sky text-white font-bold hover:shadow-[0_0_20px_rgba(68,204,228,0.4)] transition-all duration-300 h-12 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitStatus && (
                  <p
                    className={`text-sm text-center ${
                      submitStatus.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                )}

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or</span>
                  </div>
                </div>

                <a
                  href="https://calendly.com/chandrus-altamentis/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-white border-2 border-altamentis-sky text-altamentis-sky font-bold rounded-md px-4 py-3 hover:bg-altamentis-sky/5 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </a>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Whether you need SAP S/4HANA implementation, BTP integration, or
            want to explore Agentic AI capabilities, our team is here to help
            you achieve your digital transformation goals.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
