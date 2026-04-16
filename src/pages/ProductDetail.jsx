import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, MapPin, Phone } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/productData";
import SEO from "@/components/SEO";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCT_CATEGORIES.find((p) => p.id === id);

  if (!product) return <Navigate to="/products" replace />;

  const paragraphs = product.longDescription
    ? product.longDescription.split("\n\n")
    : [product.description];

  return (
    <div className="pt-20">
      <SEO
        title={`${product.name} — Spartan Fencing Supplies`}
        description={product.description}
        canonical={`/products/${product.id}`}
      />

      {/* Hero */}
      <section className="relative bg-[#1c1c1e] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs font-semibold uppercase tracking-wider transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Products
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
                Spartan Fencing Supplies
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                {product.name.toUpperCase()}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {product.description}
              </p>
              <Link to="/contact" className="spartan-cta inline-flex">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl w-full h-80 object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Long description */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-black text-foreground uppercase tracking-wide mb-6">
                Product Overview
              </h2>
              {paragraphs.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Features sidebar */}
            <div>
              <div className="bg-card border border-border rounded-xl p-7 sticky top-28">
                <h3 className="text-sm font-black text-foreground uppercase tracking-wide mb-5">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border mt-7 pt-7">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-wide text-xs px-5 py-3 rounded transition-colors"
                  >
                    Get a Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="tel:+19543169889"
                    className="w-full inline-flex items-center justify-center gap-2 mt-3 text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    (954) 316-9889
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      {product.applications && (
        <section className="py-20 bg-secondary/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-foreground uppercase tracking-wide mb-10">
              Common Applications
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.applications.map((app, i) => (
                <motion.div
                  key={app}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-4"
                >
                  <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                  <span className="text-sm font-medium text-foreground">{app}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-foreground uppercase tracking-wide">
              Other Products
            </h2>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-wide transition-colors"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCT_CATEGORIES.filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="h-36 overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-black text-foreground uppercase tracking-wide leading-tight mb-1">
                      {p.name}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold">
                      View Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4 uppercase">
            Ready to Order {product.shortName}?
          </h2>
          <p className="text-white/80 mb-8">
            Our team responds within one business day with a detailed material list, specifications, and competitive pricing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1c1c1e] font-black uppercase tracking-wide text-sm px-8 py-3 rounded hover:bg-white/90 transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
