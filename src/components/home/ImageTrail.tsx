"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  items: string[]; // images (public/) e.g. "/images/img1.jpg"
  size?: number; // base size in px
  life?: number; // milliseconds to keep image visible (default 1000)
  jitter?: number; // max px random offset from cursor
  minInterval?: number; // min ms between spawns
  maxConcurrent?: number; // limit simultaneous sprites
};

type ActiveItem = {
  id: number;
  x: number;
  y: number;
  src: string;
  rotate: number;
  size: number;
};

export default function ImageTrail({
  items,
  size = 120,
  life = 1000,
  jitter = 30,
  minInterval = 80,
  maxConcurrent = 12,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const timeoutsRef = useRef<Map<number, number>>(new Map());
  const [active, setActive] = useState<ActiveItem[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function getLocalPos(clientX: number, clientY: number) {
      if (!container) return { x: 0, y: 0 };
      const rect = container.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function spawnAt(clientX: number, clientY: number) {
      const now = Date.now();
      if (now - lastSpawnRef.current < minInterval) return;
      lastSpawnRef.current = now;

      if (items.length === 0) return;

      const id = ++idRef.current;
      const src = items[Math.floor(Math.random() * items.length)];
      const local = getLocalPos(clientX, clientY);

      // random jitter so images don't always center exactly same spot
      const jitterX = (Math.random() - 0.5) * jitter * 2;
      const jitterY = (Math.random() - 0.5) * jitter * 2;
      const rotate = (Math.random() - 0.5) * 30; // -15..15 deg
      const sizeRand = size * (0.85 + Math.random() * 0.4); // 85%..125%

      const item: ActiveItem = {
        id,
        x: local.x + jitterX,
        y: local.y + jitterY,
        src,
        rotate,
        size: Math.round(sizeRand),
      };

      setActive((prev) => {
        const arr = [...prev, item].slice(-maxConcurrent);
        return arr;
      });

      // schedule removal after life ms
      const to = window.setTimeout(() => {
        setActive((prev) => prev.filter((p) => p.id !== id));
        timeoutsRef.current.delete(id);
      }, life);
      timeoutsRef.current.set(id, to);
    }

    const onMouseMove = (e: MouseEvent) => {
      spawnAt(e.clientX, e.clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length) {
        spawnAt(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    // listen on window so underlying layout doesn't need special pointer behavior
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      // clear any timeouts left
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current.clear();
    };
  }, [items, size, life, jitter, minInterval, maxConcurrent]);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden
    >
      <AnimatePresence>
        {active.map((a) => (
          <motion.img
            key={a.id}
            src={a.src}
            alt=""
            draggable={false}
            style={{
              position: "absolute",
              left: a.x - a.size / 2,
              top: a.y - a.size / 2,
              width: a.size,
              height: a.size,
              objectFit: "cover",
              pointerEvents: "none",
              transform: `rotate(${a.rotate}deg)`,
              borderRadius: 8,
              zIndex: -1,
              willChange: "transform, opacity",
              boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.25 }}
            transition={{ duration: 0.25 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
