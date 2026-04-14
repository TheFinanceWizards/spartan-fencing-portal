import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-base font-black text-foreground uppercase tracking-wide leading-tight mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Features */}
        {product.features && (
          <ul className="space-y-1.5 flex-1">
            {product.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-xs text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors mt-auto group/link"
        >
          Request a Quote
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
