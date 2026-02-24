import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: February 20, 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              AltaMentis Technology Solutions (&quot;AltaMentis&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at altamentis.in or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
            <p>When you use our contact form or communicate with us, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content and any information you choose to provide</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain technical information, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>IP address and approximate location</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited, time spent, and referring URLs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>To respond to your inquiries and provide the services you request</li>
              <li>To communicate with you about our SAP consulting and Agentic AI services</li>
              <li>To improve and maintain our website and services</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To analyse website usage and enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and delivering services (e.g., email delivery, hosting), subject to confidentiality obligations.</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process, or to protect the rights, safety, or property of AltaMentis or others.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable laws and regulations. Contact form submissions are retained for the duration of our business relationship and any subsequent legal retention period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict the processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@altamentis.in" className="text-altamentis-sky hover:underline">
                info@altamentis.in
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies</h2>
            <p>
              Our website may use essential cookies to ensure proper functionality. We do not use advertising or tracking cookies. Any analytics tools used collect anonymised data only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm space-y-1">
              <p className="font-semibold text-gray-900">AltaMentis Technology Solutions</p>
              <p>H1-101, Shriram Shankari Towers, Chennai, India</p>
              <p>
                Email:{" "}
                <a href="mailto:info@altamentis.in" className="text-altamentis-sky hover:underline">
                  info@altamentis.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919600653863" className="text-altamentis-sky hover:underline">
                  +91 96006 53863
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
