import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, Truck, BadgeCheck, Headphones } from "lucide-react";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "Certified Quality",
    description: "Every product meets or exceeds ASTM industry standards. No shortcuts, no compromises."
  },
  {
    icon: Clock,
    title: "Industry Experience",
    description: "Deep expertise mean we know what works — and we help you get it right the first time."
  },
  {
    icon: Truck,
    title: "Reliable Fleet Delivery",
    description: "Our flatbed trucks deliver long-length materials to job sites on your schedule, region-wide."
  },
  {
    icon: Users,
    title: "Contractor Partnerships",
    description: "500+ active contractor partners benefit from volume pricing, priority stock, and dedicated support."
  },
  {
    icon: CheckCircle2,
    title: "98% On-Time Delivery",
    description: "Downtime costs money. Our logistics team ensures your materials arrive when you need them."
  },
  {
    icon: Headphones,
    title: "Expert Technical Team",
    description: "Wind load calcs, code questions, material selection — our team has real answers for real projects."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#1a1e2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Why Spartan</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-6">
              THE SUPPLIER
              <br />
              <span className="text-primary">CONTRACTORS</span>
              <br />
              TRUST
            </h2>
            <p className="text-white/60 leading-relaxed text-lg mb-8">
              We built our reputation on one principle: supply what you promise, when you promise it.
              Since 2023, that commitment has made Spartan the go-to source for
              fence contractors across the region.
            </p>
            <div className="flex flex-col gap-3">
              {["No minimum order requirements", "Same-day will-call available", "Competitive contractor pricing", "Custom fabrication on-site"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  <span className="text-white/70 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/8 transition-colors"
              >
                <reason.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
