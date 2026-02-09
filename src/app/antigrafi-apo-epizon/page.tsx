import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function SurvivorPage() {
  return (
    <>
      <PageHero
        eyebrow="Επιζών/Επιζώσα"
        title="Δεν είσαι μόνος/μόνη"
        description="Αυτή η ενότητα προορίζεται για ενήλικες που έχουν βιώσει παιδική σεξουαλική κακοποίηση και αναζητούν υποστήριξη, ασφάλεια και κοινότητα."
      />
      <section className="content-shell mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="rounded-3xl border border-line bg-paper p-7 md:p-9">
          <h2 className="text-2xl font-semibold text-teal-deep">Ομάδα υποστήριξης</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Είτε ταυτίζεσαι ως θύμα, είτε ως επιζών/επιζώσα, να ξέρεις ότι δεν φταις για αυτό που συνέβη και υπάρχει διαθέσιμη
            υποστήριξη για να σε βοηθήσει στο ταξίδι προς τη θεραπεία.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Στην ηλεκτρονική ομάδα μπορείς να μοιραστείς την ιστορία, τους φόβους και τις αμφιβολίες σου και να λάβεις στήριξη από
            άλλους επιζώντες με παρόμοιες εμπειρίες. Εδώ μπορείς να μιλήσεις ελεύθερα.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            Η συμμετοχή είναι δωρεάν και αφορά ενήλικες 18+ που έχουν υποστεί σεξουαλική κακοποίηση ως παιδιά ή έφηβοι.
          </p>
          <a
            href="https://www.tapatalk.com/groups/akousemas/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-clay hover:underline"
          >
            Μετάβαση στην κοινότητα
          </a>
        </article>

        <article className="rounded-3xl border border-line bg-navy p-7 text-white md:p-9">
          <h2 className="text-2xl font-semibold text-gold">Γράψε την ιστορία σου</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            Ο δρόμος προς τη θεραπεία μπορεί να είναι επίπονος και τρομακτικός, αλλά δεν χρειάζεται να τον περάσεις μόνος/μόνη. Το
            σπάσιμο της σιωπής είναι συχνά το πρώτο βήμα προς την ανάκαμψη.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            Η δική σου ιστορία μπορεί να δώσει ελπίδα και να κινητοποιήσει άλλους. Κάθε ιστορία μπορεί να δημοσιευτεί με τα στοιχεία
            που εσύ επιθυμείς, ανώνυμα ή επώνυμα.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            Το να είσαι μέρος μιας ομάδας υποστήριξης αυξάνει την εμπιστοσύνη προς τους άλλους, βοηθά να αισθάνεσαι λιγότερο
            απομονωμένος/η και μπορεί να μειώσει το άγχος.
          </p>
          <Link href="/epikoinonia" className="mt-4 inline-block text-sm font-semibold text-gold hover:underline">
            Ασφαλής επικοινωνία
          </Link>
        </article>
      </section>
    </>
  );
}
