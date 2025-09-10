"use client";

import HeroSection from "@/components/home/HeroSection";
import NeverSection from "@/components/home/NeverSection";

export default function Home() {
  return (
    <section className="flex flex-col gap-10 w-full">
      <HeroSection />
      <NeverSection />
    </section>
  );
}
