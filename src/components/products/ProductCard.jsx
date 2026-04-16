import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  const isContain = product.imageContain;

  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image — aspect-ratio scales proportionally on every screen size */}
      <div className={`relative w-full aspect-[4/3] overflow-hidden ${isContain ? "bg-white" : "bg-muted"}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
            isContain
              ? "object-contain p-4"
              : "object-cover group-hover:scale-105"
          }`}
        />
        {!isContain && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-sm sm:text-base font-black text-foreground uppercase tracking-wide leading-tight mb-1.5">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Features */}
        {product.features && (
          <ul className="space-y-1 flex-1">
            {product.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary mt-0.5 shrink-0" />
                <span className="text-xs text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary group-hover:text-primary/80 transition-colors mt-auto">
          View Details
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
