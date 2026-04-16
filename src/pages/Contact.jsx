import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/contact/QuoteForm";
import SEO from "@/components/SEO";

const CONTACT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://spartan-fencing-portal.vercel.app/contact",
  "name": "Contact Spartan Fencing Supplies",
  "description": "Request a quote or get in touch with Spartan Fencing Supplies. We serve contractors and property owners across South Florida.",
  "mainEntity": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Spartan Fencing Supplies",
    "telephone": "+19543169889",
    "email": "info@spartanfencingsupplies.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1531 S State Road 7",
      "addressLocality": "Fort Lauderdale",
      "addressRegion": "FL",
      "postalCode": "33317",
      "addressCountry": "US"
    }
  }
};

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "(954) 316-9889", href: "tel:+19543169889" },
  { icon: Mail, label: "Email", value: "info@spartanfencingsupplies.com", href: "mailto:info@spartanfencingsupplies.com" },
  { icon: MapPin, label: "Location", value: "1531 S State Road 7\nFort Lauderdale, FL 33317", href: null },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 7:30am–3:30pm\nSat: 7:30am–12:30pm", href: null },
];

export default function Contact() {
  return (
    <div className="pt-20">
      <SEO
        title="Contact Us & Get a Quote"
        description="Request a quote or reach out to Spartan Fencing Supplies. Call (954) 316-9889, email info@spartanfencingsupplies.com, or fill out our quick quote form. Fort Lauderdale, FL."
        canonical="/contact"
        jsonLd={CONTACT_JSON_LD}
      />
      {/* Header */}
      <section className="bg-[#1c1c1e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">
            REQUEST A QUOTE
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Tell us about your project. Our team responds within one business day
            with pricing, specs, and availability.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-black text-foreground uppercase mb-2">Contact Information</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Prefer to talk? Reach us directly during business hours and we'll help you
                  figure out exactly what your project needs.
                </p>
              </div>

              <div className="space-y-6">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-primary/40" />
                  <p className="text-xs">1531 S State Road 7<br />Fort Lauderdale, FL 33317</p>
                </div>
              </div>
            </div>

            {/* Quote form */}
            <div className="lg:col-span-2 bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-black text-foreground uppercase mb-1">Quote Request Form</h2>
              <p className="text-muted-foreground text-sm mb-8">
                Fill out the form below and we'll prepare a detailed proposal for your project.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
