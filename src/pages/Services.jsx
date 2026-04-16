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
      <section className="bg-[#1c1c1e] py-20">
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

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">READY TO GET STARTED?</h2>
          <p className="text-white/80 mb-8">
            Tell us about your project and we'll put together a complete material and service proposal.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#1c1c1e] font-black uppercase tracking-wide text-sm px-8 py-3 rounded hover:bg-white/90 transition-colors">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
