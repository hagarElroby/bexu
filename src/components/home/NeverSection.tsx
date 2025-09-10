import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ScrollVelocity from "./VelocityMarquee";
// import VelocityMarquee, { ScrollVelocity } from "./VelocityMarquee";
const NeverSection = () => {
  return (
    <motion.div
      style={{ height: "760px", position: "relative", overflow: "hidden" }}
      className="flex flex-col items-center gap-5 w-full"
      initial={{ opacity: 0, y: 250 }} // starts hidden & lower
      whileInView={{ opacity: 1, y: 0 }} // animates when in view
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      // `once: true` → runs only once
      // `amount: 0.3` → triggers when 30% of section is visible
    >
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-[55px] font-light font-display">
          Never run out of inspiration again.
        </h2>
        <p className="text-sm text-[#F5F5F5] font-light">
          Use Mobbin for free as long as you like or get full access with any of
          our paid plans.
        </p>
      </div>
      <div className="w-full flex items-center justify-center h-[490px] relative overflow-hidden">
        {/* Background scroll text */}
        <ScrollVelocity
          texts={["React Bits", "Scroll Down", "React Bits"]}
          velocity={70}
          className="custom-scroll-text absolute inset-0 z-0"
        />

        {/* Centered circle + phone */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* <div
            className="absolute gradient-circle"
            style={{
              width: "323px",
              height: "170px",
              borderRadius: "75px",
              opacity: 0.57,
              background: "linear-gradient(90deg, #000000 0%, #000000 100%)",
              backgroundPosition: "7.23% 50%",
              backgroundSize: "94% 50%",
              border:
                "60px solid conic-gradient(from 180deg at 50% 50%, #14242F, #2D5E74, #72393E, #AC9D8D, #D1C8BD, #F0E8E2)",
              filter: "blur(86.3px)",
            }}
          /> */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[120px] animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(255,255,255,0.6) 0%, rgba(0,0,0,0.3) 25%, rgba(255,255,255,0.6) 50%, rgba(0,0,0,0.3) 75%, rgba(255,255,255,0.6) 100%)",
            }}
          />
          <Image
            src="/images/phone2.svg"
            alt="phone"
            width={240}
            height={490}
            className="relative z-20"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default NeverSection;
