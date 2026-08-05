"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setVisible(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, input, textarea"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[999] transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${hovering ? 1.4 : 1})`,
      }}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2 C 12.5 5, 15 5.5, 17 3.5 C 15.5 6, 16 8.5, 19 9 C 16 9.3, 14.5 11.5, 16 14 C 13.3 12.5, 11.5 13, 11 15.5 C 10.5 13, 8.7 12.5, 6 14 C 7.5 11.5, 6 9.3, 3 9 C 6 8.5, 6.5 6, 5 3.5 C 7 5.5, 9.5 5, 11 2 Z"
          fill={hovering ? "#FF7AA2" : "none"}
          stroke="#FF7AA2"
          strokeWidth="1.3"
        />
      </svg>
    </div>
  );
}