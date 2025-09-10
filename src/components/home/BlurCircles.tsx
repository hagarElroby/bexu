"use client";

import React from "react";
import { motion } from "framer-motion";

type Blob = {
  id: number;
  color: string;
  halo: string;
  size: number;
  x: number;
  y: number;
  duration: number;
};

const BLOBS: Blob[] = [
  {
    id: 1,
    color: "#700c18",
    halo: "rgba(112,12,24,0.2)",
    size: 600,
    x: -120,
    y: -80,
    duration: 14,
  },
  {
    id: 2,
    color: "#0084FF",
    halo: "rgba(0,132,255,0.15)",
    size: 500,
    x: 160,
    y: -40,
    duration: 16,
  },
  // stronger white glow (more visible)
  {
    id: 3,
    color: "#FFFFFF",
    halo: "rgba(255,255,255,0.25)",
    size: 600,
    x: -40,
    y: 180,
    duration: 18,
  },
];

export default function BlurCircles() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {BLOBS.map((b) => {
        const gradient = `radial-gradient(circle at 30% 30%, ${b.color} 0%, ${b.halo} 40%, transparent 75%)`;
        return (
          <motion.div
            key={b.id}
            initial={{ x: b.x, y: b.y, scale: 1 }}
            animate={{
              x: [b.x, b.x + 80, b.x - 80, b.x],
              y: [b.y, b.y - 60, b.y + 60, b.y],
              rotate: [0, 8, -8, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              translate: "-50% -50%",
              width: b.size,
              height: b.size,
              borderRadius: "50%",
              background: gradient,
              filter: "blur(180px)", // wider blur
              opacity: 1,
              mixBlendMode: "screen",
              pointerEvents: "none",
              willChange: "transform, opacity",
            }}
          />
        );
      })}
    </div>
  );
}
