import { Helmet } from "react-helmet-async";

const SITE_NAME = "Spartan Fencing Supplies";
const SITE_URL  = "https://spartan-fencing-portal.vercel.app";
const OG_IMAGE  = `${SITE_URL}/images/chain-link.webp`;

/**
 * SEO — per-page <head> tags: title, meta description, Open Graph, Twitter Card, JSON-LD.
 *
 * @param {string}  title        Page-level title (appended with " | Spartan Fencing Supplies")
 * @param {string}  description  Meta description (150–160 chars)
 * @param {string}  canonical    Canonical path e.g. "/products"
 * @param {string}  ogImage      Override OG image URL (absolute)
 * @param {object}  jsonLd       Additional JSON-LD object to merge (optional)
 */
export default function SEO({ title, description, canonical = "/", ogImage = OG_IMAGE, jsonLd }) {
  const fullTitle    = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Premium Fence Materials Since 2023`;
  const canonicalUrl = `${SITE_URL}${canonical}`;

  // Base LocalBusiness schema — present on every page
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo.webp`,
    "image": OG_IMAGE,
    "description": "Premium fencing materials and supplies for contractors, builders, and property owners in South Florida. Chain link, ornamental iron, vinyl, gates, and hardware since 2023.",
    "telephone": "+19543169889",
    "email": "info@spartanfencingsupplies.com",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1531 S State Road 7",
      "addressLocality": "Fort Lauderdale",
      "addressRegion": "FL",
      "postalCode": "33317",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.0872,
      "longitude": -80.1509
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "07:30",
        "closes": "15:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "07:30",
        "closes": "12:30"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "sameAs": []
  };

  // Merge page-specific JSON-LD on top of the base
  const structuredData = jsonLd ? [localBusiness, jsonLd] : localBusiness;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"   content={`${SITE_NAME} — ${title}`} />
      <meta property="og:locale"      content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />

      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
