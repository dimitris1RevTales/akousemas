"use client";

import { useEffect, useState } from "react";

const coreValues = [
  "Λήψη αποφάσεων με επίκεντρο το θύμα",
  "Συμπόνια και ενσυναίσθηση",
  "Αξιοπρέπεια, σεβασμός και ασφάλεια",
  "Προσβασιμότητα, επιλογή και συνεργασία",
  "Εμπιστευτικότητα, ακεραιότητα και υπευθυνότητα",
  "Ευεξία και αυτοφροντίδα για επιζώντες και υποστηρικτές",
];

export default function AboutPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = pageHeight <= 0 ? 0 : Math.min(window.scrollY / pageHeight, 1);
      setScrollProgress(nextProgress);
      rafId = 0;
    };

    const handleScroll = () => {
      if (rafId === 0) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const splashProgress = Math.min(scrollProgress * 1.35, 1);
  const swirl = Math.sin(scrollProgress * Math.PI * 3.2) * 10;

  return (
    <div className="relative overflow-hidden pb-16 pt-8 md:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-22vw] top-[-8vh] h-[44vw] min-h-64 w-[44vw] min-w-64 bg-teal/14 [border-radius:67%_33%_55%_45%/39%_64%_36%_61%]" />
        <div className="absolute right-[-16vw] top-[16vh] h-[36vw] min-h-52 w-[36vw] min-w-52 bg-clay/16 [border-radius:57%_43%_68%_32%/51%_31%_69%_49%]" />
        <div className="absolute bottom-[6vh] left-[4vw] h-72 w-72 bg-gold/20 [border-radius:40%_60%_64%_36%/57%_36%_64%_43%]" />
        <div className="absolute bottom-[-6rem] right-[2vw] h-96 w-96 bg-teal/10 [border-radius:61%_39%_29%_71%/59%_35%_65%_41%]" />

        <div
          className="absolute right-[6%] top-[36%] h-60 w-60 bg-clay/32 [border-radius:63%_37%_44%_56%/58%_38%_62%_42%]"
          style={{
            transform: `translate3d(${40 - splashProgress * 130}px, ${130 - splashProgress * 330}px, 0) scale(${0.55 + splashProgress * 1.05}) rotate(${swirl}deg)`,
            opacity: Math.max(0, (splashProgress - 0.03) * 1.75),
          }}
        />
        <div
          className="absolute left-[7%] top-[56%] h-52 w-52 bg-teal/30 [border-radius:45%_55%_69%_31%/32%_61%_39%_68%]"
          style={{
            transform: `translate3d(${-90 + splashProgress * 210}px, ${120 - splashProgress * 360}px, 0) scale(${0.45 + splashProgress * 1.15}) rotate(${-swirl * 0.8}deg)`,
            opacity: Math.max(0, (splashProgress - 0.12) * 1.8),
          }}
        />
        <div
          className="absolute bottom-[13%] right-[19%] h-44 w-44 bg-navy/20 [border-radius:55%_45%_36%_64%/60%_39%_61%_40%]"
          style={{
            transform: `translate3d(${80 - splashProgress * 220}px, ${95 - splashProgress * 260}px, 0) scale(${0.35 + splashProgress * 1}) rotate(${swirl * 1.15}deg)`,
            opacity: Math.max(0, (splashProgress - 0.22) * 2),
          }}
        />
        <div
          className="absolute left-[34%] top-[48%] h-28 w-28 bg-gold/28 [border-radius:49%_51%_61%_39%/40%_33%_67%_60%]"
          style={{
            transform: `translate3d(${60 - splashProgress * 190}px, ${130 - splashProgress * 300}px, 0) scale(${0.35 + splashProgress * 0.9}) rotate(${swirl * -1.4}deg)`,
            opacity: Math.max(0, (splashProgress - 0.28) * 2.2),
          }}
        />
        <div
          className="absolute right-[33%] top-[64%] h-24 w-24 bg-clay/26 [border-radius:34%_66%_42%_58%/51%_27%_73%_49%]"
          style={{
            transform: `translate3d(${-30 + splashProgress * 140}px, ${110 - splashProgress * 270}px, 0) scale(${0.3 + splashProgress * 0.95}) rotate(${swirl * 1.6}deg)`,
            opacity: Math.max(0, (splashProgress - 0.35) * 2.4),
          }}
        />
      </div>

      <section className="content-shell">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="relative rounded-[2.2rem] border border-line/80 bg-paper/95 p-8 shadow-[0_24px_65px_-45px_rgba(16,35,54,0.55)] md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">Σχετικά με εμάς</p>
            <h1 className="mt-4 max-w-2xl text-4xl leading-tight font-semibold text-teal-deep md:text-6xl">Ποιοι είμαστε</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/85 md:text-lg">
              Η Αστική Μη Κερδοσκοπική Εταιρία «Άκουσε μας» είναι μια εθελοντική συμμαχία για τον τερματισμό της παιδικής
              σεξουαλικής κακοποίησης μέσα από βοήθεια στα θύματα, ενημέρωση, ευαισθητοποίηση, εκπαίδευση και δημόσιο διάλογο.
            </p>
          </article>

          <article className="relative isolate min-h-[21rem] overflow-hidden rounded-[2.2rem] border border-line/70 bg-white/75 p-7 md:p-9">
            <div className="absolute -right-20 -top-24 h-64 w-64 bg-teal/20 [border-radius:72%_28%_54%_46%/49%_60%_40%_51%]" />
            <div className="absolute -bottom-28 left-2 h-64 w-64 bg-clay/18 [border-radius:53%_47%_29%_71%/46%_52%_48%_54%]" />
            <div className="relative space-y-5">
              <h2 className="text-3xl font-semibold text-navy">Όραμα</h2>
              <ul className="space-y-3 text-sm leading-relaxed text-ink/90 md:text-base">
                <li>Η σεξουαλική κακοποίηση των παιδιών αντιμετωπίζεται ενεργά και συζητείται ανοιχτά.</li>
                <li>Η φωνή των θυμάτων ακούγεται και μετατρέπεται σε πράξη, πολιτική και προστασία.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="content-shell mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2.2rem] border border-line/75 bg-white/85 p-7 md:p-10">
          <h2 className="text-3xl font-semibold text-navy">Αποστολή</h2>
          <p className="mt-5 text-sm leading-relaxed text-ink/85 md:text-base">
            Η ομάδα μας, οι σύμμαχοί μας και οι υποστηρικτές μας χρησιμοποιούν τη δύναμη της φωνής τους για να κινητοποιήσουν
            κοινότητες σε όλη την Ελλάδα. Στόχος μας είναι να σπάσει η σιωπή, να αυξηθεί η πρόληψη και να ενισχυθεί η πρόσβαση
            σε ασφαλείς διαδρομές υποστήριξης για κάθε επιζώντα.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/85 md:text-base">
            Πιστεύουμε ότι η αλλαγή δεν έρχεται μόνο μέσα από υπηρεσίες πρώτης γραμμής, αλλά και από τη διαμόρφωση πολιτικών,
            συνεργασιών και κοινωνικής συνείδησης που προστατεύουν παιδιά και ενδυναμώνουν οικογένειες.
          </p>
        </article>

        <article className="relative overflow-hidden rounded-[2.2rem] border border-line/70 bg-navy p-7 text-white md:p-10">
          <div className="pointer-events-none absolute -right-20 top-6 h-56 w-56 bg-white/9 [border-radius:64%_36%_68%_32%/31%_58%_42%_69%]" />
          <div className="pointer-events-none absolute -bottom-24 left-[-4.5rem] h-72 w-72 bg-teal/35 [border-radius:35%_65%_45%_55%/54%_32%_68%_46%]" />
          <h2 className="relative text-3xl font-semibold">Βασικές αξίες</h2>
          <ul className="relative mt-5 grid gap-2.5 text-sm text-white/90 md:grid-cols-2 md:text-base">
            {coreValues.map((value) => (
              <li key={value} className="rounded-2xl border border-white/20 bg-white/8 px-4 py-3 backdrop-blur-sm">
                {value}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
