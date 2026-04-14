import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/productData";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Client Reviews</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
            WHAT THE PROS SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary/30" />

              <p className="text-foreground/80 leading-relaxed text-sm flex-1">
                "{t.quote}"
              </p>

              <div>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
