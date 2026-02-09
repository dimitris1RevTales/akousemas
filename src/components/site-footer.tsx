import Image from "next/image";
import Link from "next/link";
import { siteLogo } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="content-shell grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="inline-flex rounded-md bg-white/90 px-3 py-2">
            <Image src={siteLogo} alt="AKOUSE MAS" width={450} height={120} className="h-10 w-auto md:h-12" />
          </div>
          <p className="mt-3 text-sm text-white/75">
            Μη κερδοσκοπική πρωτοβουλία πρόληψης παιδικής σεξουαλικής κακοποίησης και υποστήριξης επιζώντων.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-gold">Σχετικά</p>
          <Link href="/schetika-me-emas" className="block text-white/80 hover:text-white">
            Αποστολή & Όραμα
          </Link>
          <Link href="/diafaneia" className="block text-white/80 hover:text-white">
            Διαφάνεια
          </Link>
          <Link href="/podcast" className="block text-white/80 hover:text-white">
            Ποντκαστ
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-gold">Υποστήριξη</p>
          <Link href="/amesi-voitheia" className="block text-white/80 hover:text-white">
            Άμεση βοήθεια
          </Link>
          <Link href="/ai-symvoulos" className="block text-white/80 hover:text-white">
            Σύμβουλος ΤΝ
          </Link>
          <Link href="/oi-doyleies-mas" className="block text-white/80 hover:text-white">
            Βάση γνώσης
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-gold">Επικοινωνία</p>
          <p className="text-white/80">Θεσσαλονίκη, Ελλάδα</p>
          <p className="text-white/80">+30 697 424 4842</p>
          <p className="text-white/80">akousemas@protonmail.com</p>
          <div className="pt-2">
            <Link href="/aporrito" className="mr-4 text-white/70 hover:text-white">
              Απόρρητο
            </Link>
            <Link href="/oroi" className="text-white/70 hover:text-white">
              Όροι
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-4 text-center text-xs text-white/65">
        © 2026 AKOUSE MAS. Η υποστήριξή σας είναι σημαντική για την προστασία παιδιών και επιζώντων.
      </div>
    </footer>
  );
}
