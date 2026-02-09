import { PageHero } from "@/components/page-hero";
import { hotlineContacts } from "@/lib/site-data";

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Άμεση βοήθεια"
        title="Αν χρειάζεσαι βοήθεια τώρα"
        description="Δεν χρειάζεται να εξηγήσεις τα πάντα για να ζητήσεις στήριξη. Ξεκίνα με μια ασφαλή κλήση."
      />
      <section className="content-shell mt-10 grid gap-4 md:grid-cols-2">
        {hotlineContacts.map((contact) => (
          <article key={contact.name} className="rounded-2xl border border-line bg-paper p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-clay">{contact.name}</p>
            <p className="mt-2 text-3xl font-bold text-alert">{contact.detail}</p>
          </article>
        ))}
      </section>
    </>
  );
}
