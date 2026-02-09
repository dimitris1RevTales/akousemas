import { PageHero } from "@/components/page-hero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Όροι χρήσης"
        title="Πλαίσιο χρήσης υπηρεσιών"
        description="Η AKOUSE MAS παρέχει ενημερωτικό και υποστηρικτικό περιεχόμενο. Οι υπηρεσίες δεν αντικαθιστούν επείγουσα κρατική παρέμβαση."
      />
      <section className="content-shell mt-10 max-w-4xl rounded-3xl border border-line bg-paper p-8 text-sm leading-relaxed text-ink/85">
        <p>
          Το περιεχόμενο του ιστότοπου είναι πληροφοριακό. Για νομικές πράξεις ή κλινικές αποφάσεις απαιτείται εξειδικευμένος επαγγελματίας.
        </p>
        <p className="mt-4">
          Σε περίπτωση άμεσου κινδύνου η προτεραιότητα είναι η επικοινωνία με τις αρμόδιες αρχές (112).
        </p>
      </section>
    </>
  );
}
