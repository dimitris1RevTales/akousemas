import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { resources } from "@/lib/site-data";

export default function CsaPage() {
  return (
    <>
      <PageHero
        eyebrow="CSA Γνώση"
        title="Παιδική Σεξουαλική Κακοποίηση"
        description="Αξιόπιστο και κατανοητό υλικό για ορισμούς, σημάδια, συνέπειες, νομικές επιλογές και πρόληψη."
      />
      <section className="content-shell mt-10 grid gap-5 md:grid-cols-2">
        {resources.map((resource) => (
          <article key={resource.slug} className="rounded-2xl border border-line bg-paper p-6">
            <h2 className="text-2xl font-semibold text-teal-deep">{resource.title}</h2>
            <p className="mt-3 text-sm text-ink/80">{resource.excerpt}</p>
            <Link href={`/oi-doyleies-mas/${resource.slug}`} className="mt-4 inline-block text-sm font-semibold text-clay hover:underline">
              Άνοιγμα άρθρου
            </Link>
          </article>
        ))}
      </section>

      <section className="content-shell mt-10 rounded-3xl border border-line bg-white/80 p-7">
        <h2 className="text-2xl font-semibold text-navy">Αρχικές δημοσιεύσεις</h2>
        <p className="mt-2 text-sm text-ink/75">Σύνδεσμοι από την αρχική βάση περιεχομένου του οργανισμού:</p>
        <ul className="mt-4 space-y-2 text-sm">
          {[
            "https://www.akousemas.gr/l/oikodomisi-scholeion-kai-promitheia-scholikoy-ylikoy/",
            "https://www.akousemas.gr/l/oikodomisi-scholeion-kai-promitheia-scholikoy-ylikoy2/",
            "https://www.akousemas.gr/l/ekpaideysi-diacheirisis-apovliton-se-koinotites2/",
            "https://www.akousemas.gr/l/anoikodomisi-se-perioches-poy-eplixan-oi-plimmyres2/",
            "https://www.akousemas.gr/l/nea-pigadia-kai-katharo-posimo-nero2/",
          ].map((url) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                {url}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
