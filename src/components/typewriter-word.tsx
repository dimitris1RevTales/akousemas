"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterWordProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  className?: string;
};

export function TypewriterWord({
  words,
  typingSpeed = 170,
  deletingSpeed = 120,
  pauseAfterType = 1200,
  pauseAfterDelete = 220,
  className,
}: TypewriterWordProps) {
  const wordsByChar = useMemo(() => words.map((word) => Array.from(word)), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (wordsByChar.length === 0) {
      return;
    }

    const currentWordLength = wordsByChar[wordIndex]?.length ?? 0;
    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWordLength) {
      delay = pauseAfterType;
    }

    if (isDeleting && charIndex === 0) {
      delay = pauseAfterDelete;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWordLength) {
          setCharIndex((value) => value + 1);
          return;
        }

        setIsDeleting(true);
        return;
      }

      if (charIndex > 0) {
        setCharIndex((value) => value - 1);
        return;
      }

      setIsDeleting(false);
      setWordIndex((value) => (value + 1) % wordsByChar.length);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [charIndex, deletingSpeed, isDeleting, pauseAfterDelete, pauseAfterType, typingSpeed, wordIndex, wordsByChar]);

  const displayedWord = wordsByChar[wordIndex]?.slice(0, charIndex).join("") ?? "";
  const textEffectClass =
    "bg-linear-to-b from-white/95 via-white/75 to-white/45 bg-clip-text text-transparent [text-shadow:0_1px_10px_rgba(255,255,255,0.25)]";

  return (
    <span className="inline-grid align-baseline text-left">
      {words.map((word) => (
        <span
          key={word}
          className={`invisible col-start-1 row-start-1 inline-block whitespace-nowrap ${textEffectClass} ${className ?? ""}`}
          style={{ WebkitTextStroke: "0.4px rgba(255,255,255,0.35)" }}
          aria-hidden="true"
        >
          {word}|
        </span>
      ))}
      <span className="col-start-1 row-start-1 inline-flex items-baseline whitespace-nowrap">
        <span
          className={`inline-block whitespace-nowrap ${textEffectClass} ${className ?? ""}`}
          style={{ WebkitTextStroke: "0.4px rgba(255,255,255,0.35)" }}
        >
          {displayedWord}
        </span>
        <span className="typewriter-cursor ml-[0.06em] inline-block" aria-hidden="true">
          |
        </span>
      </span>
      <style jsx>{`
        .typewriter-cursor {
          animation: typewriter-blink 1s step-end infinite;
        }

        @keyframes typewriter-blink {
          0%,
          45% {
            opacity: 1;
          }
          46%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}
