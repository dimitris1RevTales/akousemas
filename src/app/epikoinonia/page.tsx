import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Επικοινωνία"
        title="Είμαστε εδώ για εσένα"
        description="Μπορείς να επικοινωνήσεις για υποστήριξη, για να μοιραστείς την ιστορία σου ή για να στηρίξεις τις δράσεις μας."
      />
      <section className="content-shell mt-10 grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-line bg-paper p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-clay">Email</p>
          <p className="mt-3 text-lg font-semibold">akousemas@protonmail.com</p>
        </article>
        <article className="rounded-2xl border border-line bg-paper p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-clay">Τηλέφωνο</p>
          <p className="mt-3 text-lg font-semibold">+30 697 424 4842</p>
        </article>
        <article className="rounded-2xl border border-line bg-paper p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-clay">Κοινωνικά</p>
          <p className="mt-3 text-sm font-medium">LinkedIn / Instagram</p>
        </article>
      </section>
    </>
  );
}
