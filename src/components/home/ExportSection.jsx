import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, ClipboardList, FileText } from "lucide-react";

const STEPS = [
  {
    icon: Globe,
    title: "Tell Us Where",
    description: "Share your destination country and city or port.",
  },
  {
    icon: ClipboardList,
    title: "List Your Materials",
    description: "Chain link, ornamental, vinyl, gates, hardware — with the quantities you need.",
  },
  {
    icon: FileText,
    title: "Get Your Export Quote",
    description: "Our team prepares pricing and availability for your order.",
  },
];

export default function ExportSection() {
  return (
    <section className="py-24 bg-muted/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <span className="text-[#7d5a06] text-xs font-bold uppercase tracking-[0.2em]">Now Offering Export</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2 mb-6">
              FENCING MATERIALS
              <br />
              <span className="text-[#7d5a06]">FOR EXPORT</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Building outside the U.S.? Spartan Fencing Supplies supplies fencing materials for
              export orders. Based in Fort Lauderdale, close to South Florida's major ports, we can
              put together a quote for your project wherever it's headed.
            </p>
            <Link to="/export" className="spartan-cta">
              Request an Export Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right steps */}
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-card border border-border rounded-lg p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-[#7d5a06]" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-sm uppercase tracking-wide mb-1">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
