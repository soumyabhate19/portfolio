"use client";

import { useId } from "react";

const positions = {
  "top-right": "-right-16 -top-16",
  "top-left": "-left-16 -top-16",
  "bottom-right": "-right-20 -bottom-20",
  "bottom-left": "-left-20 -bottom-20",
};

const sizeMap = {
  sm: "h-[320px] w-[320px]",
  lg: "h-[450px] w-[450px] lg:h-[460px] lg:w-[460px]",
};

export default function FloralFlourish({
  variant = "top-right",
  photoSrc,
  layout = "absolute",
  size = "lg",
}: {
  variant?: keyof typeof positions;
  photoSrc?: string;
  layout?: "absolute" | "static";
  size?: keyof typeof sizeMap;
}) {
  const reactId = useId();
  const clipId = `floral-photo-clip-${reactId}`;
  const petalPath =
    "M200 40 C 220 90, 260 100, 290 70 C 270 110, 280 150, 320 160 C 280 165, 260 200, 280 240 C 245 215, 210 225, 195 265 C 190 225, 155 210, 120 230 C 145 195, 135 155, 100 135 C 140 140, 170 115, 165 75 C 185 105, 210 95, 200 40 Z";

  const positionClasses =
    layout === "static"
      ? "relative block mx-auto"
      : `absolute ${positions[variant]} h-[360px] w-[360px] sm:h-[420px] sm:w-[420px]`;

  const sizeClasses = layout === "static" ? sizeMap[size] : "";

  return (
    <svg
      viewBox="0 0 400 400"
      className={`pointer-events-none ${positionClasses} ${sizeClasses} opacity-[0.8]`}
      fill="none"
      aria-hidden="true"
    >
      {photoSrc && (
        <>
          <clipPath id={clipId}>
            <circle cx="200" cy="170" r="90" />
          </clipPath>
          <image
            href={photoSrc}
            x="110"
            y="60"
            width="190"
            height="190"
            preserveAspectRatio="xMidYMid meet"
            clipPath={`url(#${clipId})`}
          />
          <circle
            cx="200"
            cy="170"
            r="90"
            stroke="#E8894A"
            strokeWidth="1.5"
          />
        </>
      )}
      <path d={petalPath} stroke="#E8894A" strokeWidth="1.5" />
      {!photoSrc && (
        <circle cx="200" cy="150" r="6" stroke="#6B4423" strokeWidth="1.5" />
      )}
      <path
        d="M60 300 C 90 280, 110 290, 115 320 C 95 305, 75 315, 60 300 Z"
        stroke="#4B7A3D"
        strokeWidth="1.5"
      />
      <path
        d="M330 280 C 300 265, 285 280, 290 310 C 305 290, 325 295, 330 280 Z"
        stroke="#4B7A3D"
        strokeWidth="1.5"
      />
    </svg>
  );
}
