import { PageHero } from "@/components/page-hero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Απόρρητο"
        title="Πολιτική ιδιωτικότητας"
        description="Συλλέγουμε τα ελάχιστα απαραίτητα δεδομένα για λειτουργικότητα και ασφάλεια, με σεβασμό στην ευαλωτότητα των χρηστών."
      />
      <section className="content-shell mt-10 max-w-4xl rounded-3xl border border-line bg-paper p-8 text-sm leading-relaxed text-ink/85">
        <p>
          Τα αιτήματα επικοινωνίας αποθηκεύονται για περιορισμένο χρονικό διάστημα και δεν κοινοποιούνται σε τρίτους χωρίς νομική υποχρέωση.
        </p>
        <p className="mt-4">
          Η χρήση του συμβούλου ΤΝ μπορεί να καταγράφει ανώνυμα τεχνικά δεδομένα για βελτίωση ασφάλειας και ποιότητας.
        </p>
      </section>
    </>
  );
}
