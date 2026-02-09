"use client";

import { useEffect, useRef, type PointerEvent } from "react";

type PodcastHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const confettiDots = [
  { top: "8%", left: "10%", size: "10px", tone: "bg-gold/85", moveX: 52, moveY: 34, shape: "rounded-full", drift: "8px", delay: "0.1s", speed: "4.8s" },
  { top: "12%", left: "82%", size: "14px", tone: "bg-clay/90", moveX: -48, moveY: 36, shape: "rounded-sm rotate-12", drift: "9px", delay: "0.6s", speed: "5.4s" },
  { top: "18%", left: "58%", size: "8px", tone: "bg-white/85", moveX: 42, moveY: 40, shape: "rounded-full", drift: "7px", delay: "1.1s", speed: "4.6s" },
  { top: "24%", left: "22%", size: "12px", tone: "bg-teal/85", moveX: -36, moveY: 30, shape: "rounded-sm -rotate-6", drift: "8px", delay: "0.8s", speed: "5.2s" },
  { top: "30%", left: "90%", size: "9px", tone: "bg-gold/85", moveX: 44, moveY: 32, shape: "rounded-full", drift: "8px", delay: "1.6s", speed: "4.9s" },
  { top: "35%", left: "72%", size: "16px", tone: "bg-clay/80", moveX: -50, moveY: 38, shape: "rounded-sm rotate-12", drift: "10px", delay: "0.2s", speed: "5.7s" },
  { top: "42%", left: "9%", size: "11px", tone: "bg-white/85", moveX: 38, moveY: 28, shape: "rounded-full", drift: "7px", delay: "1.9s", speed: "5s" },
  { top: "48%", left: "35%", size: "15px", tone: "bg-teal/80", moveX: -46, moveY: 40, shape: "rounded-sm rotate-6", drift: "9px", delay: "0.5s", speed: "5.5s" },
  { top: "56%", left: "82%", size: "10px", tone: "bg-gold/85", moveX: 34, moveY: 26, shape: "rounded-full", drift: "7px", delay: "1.4s", speed: "4.7s" },
  { top: "62%", left: "19%", size: "13px", tone: "bg-clay/85", moveX: -40, moveY: 34, shape: "rounded-sm -rotate-12", drift: "8px", delay: "1.2s", speed: "5.1s" },
  { top: "68%", left: "48%", size: "9px", tone: "bg-white/80", moveX: 56, moveY: 42, shape: "rounded-full", drift: "7px", delay: "0.9s", speed: "4.5s" },
  { top: "74%", left: "66%", size: "12px", tone: "bg-teal/75", moveX: -32, moveY: 24, shape: "rounded-sm rotate-12", drift: "8px", delay: "0.3s", speed: "5.3s" },
  { top: "78%", left: "6%", size: "8px", tone: "bg-gold/85", moveX: 36, moveY: 30, shape: "rounded-full", drift: "6px", delay: "1.8s", speed: "4.9s" },
  { top: "82%", left: "86%", size: "13px", tone: "bg-clay/80", moveX: -54, moveY: 38, shape: "rounded-sm -rotate-6", drift: "8px", delay: "0.7s", speed: "5.8s" },
  { top: "16%", left: "42%", size: "11px", tone: "bg-gold/85", moveX: 30, moveY: 24, shape: "rounded-sm rotate-12", drift: "8px", delay: "1.3s", speed: "4.8s" },
  { top: "52%", left: "54%", size: "14px", tone: "bg-white/80", moveX: -58, moveY: 44, shape: "rounded-full", drift: "10px", delay: "0.4s", speed: "5.6s" },
  { top: "86%", left: "56%", size: "12px", tone: "bg-teal/75", moveX: 34, moveY: 26, shape: "rounded-sm rotate-12", drift: "8px", delay: "1.5s", speed: "5.2s" },
];

export function PodcastHero({ eyebrow, title, description }: PodcastHeroProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const animate = () => {
      const element = wrapperRef.current;
      if (!element) return;

      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.09;
      current.y += (target.y - current.y) * 0.09;

      element.style.setProperty("--mouse-x", current.x.toFixed(4));
      element.style.setProperty("--mouse-y", current.y.toFixed(4));
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const element = wrapperRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    targetRef.current = {
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    };
  };

  const resetPointer = () => {
    targetRef.current = { x: 0, y: 0 };
  };

  return (
    <section className="content-shell pt-8 md:pt-12">
      <div
        ref={wrapperRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        className="relative isolate min-h-[74vh] overflow-hidden rounded-[34px] border border-line bg-navy px-6 py-10 md:px-10 md:py-14"
        style={{
          ["--mouse-x" as string]: 0,
          ["--mouse-y" as string]: 0,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,200,101,0.35),transparent_36%),radial-gradient(circle_at_80%_15%,rgba(24,123,131,0.38),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(201,95,56,0.35),transparent_38%)]" />
        <div
          className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-white/15 blur-3xl"
          style={{
            transform:
              "translate(calc(var(--mouse-x) * -52px), calc(var(--mouse-y) * -58px))",
          }}
        />
        <div
          className="absolute -left-24 bottom-8 h-80 w-80 rounded-full bg-gold/25 blur-3xl"
          style={{
            transform:
              "translate(calc(var(--mouse-x) * 64px), calc(var(--mouse-y) * 52px))",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/20 blur-3xl"
          style={{
            transform:
              "translate(calc(-50% + var(--mouse-x) * 42px), calc(-50% + var(--mouse-y) * -36px))",
          }}
        />

        {confettiDots.map((dot, index) => (
          <span
            key={`${dot.top}-${dot.left}-${index}`}
            className="absolute transition-transform duration-150"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              transform: `translate(calc(var(--mouse-x) * ${dot.moveX}px), calc(var(--mouse-y) * ${dot.moveY}px))`,
            }}
          >
            <span
              className={`podcast-confetti-dot block h-full w-full ${dot.shape} ${dot.tone} shadow-[0_6px_18px_rgba(0,0,0,0.25)]`}
              style={{
                ["--dot-drift" as string]: dot.drift,
                animationDelay: dot.delay,
                animationDuration: dot.speed,
              }}
            />
          </span>
        ))}

        <div className="relative z-10 flex min-h-[60vh] items-center">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
            <h1 className="mt-5 text-5xl leading-[1.04] font-semibold text-white md:text-7xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
