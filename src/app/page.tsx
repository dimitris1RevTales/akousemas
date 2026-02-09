import Image from "next/image";
import Link from "next/link";
import { WaysToHelpGrid } from "@/components/ways-to-help-grid";
import {
  heroImage,
  hotlineContacts,
  impactStats,
  initiatives,
  resources,
  secondaryImage,
  stories,
  waysToHelp,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="content-shell pt-8 md:pt-10">
        <div className="relative overflow-hidden rounded-[34px] border border-white/30 px-6 py-16 md:px-12 md:py-24">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source
              src="https://cdn.prod.website-files.com/667d8d81555e958a89e78d90%2F669ec7efe86332e863dda68a_Black%20Woman%2C%20Smiling%2C%20Hair%20Braid%2C%20Happy-transcode.webm"
              type="video/webm"
            />
            <source
              src="https://cdn.prod.website-files.com/667d8d81555e958a89e78d90%2F669ec7efe86332e863dda68a_Black%20Woman%2C%20Smiling%2C%20Hair%20Braid%2C%20Happy-transcode.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-navy/60" />
          <div className="relative z-10 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">AKOUSE MAS</p>
            <h1 className="mt-4 text-4xl leading-tight font-semibold text-white md:text-7xl">
              Στήριξη και προστασία εκεί που είναι πιο αναγκαία.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Άμεσες επιλογές βοήθειας, survivor-first καθοδήγηση και δράσεις πρόληψης για τον τερματισμό της παιδικής σεξουαλικής
              κακοποίησης.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/amesi-voitheia" className="cta-btn bg-alert text-white hover:bg-alert/90">
                Χρειάζομαι βοήθεια τώρα
              </Link>
              <Link href="/dorees" className="cta-btn bg-gold text-navy hover:bg-gold/90">
                Στήριξε οικονομικά
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-shell pt-12 md:pt-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="rounded-[32px] bg-navy p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">AKOUSE MAS</p>
            <h1 className="mt-4 text-4xl leading-tight font-semibold md:text-6xl">
              Στήριξη, πρόληψη και φωνή για επιζώντες παιδικής σεξουαλικής κακοποίησης
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Με survivor-first προσέγγιση, προσφέρουμε άμεσες επιλογές βοήθειας, ενημέρωση για νομική και ψυχολογική στήριξη,
              και δράσεις που κινητοποιούν κοινότητες σε όλη την Ελλάδα.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/amesi-voitheia" className="cta-btn bg-alert text-white hover:bg-alert/90">
                Χρειάζομαι βοήθεια τώρα
              </Link>
              <Link href="/dorees" className="cta-btn bg-gold text-navy hover:bg-gold/90">
                Στήριξε οικονομικά
              </Link>
            </div>
          </article>
          <article className="relative min-h-[320px] overflow-hidden rounded-[32px]">
            <Image src={heroImage} alt="Υποστηρικτική κοινότητα" fill className="object-cover" priority />
          </article>
        </div>
      </section>

      <section className="content-shell mt-10 grid gap-4 md:grid-cols-4">
        {impactStats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-line bg-paper p-5 text-center">
            <p className="text-3xl font-bold text-teal-deep">{stat.value}</p>
            <p className="mt-2 text-sm text-ink/80">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="content-shell mt-14">
        <div className="relative overflow-hidden rounded-[34px] border border-white/30 bg-navy/70 px-6 py-12 md:px-10 md:py-16">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="https://cdn.coverr.co/videos/coverr-fog-over-the-mountains-1579/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/55" />

          <div className="relative z-10">
            <h2 className="max-w-4xl text-4xl leading-tight font-semibold text-white md:text-7xl">
              Support survivors where it&apos;s needed most.
            </h2>

            <article className="mx-auto mt-10 w-full max-w-xl rounded-[28px] border border-white/60 bg-white/92 p-6 text-navy shadow-2xl shadow-black/20 backdrop-blur-sm md:p-7">
              <p className="text-2xl leading-tight font-semibold md:text-[2rem]">
                Support survivors in need. Donate now to provide them with essential treatment.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-700">Choose amount</p>
                <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
                  <button type="button" className="rounded-lg border border-indigo-400 bg-white px-3 py-2 text-sm font-semibold text-indigo-700">
                    One-time
                  </button>
                  <button type="button" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700">
                    Monthly
                  </button>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["€500", "€250", "€150", "€50", "€25", "€10"].map((amount) => (
                    <button key={amount} type="button" className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-200">
                      {amount}
                    </button>
                  ))}
                </div>

                <div className="mt-3 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-600">€ Other</div>

                <button type="button" className="mt-4 w-full rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-600">
                  Continue
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-shell mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <article className="relative min-h-[340px] overflow-hidden rounded-[28px]">
          <Image src={secondaryImage} alt="Ενημέρωση και εκπαίδευση" fill className="object-cover" />
        </article>
        <article className="rounded-[28px] border border-line bg-paper p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Η ιστορία μας</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">Μετατρέπουμε τη σιωπή σε δίκτυο προστασίας</h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            Δημιουργήσαμε έναν ψηφιακό και ανθρώπινο χώρο όπου επιζώντες, γονείς και επαγγελματίες βρίσκουν ασφαλή ενημέρωση, καθαρές
            διαδρομές υποστήριξης και κοινότητα. Ενώνουμε εκπαίδευση, πρόληψη και υπεράσπιση δικαιωμάτων.
          </p>
          <Link href="/schetika-me-emas" className="mt-5 inline-block text-sm font-semibold text-teal hover:underline">
            Δες την αποστολή μας
          </Link>
        </article>
      </section>

      <section className="content-shell mt-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Get involved</p>
            <h2 className="mt-2 text-3xl font-semibold text-navy md:text-4xl">Τέσσερις τρόποι να στηρίξεις την αποστολή</h2>
          </div>
          <Link href="/draseis-actions" className="text-sm font-semibold text-teal hover:underline">
            Όλες οι δράσεις
          </Link>
        </div>
        <WaysToHelpGrid items={waysToHelp} />
      </section>

      <section className="content-shell mt-14 rounded-[30px] bg-navy px-6 py-8 text-white md:px-10 md:py-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold">Ερχόμενες δράσεις και πρωτοβουλίες</h2>
          <Link href="/draseis-actions" className="text-sm font-semibold text-gold hover:underline">
            See all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {initiatives.map((initiative) => (
            <article key={initiative.name} className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wider text-gold">{initiative.when}</p>
              <h3 className="mt-2 text-xl font-semibold">{initiative.name}</h3>
              <p className="mt-2 text-sm text-white/80">{initiative.details}</p>
              <Link href={initiative.href} className="mt-3 inline-block text-sm font-semibold text-gold hover:underline">
                Συμμετοχή
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-shell mt-14">
        <div className="relative overflow-hidden rounded-[30px] px-6 py-10 md:px-10 md:py-12">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="https://cdn.coverr.co/videos/coverr-the-calm-sea-at-sunset-1560/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Video section</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
                Μαζί χτίζουμε ασφάλεια, φωνή και πραγματικές διαδρομές υποστήριξης.
              </h2>
            </div>
            <Link href="/synergasia" className="cta-btn bg-white text-navy hover:bg-white/90">
              Γίνε μέρος της ομάδας
            </Link>
          </div>
        </div>
      </section>

      <section className="content-shell mt-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">Inspiring stories & resources</h2>
          <Link href="/oi-doyleies-mas" className="text-sm font-semibold text-teal hover:underline">
            Βάση γνώσης
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="overflow-hidden rounded-2xl border border-line bg-paper">
              <div className="relative h-40">
                <Image src={story.image} alt={story.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-navy">{story.title}</h3>
                <p className="mt-2 text-sm text-ink/80">{story.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {resources.slice(0, 3).map((resource) => (
            <article key={resource.slug} className="rounded-2xl border border-line bg-paper p-5">
              <h3 className="text-lg font-semibold text-navy">{resource.title}</h3>
              <p className="mt-2 text-sm text-ink/75">{resource.excerpt}</p>
              <Link href={`/oi-doyleies-mas/${resource.slug}`} className="mt-3 inline-block text-sm font-semibold text-clay hover:underline">
                Διαβάστε το άρθρο
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-shell mt-14">
        <div className="rounded-[30px] bg-gold px-6 py-8 md:px-10 md:py-10">
          <h2 className="max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Έτοιμος/η να στηρίξεις την αποστολή μας για προστασία παιδιών και ενδυνάμωση επιζώντων;
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/dorees" className="cta-btn bg-navy text-white hover:bg-navy/90">
              Κάνε δωρεά
            </Link>
            <Link href="/synergasia" className="cta-btn bg-white text-navy hover:bg-white/90">
              Γίνε εθελοντής/εθελόντρια
            </Link>
          </div>
        </div>
      </section>

      <section className="content-shell mt-10 mb-6 grid gap-4 md:grid-cols-4">
        {hotlineContacts.map((contact) => (
          <article key={contact.name} className="rounded-2xl border border-alert/30 bg-alert/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-alert">{contact.name}</p>
            <p className="mt-2 text-2xl font-bold text-alert">{contact.detail}</p>
          </article>
        ))}
      </section>
    </>
  );
}
