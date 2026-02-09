import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Σχετικά με εμάς"
        title="Ποιοι είμαστε"
        description="Η Αστική Μη Κερδοσκοπική Εταιρία «Άκουσε μας» είναι μια εθελοντική συμμαχία για τον τερματισμό της παιδικής σεξουαλικής κακοποίησης μέσα από βοήθεια στα θύματα, ενημέρωση, ευαισθητοποίηση, εκπαίδευση και δημόσιο διάλογο."
      />
      <section className="content-shell mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <article className="rounded-3xl border border-line bg-paper p-7 md:p-10">
          <p className="text-base leading-relaxed text-ink/85">
            Η ομάδα μας, οι σύμμαχοί μας και οι υποστηρικτές μας χρησιμοποιούν τη δύναμη της φωνής τους για να κινητοποιήσουν
            κοινότητες σε όλη την Ελλάδα. Στόχος μας είναι να σπάσει η σιωπή, να αυξηθεί η πρόληψη και να ενισχυθεί η πρόσβαση σε
            ασφαλείς διαδρομές υποστήριξης για κάθε επιζώντα.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/85">
            Πιστεύουμε ότι η αλλαγή δεν έρχεται μόνο μέσα από υπηρεσίες πρώτης γραμμής, αλλά και από τη διαμόρφωση πολιτικών,
            συνεργασιών και κοινωνικής συνείδησης που προστατεύουν παιδιά και ενδυναμώνουν οικογένειες.
          </p>
        </article>
        <article className="rounded-3xl border border-line bg-white/70 p-7 md:p-10">
          <h2 className="text-2xl font-semibold text-navy">Όραμα</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/85">
            <li>Η σεξουαλική κακοποίηση των παιδιών αντιμετωπίζεται ενεργά και συζητείται ανοιχτά.</li>
            <li>Ακούγεται η φωνή των θυμάτων παιδικής σεξουαλικής κακοποίησης.</li>
          </ul>
          <h2 className="mt-7 text-2xl font-semibold text-navy">Αποστολή</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/85">
            Δημιουργούμε κοινωνίες απαλλαγμένες από την παιδική σεξουαλική κακοποίηση προσφέροντας ενημέρωση, στήριξη και φωνή
            στους επιζώντες.
          </p>
        </article>
      </section>

      <section className="content-shell mt-8 rounded-3xl border border-line bg-navy px-7 py-8 text-white md:px-10">
        <h2 className="text-2xl font-semibold">Βασικές αξίες</h2>
        <p className="mt-3 max-w-5xl text-sm leading-relaxed text-white/85">
          Λήψη αποφάσεων με επίκεντρο το θύμα, συμπόνια και ενσυναίσθηση, προσβασιμότητα και επιλογή, αλληλεπίδραση, αξιοπρέπεια και
          σεβασμός, ασφάλεια και εμπιστευτικότητα, ευεξία και αυτοφροντίδα, ακεραιότητα και υπευθυνότητα.
        </p>
      </section>
    </>
  );
}
