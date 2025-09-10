import React from "react";
import { svgsIcons } from "../../../public/svg-icons";
import Image from "next/image";
import ImageTrail from "./ImageTrail";
import BlurCircles from "./BlurCircles";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      style={{ height: "700px", position: "relative", overflow: "hidden" }}
      className="flex flex-col items-center gap-10 pt-[132px]"
    >
      <ImageTrail
        items={[
          "/images/img1.svg",
          "/images/img2.svg",
          "/images/img3.svg",
          "/images/img4.svg",
        ]}
        size={130}
        life={900}
        jitter={28}
        minInterval={150}
      />

      <div className="flex flex-col gap-8 items-center">
        <motion.h1
          className="text-[55px] font-light font-display hover:mix-blend-exclusion"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Grow your beauty or wellness business with Bexu
        </motion.h1>

        <motion.p
          className="font-medium text-2xl"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          Simple, flexible and powerful booking software for your business.
        </motion.p>
      </div>
      <div className="flex items-center gap-7">
        <button className="cursor-pointer w-[241px] h-11 rounded-full bg-white font-medium text-base text-black flex items-center justify-center">
          Start Your Success Journey
        </button>
        <button className="cursor-pointer flex items-center gap-2">
          See our plans
          <span>{svgsIcons.RightArrow}</span>
        </button>
      </div>
      <motion.div
        className="relative mt-[130px] w-[430px] h-[600px] flex items-center justify-center"
        style={{ overflow: "visible" }}
        initial={{ opacity: 0, y: 200 }} // start lower with opacity 0
        animate={{ opacity: 1, y: 0 }} // fade in and move to position
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
        <div
          className="absolute"
          style={{
            width: "323px",
            height: "170px",
            borderRadius: "75px",
            opacity: 0.57,
            background: "#D9D9D9",
            border:
              "60px solid conic-gradient(from 180deg at 50% 50%, #14242F, #2D5E74, #72393E, #AC9D8D, #D1C8BD, #F0E8E2)",
            filter: "blur(86.3px)",
          }}
        />
        <div
          className="gradient-circle"
          style={{
            width: "1000px",
            height: "600px",
          }}
        />
        <Image
          src="/images/phone1.svg"
          alt="phone"
          width={430}
          height={600}
          className="relative z-10"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
