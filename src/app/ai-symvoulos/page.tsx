import { AiChat } from "@/components/ai-chat";
import { PageHero } from "@/components/page-hero";

export default function AiAdvisorPage() {
  return (
    <>
      <PageHero
        eyebrow="Σύμβουλος ΤΝ"
        title="Νομική και ψυχολογική καθοδήγηση πρώτης γραμμής"
        description="Περιέγραψε την περίπτωσή σου και λάβε δομημένα επόμενα βήματα για ασφάλεια, νομική δράση και ψυχολογική υποστήριξη."
      />
      <section className="content-shell mt-10 max-w-4xl">
        <AiChat />
      </section>
    </>
  );
}
