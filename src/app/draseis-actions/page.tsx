import { PageHero } from "@/components/page-hero";
import { actionItems } from "@/lib/site-data";

export default function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Δράσεις"
        title="Πρόληψη, εκπαίδευση, ενδυνάμωση"
        description="Σχεδιάζουμε παρεμβάσεις με μετρήσιμο κοινωνικό αποτύπωμα και συνεργασίες με φορείς σε όλη την Ελλάδα."
      />
      <section className="content-shell mt-10 grid gap-5 md:grid-cols-2">
        {actionItems.map((item) => (
          <article key={item} className="rounded-2xl border border-line bg-paper p-6">
            <h2 className="text-xl font-semibold text-teal-deep">{item}</h2>
            <p className="mt-2 text-sm text-ink/75">
              Ενεργή συμμετοχή εθελοντών, συνεχή αξιολόγηση και προτεραιότητα στην ασφάλεια παιδιών και επιζώντων.
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
