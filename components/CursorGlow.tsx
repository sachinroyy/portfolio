"use client";

import React from "react";
import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      document.documentElement.style.setProperty("--cursor-x", x);
      document.documentElement.style.setProperty("--cursor-y", y);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div className="cursor-glow" aria-hidden />;
}
