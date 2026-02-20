import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: February 20, 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of AltaMentis Technology Solutions (OPC) Private Limited (&quot;AltaMentis&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) at altamentis.in, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
            <p>
              AltaMentis provides SAP consulting, SAP S/4HANA implementation, SAP BTP integration, Agentic AI solutions, and related enterprise technology services. The scope, terms, and deliverables of any engagement will be defined in a separate Statement of Work (SOW) or service agreement between AltaMentis and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Infringe the rights of any third party</li>
              <li>Restrict or inhibit anyone else from using the website</li>
              <li>Attempt to gain unauthorised access to any part of the website or its systems</li>
              <li>Introduce viruses, malware, or any harmful code</li>
              <li>Collect or harvest any information from the website without our consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of AltaMentis Technology Solutions (OPC) Private Limited and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Confidentiality</h2>
            <p>
              Any information shared by you through our contact form or during consultations may be treated as confidential. Similarly, any proprietary methodologies, tools, or frameworks shared by AltaMentis during engagements are confidential and may not be disclosed without written authorisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. AltaMentis makes no warranties, express or implied, regarding the accuracy, completeness, reliability, or availability of the website or the information contained herein.
            </p>
            <p className="mt-2">
              While we strive to keep the information on this website current, we do not warrant that the content is free from errors or omissions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, AltaMentis and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or our services, including but not limited to loss of data, revenue, or business opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites or services that are not owned or controlled by AltaMentis. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless AltaMentis, its directors, employees, and agents from and against any claims, damages, losses, or expenses (including legal fees) arising out of your use of the website or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm space-y-1">
              <p className="font-semibold text-gray-900">AltaMentis Technology Solutions (OPC) Private Limited</p>
              <p>H1-101, Shriram Shankari Towers, Chennai, India</p>
              <p>
                Email:{" "}
                <a href="mailto:info@altamentis.in" className="text-altamentis-sky hover:underline">
                  info@altamentis.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+917200106280" className="text-altamentis-sky hover:underline">
                  +91 72001 06280
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
