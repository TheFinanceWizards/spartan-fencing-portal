import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { STATS } from "@/lib/productData";
import SEO from "@/components/SEO";

const VALUES = [
  { title: "Quality Without Compromise", body: "Every product we stock is vetted against industry specifications. If it doesn't meet the standard, it doesn't go on our shelf." },
  { title: "Service That Performs", body: "Our team is made up of people who've been in the field. We understand what contractors need and we deliver it without the runaround." },
  { title: "Reliability You Can Schedule Around", body: "98% on-time delivery isn't a marketing claim — it's a track record built since 2023 of keeping our word." },
  { title: "Partnership Over Transaction", body: "Our best clients aren't just customers, they're long-term partners. We invest in those relationships with competitive pricing, flexible terms, and real support." },
];

const ABOUT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://spartan-fencing-portal.vercel.app/about",
  "name": "About Spartan Fencing Supplies",
  "description": "Founded in 2023, Spartan Fencing Supplies is one of South Florida's most trusted fencing supply operations — serving contractors and property owners with quality materials at honest prices.",
  "mainEntity": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Spartan Fencing Supplies",
    "foundingDate": "2023",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": "25" },
    "slogan": "Quality you can trust, prices that compete."
  }
};

export default function About() {
  return (
    <div className="pt-20">
      <SEO
        title="About Us — South Florida's Fencing Supply Leader Since 2023"
        description="Founded in 2023, Spartan Fencing Supplies serves South Florida's contractors and property owners with quality fencing materials, honest pricing, and 98% on-time delivery."
        canonical="/about"
        ogImage="https://spartan-fencing-portal.vercel.app/images/gates-frames.webp"
        jsonLd={ABOUT_JSON_LD}
      />
      {/* Header */}
      <section className="bg-[#1a1e2a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">
            ABOUT SPARTAN
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Three decades of supplying the region's best fence contractors with the materials
            and support they need to build right.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#7d5a06] text-xs font-bold uppercase tracking-[0.2em]">Since 2023</span>
              <h2 className="text-4xl font-black text-foreground mt-2 mb-6">
                BUILT ON THE BELIEF
                <br />
                THAT SUPPLY MATTERS
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Spartan Fencing Supplies was founded in 2023 with a single goal: give fence
                  contractors in South Florida a reliable source for quality materials at honest prices.
                  In an industry where substitutions and delays were the norm, we built our name by
                  doing exactly what we said we'd do.
                </p>
                <p>
                  Since our founding in 2023, we've grown from a small distributor to one of the region's
                  most trusted fencing supply operations — stocking everything from residential chain link
                  to industrial gate systems, custom fabrication, and contractor support programs.
                </p>
                <p>
                  Our team has boots-on-the-ground experience. We've been on job sites, read the specs,
                  and dealt with the same challenges our contractor partners face every day. That context
                  makes us better at our job, and it makes us better partners for yours.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/gates-frames.webp"
                alt="Spartan Fencing yard and operations"
                className="rounded-xl w-full h-96 object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-5xl font-black text-white">{stat.value}</p>
                <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1a1e2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">What We Stand For</span>
            <h2 className="text-4xl font-black text-white mt-2">OUR VALUES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <div className="w-8 h-1 bg-primary rounded mb-5" />
                <h3 className="text-white font-black text-sm uppercase tracking-wide mb-3">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-foreground mb-4">WORK WITH US</h2>
          <p className="text-muted-foreground mb-8">
            Whether you're a contractor looking for a reliable supply partner or a property owner
            planning your next project, we're ready to help.
          </p>
          <Link to="/contact" className="spartan-cta inline-flex">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
