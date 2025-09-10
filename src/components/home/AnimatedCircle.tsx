"use client";

import Image from "next/image";

export default function AnimatedCircle() {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="relative overflow-hidden"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          opacity: 0.31,
          filter: "blur(144px)",
        }}
      >
        <div className="absolute inset-0 animate-move-texture">
          {/* Repeat 3 times */}
          <Image
            src="/images/texture.png"
            alt="bg"
            fill
            className="object-cover mix-blend-screen"
            style={{ animationDelay: "0s" }}
          />
          <Image
            src="/images/texture.png"
            alt="bg"
            fill
            className="object-cover mix-blend-screen"
            style={{ animationDelay: "5s" }}
          />
          <Image
            src="/images/texture.png"
            alt="bg"
            fill
            className="object-cover mix-blend-screen"
            style={{ animationDelay: "10s" }}
          />
        </div>
      </div>
    </div>
  );
}
