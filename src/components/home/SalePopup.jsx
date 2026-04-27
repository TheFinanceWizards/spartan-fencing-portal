import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Zap, Shield, Clock } from "lucide-react";

const STORAGE_KEY = "spartanSalePopupSeen";
const SHOW_DELAY_MS = 2500;
const COOLDOWN_HOURS = 24;

function shouldShow() {
  try {
    const last = localStorage.getItem(STORAGE_KEY);
    if (!last) return true;
    return Date.now() - parseInt(last, 10) > COOLDOWN_HOURS * 3_600_000;
  } catch {
    return true;
  }
}

function markSeen() {
  try {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  } catch {
    /* noop */
  }
}

export default function SalePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!shouldShow()) return;
    const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    markSeen();
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        // Overlay
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
          aria-modal="true"
          role="dialog"
          aria-labelledby="salePopupTitle"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

          {/* Card */}
          <motion.div
            className="relative z-10 w-full max-w-[860px] bg-[#1c1c1e] rounded-xl overflow-hidden
                       grid grid-cols-1 md:grid-cols-2
                       border border-white/10
                       shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(196,145,73,0.12)]"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Close ── */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full
                         flex items-center justify-center
                         bg-white/5 border border-white/10
                         text-white/50 hover:text-white hover:bg-white/10
                         transition-all duration-150"
            >
              <X className="w-4 h-4" />
            </button>

            {/* ── LEFT — Image ── */}
            <div className="relative overflow-hidden min-h-[240px] md:min-h-0">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10
                              bg-[#1c1c1e]/90 border border-primary/40
                              text-primary text-[10px] font-bold uppercase tracking-[0.18em]
                              px-3 py-1.5 rounded-sm backdrop-blur-sm">
                Limited Stock
              </div>

              <motion.img
                src="/images/dura-fence.webp"
                alt="Wood-grain Dura Fence board — premium metal privacy fence"
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1 }}
                animate={{ scale: 1.06 }}
                transition={{ duration: 8, ease: "linear" }}
              />

              {/* bottom gradient fade into card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1c1c1e]/30 pointer-events-none" />
            </div>

            {/* ── RIGHT — Content ── */}
            <div className="flex flex-col justify-center px-7 py-8 md:px-9 md:py-10">
              {/* Eyebrow */}
              <p className="text-primary text-[10px] font-bold uppercase tracking-[0.22em] mb-3">
                Contractor Pricing · This Week Only
              </p>

              {/* Headline */}
              <h2
                id="salePopupTitle"
                className="font-display text-2xl md:text-[26px] font-black text-white leading-[1.1] mb-3 uppercase tracking-tight"
              >
                Premium Wood-Grain Boards.{" "}
                <span className="text-primary">The Look of Wood. The Life of Steel.</span>
              </h2>

              {/* Sub */}
              <p className="text-white/55 text-[13.5px] leading-relaxed mb-5">
                Won't rot. Won't warp. Won't fade. Dura Fence gives your clients the privacy they want
                without the maintenance headache — and you save on every board.
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-5">
                {[
                  { icon: Shield, text: "Termite & rot-proof galvanized steel panels" },
                  { icon: Zap,    text: "In stock — same-day pickup, Fort Lauderdale" },
                  { icon: Clock,  text: "We beat any written quote. Bring the number." },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-[13px] text-white/70">
                    <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              {/* Price block */}
              <div className="flex items-baseline gap-3 px-4 py-3.5
                              bg-primary/8 border border-primary/20 rounded-lg mb-5">
                <span className="font-display text-[36px] font-black text-white leading-none tracking-tight">
                  $3.00
                </span>
                <span className="text-white/45 text-sm font-medium">per board</span>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.15em]
                                 text-primary bg-primary/12 px-2.5 py-1 rounded">
                  Special
                </span>
              </div>

              {/* CTA */}
              <Link
                to="/products/dura-fence"
                onClick={close}
                className="inline-flex items-center justify-center gap-2.5
                           w-full bg-gradient-to-b from-primary to-[#a37434]
                           text-[#15110d] text-[13px] font-black uppercase tracking-[0.07em]
                           px-6 py-4 rounded-md
                           shadow-[0_6px_20px_rgba(196,145,73,0.35)]
                           hover:shadow-[0_10px_28px_rgba(196,145,73,0.5)]
                           hover:from-[#d4a050] hover:to-[#b48040]
                           transition-all duration-200 hover:-translate-y-0.5"
              >
                Claim This Deal
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Trust line */}
              <p className="mt-3.5 text-center text-[11px] text-white/35 leading-relaxed">
                Trusted by{" "}
                <span className="text-primary/80 font-semibold">500+ South Florida contractors</span>
                {" "}· (954) 316-9889
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
