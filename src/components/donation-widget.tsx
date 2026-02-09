"use client";

import { useMemo, useState } from "react";

const donationAmounts = ["€500", "€250", "€150", "€50", "€25", "€10"];

type DonationMode = "once" | "monthly";

export function DonationWidget() {
  const [mode, setMode] = useState<DonationMode>("once");
  const [selectedAmount, setSelectedAmount] = useState<string>("€50");
  const [customAmount, setCustomAmount] = useState("");

  const isCustomAmountSelected = useMemo(() => customAmount.trim().length > 0, [customAmount]);

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-700">Επιλέξτε ποσό</p>

      <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setMode("once")}
          aria-pressed={mode === "once"}
          className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
            mode === "once" ? "border border-indigo-400 bg-white text-indigo-700" : "text-slate-700 hover:bg-white/70"
          }`}
        >
          Εφάπαξ
        </button>
        <button
          type="button"
          onClick={() => setMode("monthly")}
          aria-pressed={mode === "monthly"}
          className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
            mode === "monthly" ? "border border-indigo-400 bg-white text-indigo-700" : "text-slate-700 hover:bg-white/70"
          }`}
        >
          Μηνιαία
        </button>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {donationAmounts.map((amount) => {
          const isActive = !isCustomAmountSelected && selectedAmount === amount;

          return (
            <button
              key={amount}
              type="button"
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
              aria-pressed={isActive}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border border-indigo-400 bg-indigo-50 text-indigo-700"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
            >
              {amount}
            </button>
          );
        })}
      </div>

      <label className="mt-3 block">
        <span className="sr-only">Άλλο ποσό</span>
        <div className="flex items-center rounded-lg border border-slate-200 bg-slate-100 px-3 py-2">
          <span className="mr-2 text-sm text-slate-500">€</span>
          <input
            type="number"
            min="1"
            step="1"
            inputMode="numeric"
            value={customAmount}
            onChange={(event) => setCustomAmount(event.target.value)}
            placeholder="Άλλο"
            className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-500 outline-none"
          />
        </div>
      </label>

      <button type="button" className="mt-4 w-full rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600">
        Συνέχεια
      </button>
    </div>
  );
}
