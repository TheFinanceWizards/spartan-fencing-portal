import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Tag } from "lucide-react";

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
  } catch { /* noop */ }
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

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="sale-widget"
          className="fixed bottom-[170px] right-6 z-[99999] w-[300px]
                     rounded-xl overflow-hidden
                     bg-[#1c1c1e]
                     border border-white/10
                     shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_0_1px_rgba(196,145,73,0.15)]"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Special offer"
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-2.5 right-2.5 z-10
                       w-7 h-7 rounded-full flex items-center justify-center
                       bg-black/40 border border-white/10
                       text-white/60 hover:text-white hover:bg-black/60
                       transition-all duration-150"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Image */}
          <div className="relative w-full h-[180px] overflow-hidden">
            <img
              src="/images/dura-fence-board.jpg"
              alt="Wood-grain Dura Fence board"
              className="w-full h-full object-cover object-center"
            />
            {/* Limited stock badge */}
            <div className="absolute top-2.5 left-2.5
                          flex items-center gap-1.5
                          bg-black/70 border border-primary/40 backdrop-blur-sm
                          text-primary text-[10px] font-bold uppercase tracking-[0.15em]
                          px-2.5 py-1 rounded-sm">
              <Tag className="w-3 h-3" />
              Limited Stock
            </div>
          </div>

          {/* Body */}
          <div className="px-4 pt-3.5 pb-4">
            <p className="text-primary text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5">
              This Week Only
            </p>

            <h3 className="font-display text-[15px] font-black text-white uppercase leading-tight mb-1.5">
              Wood-Grain Dura Fence Boards
            </h3>

            <p className="text-white/50 text-[12px] leading-relaxed mb-3">
              The look of natural wood. Steel durability. Won't rot, warp, or fade — built for South Florida.
            </p>

            {/* Price row */}
            <div className="flex items-center gap-2 mb-3
                            bg-primary/8 border border-primary/20
                            rounded-lg px-3 py-2.5">
              <span className="font-display text-[28px] font-black text-white leading-none">
                $3.00
              </span>
              <span className="text-white/40 text-[12px]">per board</span>
              <span className="ml-auto text-[9px] font-bold uppercase tracking-[0.15em]
                               text-primary bg-primary/15 px-2 py-0.5 rounded">
                Special
              </span>
            </div>

            {/* CTA */}
            <Link
              to="/products/dura-fence"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 w-full
                         bg-gradient-to-b from-primary to-[#a37434]
                         text-[#15110d] text-[12px] font-black uppercase tracking-[0.06em]
                         px-4 py-3 rounded-md
                         shadow-[0_4px_14px_rgba(196,145,73,0.3)]
                         hover:shadow-[0_6px_18px_rgba(196,145,73,0.45)]
                         hover:from-[#d4a050] hover:to-[#b48040]
                         transition-all duration-200"
            >
              Claim This Deal
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <p className="mt-2.5 text-center text-[10px] text-white/30">
              In stock · Same-day pickup · Fort Lauderdale
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
