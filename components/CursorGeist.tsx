"use client";

import { useEffect, useRef } from "react";

export default function CursorGeist() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let ticking = false;

    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (dot) dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    const activate = () => dot.classList.add("cursor-geist--active");
    const deactivate = () => dot.classList.remove("cursor-geist--active");
    const hide = () => (dot.style.opacity = "0");
    const show = () => (dot.style.opacity = "1");

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", activate);
    window.addEventListener("mouseup", deactivate);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", activate);
      window.removeEventListener("mouseup", deactivate);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return <div ref={dotRef} className="cursor-geist" aria-hidden />;
}
