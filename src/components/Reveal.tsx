"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export default function Reveal({
  children,
  delay = 0,
  once = true,
  direction = "up",
  distance = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0,0,0)";

    switch (direction) {
      case "left":
        return `translate3d(-${distance}px,0,0)`;
      case "right":
        return `translate3d(${distance}px,0,0)`;
      case "up":
        return `translate3d(0,${distance}px,0)`;
      case "down":
        return `translate3d(0,-${distance}px,0)`;
      default:
        return `translate3d(0,${distance}px,0)`;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}