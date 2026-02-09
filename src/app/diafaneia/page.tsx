import { PageHero } from "@/components/page-hero";

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Διαφάνεια"
        title="Λογοδοσία και διακυβέρνηση"
        description="Η εμπιστοσύνη χτίζεται με ξεκάθαρες διαδικασίες, δημόσια πληροφόρηση και ηθικά πρότυπα προστασίας."
      />
      <section className="content-shell mt-10 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-line bg-paper p-6">
          <h2 className="text-xl font-semibold text-teal-deep">Ετήσιες αναφορές</h2>
          <p className="mt-3 text-sm text-ink/80">Στόχοι, δράσεις, δείκτες επίδρασης και οικονομικός απολογισμός.</p>
        </article>
        <article className="rounded-2xl border border-line bg-paper p-6">
          <h2 className="text-xl font-semibold text-teal-deep">Safeguarding policy</h2>
          <p className="mt-3 text-sm text-ink/80">Πρωτόκολλα ασφάλειας παιδιών και επιζώντων σε όλες τις παρεμβάσεις.</p>
        </article>
        <article className="rounded-2xl border border-line bg-paper p-6">
          <h2 className="text-xl font-semibold text-teal-deep">Κώδικας δεοντολογίας</h2>
          <p className="mt-3 text-sm text-ink/80">Αρχές εμπιστευτικότητας, μη διάκρισης και υπεύθυνης επικοινωνίας.</p>
        </article>
      </section>
    </>
  );
}
