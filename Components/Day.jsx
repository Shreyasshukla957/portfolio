import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { motion } from "motion/react";

export default function Day() {
  const [date, setdate] = useState("");
  const [day, setday] = useState("SUN");
  const [year, setyear] = useState("2026");

  useEffect(() => {
    setInterval(() => {
      const date1 = new Date();
      const currentdate = date1.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      });
      setdate(currentdate);
      const day1 = new Date();
      const currentday = day1.toLocaleDateString("en-US", { weekday: "short" });
      setday(currentday);
      const year1 = new Date();
      const currentyear = year1.getFullYear();
      setyear(currentyear);
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <motion.div
      initial={{
        translateX: "30%",
      }}
     drag
     dragConstraints={{ left: 0, right: 1300, top: 0, bottom: 500 }}
       whileDrag={{ scale: 1.05 }}
       whileTap={{ cursor: "grabbing" }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="from-zinc-90/60 bg-opacity-80 font-techmono hidden h-20 w-auto flex-col items-center overflow-hidden rounded-full border border-l-0 border-dashed border-y-neutral-100/9 border-r-neutral-100/25 bg-linear-to-b to-zinc-900/80 px-4 pt-5 pb-2 pl-3 font-extralight shadow-[0px_5px_20px_rgba(0,0,0,0.2)] backdrop-blur-[100%] select-none selection:bg-slate-50/70 lg:flex"
    >
      <div className="text-md leading-5 font-light tracking-wide">{date}</div>

      <div className="flex items-center justify-center gap-1 text-xs font-extralight opacity-70">
        <span>{year}</span>
        <span>{day}</span>
      </div>
    </motion.div>
  );
}
