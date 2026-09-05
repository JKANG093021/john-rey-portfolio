"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterOnScrollProps = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
};

export function TypewriterOnScroll({
  text,
  speed = 26,
  delay = 90,
  className = "",
}: TypewriterOnScrollProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const [visibleText, setVisibleText] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      setVisibleText(text);
      setStarted(true);
      setDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!started || done) return;

    let index = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setVisibleText(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [delay, done, speed, started, text]);

  return (
    <span ref={rootRef} className={`typewriter-shell ${className}`} aria-label={text}>
      <span className="typewriter-placeholder" aria-hidden="true">{text}</span>
      <span className="typewriter-output" aria-hidden="true">
        {visibleText}
        <span className={`typewriter-caret ${done ? "typewriter-caret-done" : ""}`} />
      </span>
    </span>
  );
}
