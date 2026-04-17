import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1c1c1e]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://media.base44.com/images/public/69bd8c7f45d3f9291e5cc858/f6bd7ff9f_generated_cebf11f7.png')`
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1e] via-[#1c1c1e]/90 to-[#1c1c1e]/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-primary/30 px-3 py-1 rounded-sm">
              Serving Professionals Since 2023
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-6">
              BUILT TO
              <br />
              <span className="text-primary">STAND</span>
              <br />
              GUARD.
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
              Premium fencing materials for contractors and property owners who demand quality.
              Chain link, ornamental iron, vinyl, wood hardware — engineered to last.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="spartan-cta">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-6 py-3 rounded transition-all"
              >
                View Products
              </Link>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6 mt-16 pt-12 border-t border-white/10"
          >
            {[
              { icon: Shield, text: "ASTM F668 Certified Materials" },
              { icon: Truck, text: "Regional Fleet Delivery" },
              { icon: Award, text: "2+ Years of Excellence" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/50">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wide">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
