import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#1c1c1e] relative overflow-hidden">
      {/* Decorative gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Ready to Build?</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mt-3 mb-6">
          GET YOUR MATERIALS
          <br />
          <span className="text-primary">QUOTE TODAY</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Our team responds within one business day with a detailed material list,
          specifications, and competitive pricing tailored to your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="spartan-cta">
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+19543169889"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            Or call (954) 316-9889
          </a>
        </div>
      </div>
    </section>
  );
}
