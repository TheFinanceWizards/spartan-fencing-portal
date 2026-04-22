import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for Spartan Fencing Supplies. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
      />

      {/* Header */}
      <section className="bg-[#1c1c1e] py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">Privacy Policy</h1>
          <p className="text-white/50 text-sm mt-3">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm sm:prose max-w-none text-foreground/80 leading-relaxed space-y-8">

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">1. Introduction</h2>
            <p>
              Spartan Fencing Supplies LLC ("Spartan Fencing Supplies," "we," "us," or "our") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website <strong>spartanfencingsupplies.com</strong> or contact us for products and services.
              Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Contact Information:</strong> Full name, company name, email address, phone number, and mailing address.</li>
              <li><strong>Project Information:</strong> Details about your fencing project, product interests, quantities, and timelines.</li>
              <li><strong>Communications:</strong> Records of emails, phone calls, or text messages exchanged with us.</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website (collected via cookies and analytics tools).</li>
              <li><strong>SMS Consent:</strong> Your explicit consent to receive text message communications from us, along with the date and time consent was provided.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Respond to quote requests, inquiries, and customer service needs</li>
              <li>Process orders and coordinate product deliveries</li>
              <li>Send order updates, appointment reminders, and transactional notifications</li>
              <li>Send marketing and promotional messages <em>(only with your explicit consent)</em></li>
              <li>Improve our website, products, and services</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">4. Text Message (SMS) Communications</h2>
            <p>
              By providing your phone number and checking the applicable consent box on our contact or quote form,
              you expressly consent to receive text messages from Spartan Fencing Supplies. We operate two separate
              SMS programs:
            </p>
            <div className="mt-4 space-y-4">
              <div className="bg-muted/40 rounded-lg p-4 border border-border">
                <p className="font-bold text-foreground text-sm mb-1">Marketing Text Messages</p>
                <p className="text-sm">
                  Promotional offers, new product announcements, and special deals from Spartan Fencing Supplies.
                  Frequency may vary. Message and data rates may apply. Reply <strong>STOP</strong> to opt out at any
                  time. Reply <strong>HELP</strong> for assistance.
                </p>
              </div>
              <div className="bg-muted/40 rounded-lg p-4 border border-border">
                <p className="font-bold text-foreground text-sm mb-1">Transactional Text Messages</p>
                <p className="text-sm">
                  Order confirmations, delivery updates, appointment reminders, and other non-marketing service
                  notifications. Frequency may vary. Message and data rates may apply. Reply <strong>STOP</strong> to
                  opt out at any time. Reply <strong>HELP</strong> for assistance.
                </p>
              </div>
            </div>
            <p className="mt-4">
              <strong>To opt out</strong> of any text messages at any time, reply <strong>STOP</strong> to any message
              we send. You may also contact us at <a href="mailto:info@spartanfencingsupplies.com" className="text-primary hover:underline">info@spartanfencingsupplies.com</a> or
              call <a href="tel:+19543169889" className="text-primary hover:underline">(954) 316-9889</a>.
            </p>
            <p className="mt-2">
              <strong>Consent is not a condition of purchase.</strong> You are not required to consent to receive
              text messages to purchase products or services from us.
            </p>
            <p className="mt-2">
              <strong>No sharing with third parties:</strong> Your phone number and SMS consent will not be shared
              with, sold to, or used by any third party for their own marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">5. Sharing of Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Service Providers:</strong> Trusted vendors who assist in operating our website or conducting our business (e.g., email delivery services, CRM platforms), who are bound by confidentiality obligations.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or part of our business assets.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">6. Cookies &amp; Tracking Technologies</h2>
            <p>
              Our website may use cookies, web beacons, and similar tracking technologies to enhance your experience
              and gather usage analytics. You may disable cookies in your browser settings; however, doing so may
              affect the functionality of certain parts of our site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              policy, comply with legal obligations, resolve disputes, and enforce our agreements. SMS consent records
              are retained for a minimum of 4 years to demonstrate compliance with applicable regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information (subject to legal retention requirements)</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw SMS consent at any time by replying STOP</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at{" "}
              <a href="mailto:info@spartanfencingsupplies.com" className="text-primary hover:underline">
                info@spartanfencingsupplies.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">9. Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal
              information. However, no transmission over the internet or electronic storage method is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">10. Children's Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have inadvertently collected such
              information, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by
              posting the updated policy on this page with a revised effective date. Your continued use of our
              website after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">12. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="mt-3 space-y-1 text-sm">
              <p><strong>Spartan Fencing Supplies LLC</strong></p>
              <p>1531 S State Road 7, Fort Lauderdale, FL 33317</p>
              <p>Phone: <a href="tel:+19543169889" className="text-primary hover:underline">(954) 316-9889</a></p>
              <p>Email: <a href="mailto:info@spartanfencingsupplies.com" className="text-primary hover:underline">info@spartanfencingsupplies.com</a></p>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
              {" "}·{" "}
              <Link to="/contact" className="text-primary hover:underline">Contact Us</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
