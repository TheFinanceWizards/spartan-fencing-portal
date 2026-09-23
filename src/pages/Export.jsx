import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import ExportInquiryForm from "@/components/export/ExportInquiryForm";
import SEO from "@/components/SEO";

const EXPORT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://spartanfencingsupplies.com/export",
  "name": "Export Fencing Materials — Spartan Fencing Supplies",
  "description": "Request an export quote for fencing materials from Spartan Fencing Supplies in Fort Lauderdale, Florida.",
};

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "+1 (954) 316-9889", href: "tel:+19543169889" },
  { icon: Mail, label: "Email", value: "info@spartanfencingsupplies.com", href: "mailto:info@spartanfencingsupplies.com" },
  { icon: MapPin, label: "Warehouse", value: "1531 S State Road 7\nFort Lauderdale, FL 33317, USA", href: null },
];

export default function Export() {
  return (
    <div className="pt-20">
      <SEO
        title="Fencing Materials for Export"
        description="Spartan Fencing Supplies offers fencing materials for export from Fort Lauderdale, FL. Tell us your destination country, materials, and quantities to get an export quote."
        canonical="/export"
        jsonLd={EXPORT_JSON_LD}
      />
      {/* Header */}
      <section className="bg-[#1c1c1e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Export Orders</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">
            EXPORT INQUIRY
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Need fencing materials shipped outside the U.S.? Tell us where it's going and what you
            need, and our team will put together a quote for your order.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-black text-foreground uppercase mb-2">How It Works</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Send us your destination, materials, and quantities. We'll review your list and follow
                  up with pricing and availability. If you already work with a freight forwarder, let us
                  know in the form.
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

              <div className="rounded-xl border border-border bg-muted p-6 flex items-start gap-4">
                <Globe className="w-8 h-8 text-primary/60 shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Shopping for a project in the U.S. instead?{" "}
                  <Link to="/contact" className="text-primary hover:underline font-medium">Use our standard quote form.</Link>
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-black text-foreground uppercase mb-1">Export Quote Request</h2>
              <p className="text-muted-foreground text-sm mb-8">
                Fields marked * are required.
              </p>
              <ExportInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
