import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/productData";
import ServiceCard from "@/components/services/ServiceCard";
import SEO from "@/components/SEO";

const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Fencing Supply & Contractor Services",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Spartan Fencing Supplies",
    "url": "https://spartan-fencing-portal.vercel.app"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Contractor Services",
    "itemListElement": SERVICES.map((s, i) => ({
      "@type": "Offer",
      "position": i + 1,
      "itemOffered": {
        "@type": "Service",
        "name": s.title,
        "description": s.description
      }
    }))
  }
};

export default function Services() {
  return (
    <div className="pt-20">
      <SEO
        title="Fencing Services for Contractors & Property Owners"
        description="Custom fabrication, contractor supply programs, material estimation, fleet delivery, technical consultation, and cut-to-length processing — all in one place."
        canonical="/services"
        jsonLd={SERVICES_JSON_LD}
      />
      {/* Page Header */}
      <section className="bg-[#1a1e2a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">What We Offer</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">
            OUR SERVICES
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Beyond supply — we provide the expertise, logistics, and fabrication capabilities
            that keep your projects moving.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Program highlight */}
      <section className="py-20 bg-[#1a1e2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">For Contractors</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-5">
                JOIN OUR CONTRACTOR
                <br />
                <span className="text-primary">SUPPLY PROGRAM</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Licensed fence contractors get exclusive access to volume pricing, dedicated account
                management, priority scheduling, and a direct line to our technical support team.
                We're built to supply the pros.
              </p>
              <ul className="space-y-2 mb-8">
                {["Volume discount tiers", "Dedicated account rep", "Priority stock allocation", "Net-30 terms available", "Same-day will-call pickup"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="spartan-cta inline-flex">
                Apply for Contractor Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/gates-frames.webp"
                alt="Contractor gate fabrication"
                width={600}
                height={320}
                loading="lazy"
                decoding="async"
                className="rounded-xl w-full h-80 object-cover opacity-80"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">READY TO GET STARTED?</h2>
          <p className="text-white/80 mb-8">
            Tell us about your project and we'll put together a complete material and service proposal.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#1a1e2a] font-black uppercase tracking-wide text-sm px-8 py-3 rounded hover:bg-white/90 transition-colors">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
