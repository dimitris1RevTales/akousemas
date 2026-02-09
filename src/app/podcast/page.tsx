import Image from "next/image";
import { PodcastHero } from "@/components/podcast-hero";
import { podcastEpisodes } from "@/lib/site-data";

export default function PodcastPage() {
  const [featuredEpisode, ...otherEpisodes] = podcastEpisodes;

  const platformLinks = [
    { label: "Apple Podcasts", href: "https://podcasts.apple.com/" },
    { label: "Spotify", href: "https://open.spotify.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ];

  return (
    <>
      <PodcastHero
        eyebrow="Ποντκαστ"
        title="Φωνές που σπάνε τη σιωπή"
        description="Επεισόδια με ειδικούς, επιζώντες και συμμάχους για πρόληψη, θεραπεία και δικαιώματα. Νέα επεισόδια κάθε εβδομάδα."
      />

      <section className="content-shell mt-10">
        <article className="group relative overflow-hidden rounded-[30px] border border-line bg-navy">
          <div className="absolute inset-0">
            <Image src={featuredEpisode.image} alt={featuredEpisode.title} fill priority className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-black/20" />
          </div>
          <div className="relative z-10 p-6 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Προτεινόμενο επεισόδιο</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">{featuredEpisode.episode}</span>
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">{featuredEpisode.date}</span>
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">{featuredEpisode.duration}</span>
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight font-semibold md:text-5xl">{featuredEpisode.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90">{featuredEpisode.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noreferrer"
                className="cta-btn bg-gold text-navy hover:bg-gold/90"
              >
                Άκουσε στο Spotify
              </a>
              {featuredEpisode.watchUrl ? (
                <a
                  href={featuredEpisode.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn border border-white/40 bg-white/10 text-white hover:bg-white/20"
                >
                  Δες στο YouTube
                </a>
              ) : null}
            </div>
          </div>
        </article>
      </section>

      <section className="content-shell mt-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Πρόσφατα επεισόδια</h2>
          <p className="text-sm font-semibold text-clay">{otherEpisodes.length} επεισόδια</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherEpisodes.map((episode) => (
            <article
              key={episode.title}
              className="group overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <Image src={episode.image} alt={episode.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/15" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy">{episode.episode}</div>
                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">{episode.date}</p>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-clay">{episode.duration}</p>
                <h3 className="mt-2 text-xl leading-snug font-semibold text-teal-deep">{episode.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{episode.summary}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href="https://open.spotify.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-navy px-3 py-2 text-xs font-semibold text-white transition hover:bg-navy/90"
                  >
                    Spotify
                  </a>
                  {episode.watchUrl ? (
                    <a
                      href={episode.watchUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-line px-3 py-2 text-xs font-semibold text-ink transition hover:bg-sand"
                    >
                      YouTube
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-shell mt-12">
        <div className="rounded-[28px] bg-navy px-6 py-8 text-white md:px-10 md:py-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Μείνε συντονισμένος/η στα νέα επεισόδια</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Ακολούθησε το podcast σε Apple Podcasts, Spotify και YouTube για κάθε νέο επεισόδιο.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {platformLinks.map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className="cta-btn bg-white text-navy hover:bg-white/90"
              >
                {platform.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
