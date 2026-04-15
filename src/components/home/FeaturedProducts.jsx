import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/productData";
import ProductCard from "@/components/products/ProductCard";

export default function FeaturedProducts() {
  const featured = PRODUCT_CATEGORIES.slice(0, 6);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#7d5a06] text-xs font-bold uppercase tracking-[0.2em]">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2">
              FENCING SYSTEMS
              <br />
              FOR EVERY JOB
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
