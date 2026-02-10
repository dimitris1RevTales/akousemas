"use client";

import { useEffect, useState } from "react";
import { DonationWidget } from "@/components/donation-widget";

export function StickyDonationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearFooter(entry.isIntersecting);
      },
      { threshold: 0.01 },
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-x-0 z-30 px-4 transition duration-300 md:px-6 ${
          isNearFooter ? "pointer-events-none translate-y-16 opacity-0" : "translate-y-0 opacity-100"
        } bottom-20 md:bottom-4`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mx-auto flex w-[240px] items-center justify-center rounded-2xl border border-gold/65 bg-gold/35 px-5 py-3 text-sm font-semibold text-navy shadow-[0_18px_45px_-24px_rgba(10,17,40,0.65)] backdrop-blur-xl transition hover:bg-gold/45 md:w-[280px] md:text-base"
        >
          Στηρίξτε Οικονομικά
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" role="dialog" aria-modal="true" aria-label="Στήριξη οικονομικά">
          <button type="button" className="absolute inset-0 bg-navy/55 backdrop-blur-sm" onClick={() => setIsOpen(false)} aria-label="Κλείσιμο" />
          <div className="relative z-10 w-full max-w-xl rounded-[28px] border border-white/65 bg-white/90 p-6 text-navy shadow-2xl shadow-black/30 backdrop-blur-xl md:p-7">
            <p className="text-2xl leading-tight font-semibold md:text-[2rem]">
              Στηρίξτε τους επιζώντες που έχουν ανάγκη. Κάντε δωρεά τώρα για να τους προσφέρετε την απαραίτητη θεραπεία.
            </p>

            <DonationWidget />

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full rounded-lg border border-navy/25 px-4 py-3 text-sm font-semibold text-navy transition hover:bg-navy/5"
            >
              Κλείσιμο
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
