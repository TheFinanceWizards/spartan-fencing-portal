import React, { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES } from "@/lib/productData";
import ProductCard from "@/components/products/ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const [search, setSearch] = useState("");

  const filtered = PRODUCT_CATEGORIES.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-[#1a1e2a] py-20">
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

      {/* Search + Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="mb-10">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md border border-input bg-card rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
            />
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg font-semibold">No products found</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          )}
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
