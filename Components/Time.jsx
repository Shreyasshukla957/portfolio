import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { motion } from "motion/react";

export default function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const currentTime = date
        .toLocaleTimeString("en-GB", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .toLocaleUpperCase();
      setTime(currentTime);
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <motion.div
      initial={{ translateX: "-30%" }}

      
      className=" from-zinc-90/60 bg-opacity-80 hidde font-techmono z-20 h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-r-0 border-dashed border-y-neutral-100/9 border-l-neutral-100/25 bg-linear-to-b to-zinc-900/80 px-4 pt-2 pr-3 pb-2 text-lg font-extralight shadow-[0px_5px_20px_rgba(0,0,0,0.2)] backdrop-blur-[100%] selection:bg-slate-50/70 hidden lg:flex"
    >
      {time}
    </motion.div>
  );
}
