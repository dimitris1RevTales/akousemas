import { PageHero } from "@/components/page-hero";

export default function DonationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Δωρεές"
        title="Στήριξε την αποστολή μας"
        description="Κάθε συνεισφορά στηρίζει ομάδες επιζώντων, εκπαιδεύσεις πρόληψης και άμεσες παρεμβάσεις ενημέρωσης."
      />
      <section className="content-shell mt-10 max-w-3xl">
        <article className="rounded-3xl border border-line bg-paper p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-clay">Τραπεζικός λογαριασμός</p>
          <p className="mt-3 text-xl font-bold text-teal-deep">GR9202602110000610201106231</p>
          <p className="mt-5 text-sm text-ink/85">Eurobank</p>
          <p className="text-sm text-ink/85">SWIFT: ERBKGRAAXXX</p>
        </article>
      </section>
    </>
  );
}
