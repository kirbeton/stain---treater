"use client";
import { useState } from "react";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percentage)));
  };

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-col-resize"
      onMouseMove={handleMove}
      onTouchMove={(e) => handleMove(e.touches[0])}
    >
      {/* AFTER */}
      <img
        src="/image/after.png"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BEFORE */}
      <img
        src="/image/before.png"
        className="absolute inset-0 h-full object-cover"
        style={{ width: `${position}%` }}
      />

      {/* SLIDER LINE */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-md"
        style={{ left: `${position}%` }}
      />

      {/* HANDLE */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg border border-slate-300"
        style={{ left: `calc(${position}% - 12px)` }}
      />
    </div>
  );
}
