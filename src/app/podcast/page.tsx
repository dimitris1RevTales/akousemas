import { PageHero } from "@/components/page-hero";
import { podcastEpisodes } from "@/lib/site-data";

export default function PodcastPage() {
  return (
    <>
      <PageHero
        eyebrow="Podcast"
        title="Φωνές που σπάνε τη σιωπή"
        description="Επεισόδια με ειδικούς, επιζώντες και συμμάχους για πρόληψη, θεραπεία και δικαιώματα."
      />
      <section className="content-shell mt-10 grid gap-4 md:grid-cols-3">
        {podcastEpisodes.map((episode) => (
          <article key={episode.title} className="rounded-2xl border border-line bg-paper p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-clay">{episode.duration}</p>
            <h2 className="mt-2 text-xl font-semibold text-teal-deep">{episode.title}</h2>
            <p className="mt-3 text-sm text-ink/80">{episode.summary}</p>
          </article>
        ))}
      </section>
    </>
  );
}
