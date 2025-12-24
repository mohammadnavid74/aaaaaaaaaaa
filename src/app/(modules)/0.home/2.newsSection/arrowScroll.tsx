"use client";
import Image from "next/image";
import { useState } from "react";

const ArrowScroll = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      className={`hidden md:flex absolute  bg-white/20 z-50 w-full h-full  justify-center items-center ${
        hover ? "!hidden" : ""
      }`}
    >
      <Image
        width={200}
        height={100}
        src="/scroll.webp"
        className="animate-left-right-fast "
        alt="scroll"
      ></Image>
    </div>
  );
};

export default ArrowScroll;
