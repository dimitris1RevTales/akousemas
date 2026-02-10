import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Agentation } from "agentation";
import "./globals.css";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spectral = Noto_Serif({
  variable: "--font-spectral",
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AKOUSE MAS | Υποστήριξη Επιζώντων",
  description:
    "Μη κερδοσκοπική πρωτοβουλία για την πρόληψη της παιδικής σεξουαλικής κακοποίησης και την υποστήριξη επιζώντων.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={`${manrope.variable} ${spectral.variable} antialiased`}>
        <div className="min-h-screen bg-sand text-ink">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sand"
          >
            Μετάβαση στο περιεχόμενο
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <Link
            href="/amesi-voitheia"
            className="fixed bottom-4 right-4 z-40 rounded-full bg-alert px-5 py-3 text-sm font-bold text-white shadow-lg shadow-alert/40 transition hover:translate-y-[-1px]"
          >
            Χρειάζομαι βοήθεια τώρα
          </Link>
        </div>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
