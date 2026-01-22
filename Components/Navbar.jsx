import React from "react";
import ReactDOM from "react-dom/client";
import { motion, useScroll, useTransform } from "motion/react";
import image from "../images/beautiful-anime-character-cartoon-scene.jpg";
import { FaGithub} from "react-icons/fa";

export default function Navbar() {
  const { scrollYProgress } = useScroll();

  const thickness = useTransform(
    scrollYProgress,
    [0,1],
    [0.2,3],

  );

  return (
    <motion.div
      initial={{
       scaleX:"50%",
        opacity: 0,
        y: 52,
        filter: "blur(20px)",
      }}
      animate={{
        scaleX:"100%",
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="font-manrope from-zinc-90/60 sticky top-4 z-10 mb-30 flex h-17 w-full items-center overflow-hidden rounded-4xl border border-y-0 border-dashed border-x-white/15 border-y-neutral-100/15 bg-linear-to-b to-zinc-900/80 px-4 pt-2 pb-2 pl-5 text-lg font-extralight shadow-[0px_5px_20px_rgba(0,0,0,0.2)] backdrop-blur-3xl selection:bg-slate-50/70 md:max-w-[54vw]"
    >
      <div className="flex h-full w-full cursor-pointer items-center justify-between">
        <div className="w-[25%] lg:w-[40%] ">
          <img
            src={image}
            className="size-11 rounded-full object-cover object-top-right duration-200 hover:scale-90 hover:shadow-md hover:shadow-orange-500/20"
          ></img>
        </div>

        <div className="flex flex-1 cursor-pointer items-center justify-center gap-7 text-[rgb(217,217,217)] font-hanken text-md">
          <div className="transition-all duration-200 hover:underline hover:underline-offset-6 hover:[text-shadow:0px_0.3px_1px_rgba(225,225,225,0.4)]">
            Home
          </div>
          <div className="transition-all duration-200 hover:underline hover:underline-offset-6 hover:[text-shadow:0px_0.3px_1px_rgba(225,225,225,0.4)]">
            Blogs
          </div>
          <p className="transition-all duration-200 hover:underline hover:underline-offset-6 hover:[text-shadow:0px_0.3px_1px_rgba(225,225,225,0.4)]">
            Projects
          </p>
        </div>

        <motion.div
        initial={{
          scale: 1,
        }}
        whileHover={{
          color:"#FF6A00",
          scale : 1.2,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
         className="flex items-center justify-center h-full w-15">
         <a href="https://github.com/Shreyasshukla957/portfolio" target="_blank"><FaGithub size={20}/></a>
         </motion.div>

        <div className="relative flex h-13 w-13 items-center justify-center">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
 

             {/* animated border  */}
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#F68B2E"
              strokeWidth="2" // thin border
              pathLength="1"
              style={{
                pathLength: scrollYProgress, // scroll draws circle
              }}
            />
          </svg>


          <motion.svg
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 size-7 text-white duration-200 hover:scale-95 hover:[box-shadow:1px_1px_12px_0px_rgba(255,255,255,0.55)] shadow-neutral-50 rounded-full"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        </div>

        {/* <motion.div
          className=" fixed left-0 top-0 z-50 w-px origin-top h-full bg-linear-to-b from-zinc-200 via-zinc-300 to-zinc-400 overflow-hidden"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>

          <motion.div
          className=" fixed right-0 top-0 z-50 w-px origin-top h-full bg-linear-to-b from-zinc-200 via-zinc-300 to-zinc-400 overflow-hidden"
          style={{ scaleY: scrollYProgress }}
        ></motion.div> */}
      </div>
    </motion.div>
  );
}
