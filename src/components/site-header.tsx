"use client";

import { type SyntheticEvent, useEffect, useRef } from "react";
import Link from "next/link";
import { navGroups, navItems } from "@/lib/site-data";

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null);

  function closeAllDropdowns(except?: HTMLDetailsElement) {
    const openDropdowns = headerRef.current?.querySelectorAll<HTMLDetailsElement>("details[data-nav-dropdown][open]");
    openDropdowns?.forEach((dropdown) => {
      if (except && dropdown === except) {
        return;
      }
      dropdown.open = false;
    });
  }

  function handleDropdownToggle(event: SyntheticEvent<HTMLDetailsElement>) {
    const current = event.currentTarget;
    if (current.open) {
      closeAllDropdowns(current);
    }
  }

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const target = event.target as Node;
      if (!headerRef.current?.contains(target)) {
        closeAllDropdowns();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeAllDropdowns();
      }
    }

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-white/70 bg-white/45 text-navy backdrop-blur-2xl">
      <div className="bg-gold px-5 py-2 text-center text-xs font-semibold tracking-wide text-navy md:text-sm">
        Ανακοίνωση: Νέα ομάδα υποστήριξης επιζώντων ξεκινά αυτόν τον μήνα.
      </div>
      <div className="content-shell flex items-center justify-between gap-4 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Link href="/" className="font-display text-2xl font-semibold tracking-wide text-navy md:justify-self-start">
          AKOUSE MAS
        </Link>

        <details className="group md:hidden">
          <summary className="cursor-pointer rounded-md border border-navy/20 bg-white/50 px-3 py-2 text-sm font-semibold marker:content-none">
            Μενού
          </summary>
          <nav className="absolute right-5 top-24 w-80 rounded-2xl border border-white/80 bg-white/80 p-4 text-navy shadow-2xl backdrop-blur-xl">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-white/60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3 border-t border-navy/10 pt-4">
              {navGroups.map((group) => (
                <div key={group.title}>
                  <p className="px-3 text-xs font-semibold tracking-wider text-navy/60 uppercase">{group.title}</p>
                  <ul className="mt-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block rounded-md px-3 py-2 text-sm hover:bg-white/60">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </details>

        <div className="hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/40 px-3 py-2 shadow-lg shadow-slate-900/10 backdrop-blur-2xl md:flex md:justify-self-center">
          {navGroups.map((group) => (
            <details key={group.title} data-nav-dropdown className="group relative" onToggle={handleDropdownToggle}>
              <summary className="cursor-pointer list-none rounded-lg px-3 py-2 text-sm font-semibold text-navy/85 transition hover:bg-white/60 hover:text-navy">
                <span className="inline-flex items-center gap-2">
                  {group.title}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path d="M5.5 7.5L10 12l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="pointer-events-none absolute left-0 top-12 z-50 w-64 translate-y-1 rounded-xl border border-white/90 bg-white/90 p-3 opacity-0 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl transition duration-150 group-open:pointer-events-auto group-open:translate-y-0 group-open:opacity-100">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      closeAllDropdowns();
                    }}
                    className="block rounded-lg px-3 py-2 text-sm text-navy/90 hover:bg-white hover:text-navy"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-navy/85 hover:bg-white/60 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block" aria-hidden="true" />
      </div>
      <div className="border-t border-white/10 bg-alert px-5 py-2 text-center text-xs font-semibold tracking-wide text-white">
        Αν υπάρχει άμεσος κίνδυνος, κάλεσε τώρα το 112
      </div>
    </header>
  );
}
