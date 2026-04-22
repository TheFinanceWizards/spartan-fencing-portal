import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of service for Spartan Fencing Supplies. Review the terms governing your use of our website and services."
        canonical="/terms"
      />

      {/* Header */}
      <section className="bg-[#1c1c1e] py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">Terms of Service</h1>
          <p className="text-white/50 text-sm mt-3">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-foreground/80 leading-relaxed">

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website <strong>spartanfencingsupplies.com</strong> (the "Site") or contacting
              Spartan Fencing Supplies LLC ("Spartan Fencing Supplies," "we," "us," or "our"), you agree to be bound
              by these Terms of Service. If you do not agree, please do not use our Site or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">2. Products &amp; Services</h2>
            <p>
              Spartan Fencing Supplies sells fencing materials, hardware, and related supplies to contractors,
              builders, and property owners. All product descriptions, pricing, and availability are subject to
              change without notice. We reserve the right to refuse service, cancel orders, or limit quantities
              at our discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">3. Quote Requests</h2>
            <p>
              Submitting a quote request through our website does not constitute a binding purchase order or
              guarantee of pricing. Quotes are estimates only and are valid for 30 days from the date issued
              unless otherwise stated in writing. Final pricing is confirmed at the time of order placement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">4. SMS &amp; Text Message Program</h2>
            <p>
              By providing your mobile phone number and checking the applicable consent box on our contact form,
              you agree to receive text messages from Spartan Fencing Supplies. Our SMS programs include:
            </p>
            <div className="mt-4 space-y-4">
              <div className="bg-muted/40 rounded-lg p-4 border border-border">
                <p className="font-bold text-foreground text-sm mb-1">Marketing Messages</p>
                <p className="text-sm">
                  Promotional offers, product announcements, and special deals. Frequency may vary.
                  Message and data rates may apply. Reply <strong>STOP</strong> to opt out.
                  Reply <strong>HELP</strong> for assistance.
                </p>
              </div>
              <div className="bg-muted/40 rounded-lg p-4 border border-border">
                <p className="font-bold text-foreground text-sm mb-1">Transactional Messages</p>
                <p className="text-sm">
                  Order updates, delivery notifications, appointment reminders, and service-related
                  communications. Frequency may vary. Message and data rates may apply.
                  Reply <strong>STOP</strong> to opt out. Reply <strong>HELP</strong> for assistance.
                </p>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-1 mt-4 text-sm">
              <li>You may opt out at any time by replying <strong>STOP</strong> to any message.</li>
              <li>Consent to receive text messages is not required as a condition of purchase.</li>
              <li>Your phone number will not be shared with third parties for their marketing purposes.</li>
              <li>Supported carriers are not liable for delayed or undelivered messages.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">5. Intellectual Property</h2>
            <p>
              All content on this Site — including text, images, logos, graphics, and product descriptions —
              is the property of Spartan Fencing Supplies LLC or its content suppliers and is protected by
              applicable intellectual property laws. You may not reproduce, distribute, or create derivative
              works without our express written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">6. Disclaimer of Warranties</h2>
            <p>
              THE SITE AND ALL INFORMATION, CONTENT, AND SERVICES PROVIDED THROUGH IT ARE PROVIDED "AS IS"
              WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT
              THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">7. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, SPARTAN FENCING SUPPLIES LLC SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE
              OF OR INABILITY TO USE OUR SITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
              OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC
              PRODUCT OR SERVICE GIVING RISE TO THE CLAIM.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">8. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the
              State of Florida, without regard to its conflict of law provisions. Any disputes arising under
              these terms shall be subject to the exclusive jurisdiction of the courts located in Broward
              County, Florida.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">9. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will be posted on
              this page with a revised effective date. Your continued use of the Site after changes are
              posted constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground uppercase mb-3">10. Contact Us</h2>
            <p>Questions about these Terms? Contact us:</p>
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
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              {" "}·{" "}
              <Link to="/contact" className="text-primary hover:underline">Contact Us</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
