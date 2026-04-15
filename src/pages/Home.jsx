import React from "react";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://spartan-fencing-portal.vercel.app",
  "name": "Spartan Fencing Supplies",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://spartan-fencing-portal.vercel.app/products?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <>
      <SEO
        title="Premium Fence Materials & Supplies"
        description="Spartan Fencing Supplies — South Florida's most trusted fencing material source since 1989. Chain link, ornamental iron, vinyl, gates, and contractor supply programs."
        canonical="/"
        jsonLd={HOME_JSON_LD}
      />
      <HeroSection />
      <StatsBar />
      <FeaturedProducts />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
