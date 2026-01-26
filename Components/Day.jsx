import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { motion } from "motion/react";
import { GiThrowingBall } from "react-icons/gi";

export default function Day() {
  const [throwball, setthrowball] = useState(false);
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
      dragConstraints={{ left: 0, right: 1000, top: 0, bottom: 500 }}
      whileDrag={{ scale: 1.05 }}
      whileHover={{ cursor: "grabbing", scale: 1.05 }}
      transition={{
        type: "spring",

        duration: 4,
        ease: "easeInOut",
        translateX: "-30%",
      }}
      className={`from-zinc-90/60 bg-opacity-80 font-techmono pb-2" z-20 hidden h-20 w-21 flex-col items-center overflow-hidden rounded-full border border-l-0 border-dashed px-4 pt-5 backdrop-blur-[100%] select-none selection:bg-slate-50/70 lg:flex ${
        throwball
          ? "border-none bg-linear-to-b from-orange-600 via-orange-600 to-orange-400 shadow-2xl"
          : "border-y-neutral-100/9 border-r-neutral-100/25 bg-linear-to-b to-zinc-900/80 pl-3 font-extralight shadow-[0px_5px_20px_rgba(0,0,0,0.2)]"
      }`}
      onHoverStart={() => setthrowball(!throwball)}
    >
      <div className="text-md leading-5 font-light tracking-wide">
        {throwball ? "Throw" : date}
      </div>

      <div className="flex items-center justify-center gap-1 text-xs font-extralight opacity-70">
        {throwball ? (
          <motion.div
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 30, opacity: [0.3, 0.8, 1] }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <GiThrowingBall size={22} />
          </motion.div>
        ) : (
          <span>{year}</span>
        )}
        {throwball ? "" : <span>{day}</span>}
      </div>
    </motion.div>
  );
}
