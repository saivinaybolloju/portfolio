"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(700px circle at ${position.x}px ${position.y}px, rgba(245, 192, 106, 0.14), transparent 42%)`,
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(240, 168, 208, 0.1), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(201, 184, 255, 0.08), transparent 38%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
