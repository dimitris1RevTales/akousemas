"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CSSProperties, MouseEvent } from "react";

type WayToHelp = {
  title: string;
  description: string;
  href: string;
  image: string;
};

type WaysToHelpGridProps = {
  items: WayToHelp[];
};

export function WaysToHelpGrid({ items }: WaysToHelpGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <TiltCard key={item.title} item={item} />
      ))}
    </div>
  );
}

function TiltCard({ item }: { item: WayToHelp }) {
  const [style, setStyle] = useState<Record<string, string>>({
    "--rx": "0deg",
    "--ry": "0deg",
    "--tz": "0px",
  });

  function onMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rx = (0.5 - py) * 12;
    const ry = (px - 0.5) * 14;

    setStyle({
      "--rx": `${rx.toFixed(2)}deg`,
      "--ry": `${ry.toFixed(2)}deg`,
      "--tz": "10px",
    });
  }

  function onLeave() {
    setStyle({
      "--rx": "0deg",
      "--ry": "0deg",
      "--tz": "0px",
    });
  }

  return (
    <div className="[perspective:1200px]">
      <article
        className="group overflow-hidden rounded-2xl border border-line bg-paper transition duration-150 ease-out will-change-transform hover:shadow-2xl hover:shadow-navy/25"
        style={{
          transform: "rotateX(var(--rx)) rotateY(var(--ry)) translateY(calc(var(--tz) * -0.8))",
          ...style,
        } as CSSProperties}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="relative h-40">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-70 transition group-hover:opacity-90" />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
          <p className="mt-2 text-sm text-ink/80">{item.description}</p>
          <Link href={item.href} className="mt-4 inline-block text-sm font-semibold text-clay hover:underline">
            Μάθε περισσότερα
          </Link>
        </div>
      </article>
    </div>
  );
}
