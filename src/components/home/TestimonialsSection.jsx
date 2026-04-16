import React, { useState, useEffect, useCallback } from "react";
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/productData";

const GOOGLE_REVIEWS_URL = "https://share.google/BqqTVxsuxrJfpYBgs";
const AUTO_ADVANCE_MS = 7000;
const PER_PAGE = 3;

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function ReviewCard({ t }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm h-full">
      <div className="flex items-start justify-between">
        <Quote className="w-7 h-7 text-primary/25 shrink-0" />
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
          <GoogleIcon />
          <span className="font-medium">Google</span>
        </div>
      </div>

      <p className="text-foreground/85 leading-relaxed text-sm flex-1">
        "{t.quote}"
      </p>

      <div className="flex items-end justify-between">
        <div>
          <div className="flex gap-1 mb-1.5">
            {Array.from({ length: t.rating }).map((_, j) => (
              <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
          </div>
          <p className="font-bold text-foreground text-sm">{t.name}</p>
          <p className="text-muted-foreground text-xs mt-0.5">{t.company}</p>
        </div>
        {t.date && (
          <p className="text-muted-foreground text-xs">{t.date}</p>
        )}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const totalPages = Math.ceil(TESTIMONIALS.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);
  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);

  useEffect(() => {
    if (paused || totalPages <= 1) return;
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, next, totalPages]);

  const group = TESTIMONIALS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GoogleIcon />
            <span className="text-[#7d5a06] text-xs font-bold uppercase tracking-[0.2em]">
              Verified Google Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            WHAT CUSTOMERS SAY
          </h2>
          <p className="text-muted-foreground text-sm mt-3">
            100+ five-star reviews on Google
          </p>
        </div>

        {/* Cards grid */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            key={page}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            style={{ animation: "fadeIn 0.35s ease" }}
          >
            {group.map((t, i) => (
              <ReviewCard key={`${page}-${i}`} t={t} />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              aria-label="Previous reviews"
              className="w-10 h-10 rounded-full border border-border bg-card hover:border-primary/40 hover:shadow flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/60" />
            </button>

            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === page ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {page * PER_PAGE + 1}–{Math.min(page * PER_PAGE + PER_PAGE, TESTIMONIALS.length)} of {TESTIMONIALS.length} reviews
              </span>
            </div>

            <button
              onClick={next}
              aria-label="Next reviews"
              className="w-10 h-10 rounded-full border border-border bg-card hover:border-primary/40 hover:shadow flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5 text-foreground/60" />
            </button>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-10">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all px-6 py-3 rounded-lg text-sm font-semibold text-foreground"
          >
            <GoogleIcon />
            Read all our Google reviews
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
