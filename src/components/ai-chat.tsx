"use client";

import { FormEvent, useMemo, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const initialMessage: ChatMessage = {
  role: "assistant",
  text: "Είμαι ο Σύμβουλος ΤΝ της AKOUSE MAS. Μπορώ να σε βοηθήσω με επόμενα βήματα για νομική καθοδήγηση, ψυχολογική υποστήριξη και διαθέσιμες γραμμές βοήθειας.",
};

function buildReply(input: string) {
  const text = input.toLowerCase();
  const urgent = ["κίνδυ", "επείγ", "τώρα", "απειλ", "φοβά", "βία"].some((term) => text.includes(term));
  const legal = ["νομ", "δικηγ", "μήνυση", "αστυνομ", "καταγγε", "εισαγγελ"].some((term) => text.includes(term));
  const therapy = ["ψυχ", "θεραπε", "άγχ", "κρίση", "πανικ", "τραύμα"].some((term) => text.includes(term));

  if (urgent) {
    return "Αυτό μοιάζει επείγον. Αν υπάρχει άμεσος κίνδυνος, κάλεσε τώρα το 112. Για άμεση ψυχολογική βοήθεια κάλεσε 10306 και για παιδιά/εφήβους το 1056. Μπορώ να σου δώσω και βήματα για ασφαλή τεκμηρίωση περιστατικού.";
  }

  if (legal && therapy) {
    return "Μπορείς να κινηθείς παράλληλα: (1) νομική ενημέρωση για επιλογές αναφοράς και (2) ψυχολογική υποστήριξη για σταθεροποίηση. Πρακτικά επόμενα βήματα: κράτησε χρονογραμμή γεγονότων, αποθήκευσε αποδείξεις, μίλα με εξειδικευμένο δικηγόρο και κλείσε ραντεβού με ψυχολόγο τραύματος.";
  }

  if (legal) {
    return "Για νομική κατεύθυνση στην Ελλάδα: ξεκίνα με καταγραφή περιστατικού (ημερομηνίες, μάρτυρες, στοιχεία), φύλαξε ψηφιακά αποδεικτικά χωρίς επεξεργασία και ζήτησε ενημέρωση από δικηγόρο με εμπειρία σε υποθέσεις κακοποίησης. Αν θέλεις, δώσε μου το πλαίσιο σου για να σου επιστρέψω check-list 24 ωρών.";
  }

  if (therapy) {
    return "Η αντίδρασή σου είναι έγκυρη. Για σταθεροποίηση, δοκίμασε άμεση γείωση (αναπνοή 4-4-6, νερό, επικοινωνία με ασφαλές πρόσωπο) και προγραμμάτισε υποστήριξη από ψυχολόγο με εξειδίκευση στο τραύμα. Μπορώ να σου δώσω συγκεκριμένο πλάνο εβδομάδας.";
  }

  return "Μπορώ να βοηθήσω σε τρεις κατευθύνσεις: 1) άμεση ασφάλεια, 2) νομική καθοδήγηση, 3) ψυχολογική υποστήριξη. Γράψε μου τι σε απασχολεί και θα σου προτείνω συγκεκριμένα επόμενα βήματα.";
}

export function AiChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");

  const disclaimer = useMemo(
    () =>
      "Το εργαλείο παρέχει ενημερωτική καθοδήγηση και δεν αντικαθιστά δικηγόρο, ψυχολόγο ή επείγουσες υπηρεσίες.",
    [],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = input.trim();
    if (!value) {
      return;
    }

    const userMessage: ChatMessage = { role: "user", text: value };
    const assistantMessage: ChatMessage = { role: "assistant", text: buildReply(value) };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
  }

  return (
    <section className="grid gap-6 rounded-3xl border border-line bg-paper p-6 md:p-8">
      <p className="rounded-xl border border-alert/30 bg-alert/10 px-4 py-3 text-sm font-medium text-alert">{disclaimer}</p>
      <div className="max-h-[420px] space-y-3 overflow-y-auto pr-2">
        {messages.map((message, index) => (
          <article
            key={`${message.role}-${index}`}
            className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              message.role === "assistant" ? "bg-sand" : "ml-auto max-w-[90%] bg-teal text-white"
            }`}
          >
            {message.text}
          </article>
        ))}
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 md:flex-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Περιέγραψε τι χρειάζεσαι..."
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none ring-teal transition focus:ring-2"
        />
        <button
          type="submit"
          className="rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-deep"
        >
          Αποστολή
        </button>
      </form>
    </section>
  );
}
