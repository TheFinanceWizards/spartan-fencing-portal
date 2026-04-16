import React from "react";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES } from "@/lib/productData";
import ProductCard from "@/components/products/ProductCard";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PRODUCTS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Spartan Fencing Products",
  "description": "Complete inventory of fencing materials including chain link, ornamental iron, vinyl, gates, and hardware.",
  "url": "https://spartan-fencing-portal.vercel.app/products",
  "itemListElement": PRODUCT_CATEGORIES.map((p, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": p.name,
    "description": p.description.slice(0, 200)
  }))
};

export default function Products() {
  return (
    <div className="pt-20">
      <SEO
        title="Fencing Products & Materials"
        description="Browse Spartan's full inventory — chain link, ornamental iron, vinyl fencing, gates, pipes, barbed wire, hardware, and more. Contractor pricing available."
        canonical="/products"
        jsonLd={PRODUCTS_JSON_LD}
      />
      {/* Page Header */}
      <section className="bg-[#1c1c1e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Full Inventory</span>
          <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-4">
            OUR PRODUCTS
          </h1>
          <p className="text-white/60 max-w-2xl text-lg">
            From chain link to ornamental iron, every product in our inventory is
            selected for quality, consistency, and contractor-grade durability.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((product, i) => (
              <motion.div
                key={product.id}
                className="h-full"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-secondary/40 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-foreground mb-4">CAN'T FIND WHAT YOU NEED?</h2>
          <p className="text-muted-foreground mb-8">
            We carry an extensive catalog beyond what's listed here. Call us or request a quote
            and we'll source exactly what your project requires.
          </p>
          <Link to="/contact" className="spartan-cta inline-flex">
            Request a Custom Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
