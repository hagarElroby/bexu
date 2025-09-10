import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.header
      className="px-24 lg:px-[140px] flex items-center justify-between"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div>
        <Image src="/images/bexu.svg" alt="bexu" width="85" height="28" />
      </div>
      <ul className="flex gap-9 items-center">
        <Link href="">
          <li className="text-white text-[15px]">Home</li>
        </Link>
        <Link href="">
          <li className="text-[#FFFFFF99] text-[15px]">About</li>
        </Link>
        <Link href="">
          <li className="text-[#FFFFFF99] text-[15px]">Contact us</li>
        </Link>
        <Link href="">
          <li className="text-[#FFFFFF99] text-[15px]">Blog</li>
        </Link>
        <Link href="">
          <li className="text-[#FFFFFF99] text-[15px]">Be partner</li>
        </Link>
      </ul>
      <div className="bg-[#AC9C8D] w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold">
        AS
      </div>
    </motion.header>
  );
};

export default Header;
