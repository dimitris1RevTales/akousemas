import Image from "next/image";
import { heroImage, secondaryImage } from "@/lib/site-data";

const reasons = [
  {
    id: "01",
    title: "Πραγματικός κοινωνικός αντίκτυπος",
    text: "Η προσφορά σου ενισχύει δράσεις πρόληψης, ενημέρωσης και υποστήριξης επιζώντων σε όλη την Ελλάδα.",
  },
  {
    id: "02",
    title: "Συνεργασία με ειδικούς",
    text: "Θα συνεργαστείς με επαγγελματίες ψυχικής υγείας, νομικούς και εκπαιδευτικούς σε δράσεις με ουσιαστικό αποτύπωμα.",
  },
  {
    id: "03",
    title: "Ανάπτυξη δεξιοτήτων",
    text: "Από επικοινωνία και οργάνωση εκδηλώσεων μέχρι περιεχόμενο και χτίσιμο κοινότητας, θα εξελιχθείς πρακτικά.",
  },
  {
    id: "04",
    title: "Στήριξη και καθοδήγηση",
    text: "Λαμβάνεις αρχική εκπαίδευση και ξεκάθαρο πλαίσιο συνεργασίας ώστε να προσφέρεις με ασφάλεια και αυτοπεποίθηση.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <section className="content-shell pt-8 md:pt-10">
        <div className="relative overflow-hidden rounded-[34px] border border-white/30 px-6 py-14 md:px-12 md:py-20">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="https://cdn.coverr.co/videos/coverr-team-celebrating-1576/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy/58" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Εθελοντισμός</p>
            <h1 className="mt-4 text-4xl leading-tight font-semibold text-white md:text-6xl">Γίνε εθελοντής/εθελόντρια και κάνε τη διαφορά</h1>
            <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
              Γίνε μέρος της ομάδας που μετατρέπει τη σιωπή σε ενημέρωση, πρόληψη και ουσιαστική υποστήριξη για επιζώντες.
            </p>
          </div>
        </div>
      </section>

      <section className="content-shell pt-12 md:pt-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <article className="rounded-[32px] bg-navy p-8 text-white md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Εθελοντισμός</p>
            <h1 className="mt-4 text-4xl leading-tight font-semibold md:text-6xl">Γίνε εθελοντής/εθελόντρια και κάνε τη διαφορά</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Η AKOUSE MAS χρειάζεται ανθρώπους με ενσυναίσθηση, συνέπεια και διάθεση προσφοράς. Μαζί μπορούμε να ενισχύσουμε την
              πρόληψη και να στηρίξουμε επιζώντες με αξιοπρέπεια και ασφάλεια.
            </p>
          </article>
          <article className="relative min-h-[320px] overflow-hidden rounded-[32px]">
            <Image src={heroImage} alt="Εθελοντισμός στην AKOUSE MAS" fill className="object-cover" priority />
          </article>
        </div>
      </section>

      <section className="content-shell mt-12 grid gap-4 md:grid-cols-3">
        <article className="relative min-h-[200px] overflow-hidden rounded-2xl">
          <Image src={secondaryImage} alt="Δράσεις κοινότητας" fill className="object-cover" />
        </article>
        <article className="relative min-h-[200px] overflow-hidden rounded-2xl">
          <Image
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Ομαδική συνεργασία"
            fill
            className="object-cover"
          />
        </article>
        <article className="relative min-h-[200px] overflow-hidden rounded-2xl">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Υποστήριξη και συντονισμός"
            fill
            className="object-cover"
          />
        </article>
      </section>

      <section className="content-shell mt-12">
        <h2 className="text-3xl font-semibold text-navy md:text-4xl">Γιατί να γίνεις εθελοντής/εθελόντρια;</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <article key={reason.id} className="rounded-2xl border border-line bg-paper p-6">
              <p className="text-sm font-semibold tracking-wide text-clay">{reason.id}</p>
              <h3 className="mt-2 text-2xl font-semibold text-navy">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-shell mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-line bg-paper p-8">
          <h3 className="text-2xl font-semibold text-navy">Επαγγελματίες</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Ψυχολόγοι, νομικοί, εκπαιδευτικοί, ειδικοί επικοινωνίας και δημιουργοί περιεχομένου μπορούν να συνεισφέρουν με
            εξειδικευμένη γνώση και εμπειρία.
          </p>
        </article>
        <article className="rounded-3xl border border-line bg-paper p-8">
          <h3 className="text-2xl font-semibold text-navy">Γενικοί εθελοντές</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Υποστήριξη δράσεων, οργάνωση εκδηλώσεων, διοικητική βοήθεια, μέσα κοινωνικής δικτύωσης, γραφιστική και οικονομική ενίσχυση.
          </p>
        </article>
      </section>

      <section className="content-shell mt-12 mb-4 rounded-3xl border border-line bg-white/85 p-8 md:p-10">
        <h2 className="text-3xl font-semibold text-navy">Έτοιμος/η να συμμετέχεις;</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/80">
          Συμπλήρωσε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σου με τα επόμενα βήματα.
        </p>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input placeholder="Ονοματεπώνυμο" className="rounded-xl border border-line bg-white px-4 py-3 text-sm" />
          <input placeholder="Ηλεκτρονικό ταχυδρομείο" className="rounded-xl border border-line bg-white px-4 py-3 text-sm" />
          <input placeholder="Τηλέφωνο" className="rounded-xl border border-line bg-white px-4 py-3 text-sm md:col-span-2" />
          <textarea
            placeholder="Σε ποιόν τομέα θέλεις να βοηθήσεις;"
            className="min-h-32 rounded-xl border border-line bg-white px-4 py-3 text-sm md:col-span-2"
          />
          <button type="button" className="rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-deep md:col-span-2">
            Αποστολή ενδιαφέροντος
          </button>
        </form>
      </section>
    </>
  );
}
