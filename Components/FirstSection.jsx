import { AnimatePresence, motion, scale, useTransform } from "motion/react";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import image from "../images/beautiful-anime-character-cartoon-scene.jpg";
import { useRef } from "react";
import { useScroll } from "motion/react";
import gitgraph from "./gitgraph.jsx";

export default function FirstSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = [
    "UI is Love ❤️",
    "Motion is needed",
    "Front-End Developer",
    "React Engineer with tailwind ",
    "Developing Software with 🍵 ",
  ];

  useEffect(() => {
    // Every 2 seconds, change to next word
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      // If prev is 0 → becomes 1
      // If prev is 1 → becomes 2
      // If prev is 2 → becomes 0 (loops back)
    }, 2000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const nameanimate = {
    scale: {
      scale: 1.1,
    },
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  };

  const textanimate = {
    whileHover: {
      scale: 1.08,
    },
    transition: {
      type: "spring",
      stiffness: 250,
    },
  };

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <motion.div
          initial={{
            opacity: 0,
            y: -32,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="font-manrope flex h-50 w-full border-b border-dashed border-neutral-200/30"
        >
          <div className="group relative flex h-full w-[28%] items-start justify-center overflow-hidden pt-4">
            <img
              src={image}
              className="size-40 cursor-pointer rounded-full object-cover object-top-right shadow-neutral-50 duration-200 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/20 selection:bg-slate-50/70"
            ></img>
            <div className="absolute top-0 right-0 h-[30%] w-px bg-[linear-gradient(90deg,transparent,#f9623f,#ffa93e,#ffc468,#ffd966,#fbf99d,transparent)] opacity-0 group-hover:opacity-40 group-hover:duration-500"></div>
            <div className="absolute top-0 right-0 h-[30%] w-px bg-[linear-gradient(90deg,transparent,#f9623f,#ffa93e,#ffc468,#ffd966,#fbf99d,transparent)] opacity-0 blur-2xl group-hover:opacity-40 group-hover:duration-500"></div>

            <div className="group:hover-transition-all absolute top-0 right-0 h-px w-px bg-[linear-gradient(180deg,transparent,#f9623f,#ffa93e,#ffc468,#ffd966)] opacity-0 group-hover:opacity-40 group-hover:duration-500"></div>
            <div className="group:hover-transition-all absolute top-0 right-0 h-px w-[30%] bg-[linear-gradient(180deg,transparent,#f9623f,#ffa93e,#ffc468,#ffd966)] opacity-0 group-hover:opacity-40 group-hover:duration-200"></div>
          </div>

          <div className="flex h-full w-[72%] cursor-pointer flex-col items-center justify-center gap-y-2 border-l border-dashed border-neutral-200/30 px-2 pl-3 ">
            <motion.div
              variants={nameanimate}
              whileHover={nameanimate.scale}
              transition={nameanimate.transition}
              className="font-geist flex w-full items-center justify-start bg-linear-to-t from-neutral-600 via-neutral-300 to-neutral-50 bg-clip-text pt-3 pl-8 text-7xl font-medium text-transparent selection:bg-slate-50/70"
            >
              SHREYAS
            </motion.div>
            <motion.div
              variants={nameanimate}
              whileHover={nameanimate.scale}
              transition={nameanimate.transition}
              className="font-g flex w-full items-center justify-center border-b bg-linear-to-t from-neutral-600/40 via-neutral-300/30 to-neutral-400/20 bg-clip-text pl-16 text-7xl font-medium text-transparent selection:bg-slate-50/70"
            >
              SHUKLA
            </motion.div>
          </div>
        </motion.div>

        <div className="flex">
          <div className="w-[6%] bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.08)_0px,transparent_2px,transparent_7px)]"></div>
          <motion.div className="ml-1 flex h-10 w-[50%] flex-col items-start justify-center overflow-hidden rounded-2xl border-x border-y border-dashed border-neutral-200/30 p-4 selection:selection:bg-slate-50/70 bg-linear-to-b from-zinc-900 to-zinc-900/40">
            <AnimatePresence mode="wait">
              {/* Only renders words[currentIndex] - ONE word at a time */}
              <motion.div
                key={currentIndex} // Key changes → triggers exit/enter animation
                initial={{ y: 12, opacity: 0 }} // Starts below, invisible
                animate={{ y: 0, opacity: 1 }} // Slides up, visible
                exit={{ y: -12, opacity: 0 }} // Slides up more, fades out
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font-geist flex h-6 items-center bg-linear-to-t from-gray-400 via-gray-200 to-gray-100 bg-clip-text text-2xl text-[16px] font-extralight text-transparent selection:bg-slate-50/70"
              >
                {words[currentIndex]}
                {/* Shows: words[0], then words[1], then words[2], repeat */}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <div className="ml-1 flex-1 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.08)_0px,transparent_2px,transparent_7px)]"></div>
        </div>

        <div className="font-inter max-w-full cursor-pointer border-t border-dashed border-neutral-200/30 bg-linear-to-b from-neutral-300 via-neutral-200 to-neutral-100 bg-clip-text p-4 text-[16px] leading-7 font-light tracking-wider text-transparent selection:bg-slate-50/70 ">
         <div className="font-bold text-lg leading-8">Hii ,I'm Shreyas Shukla- </div> 
           Front-end  <strong className="font-bold   font-geist bg-linear-to-b from-zinc-900 to-zinc-900/60 rounded-md px-1.5 py-1 text-neutral-50 align-middle  hover:shadow-[0_0_35px_rgba(255,230,246,0.3)]">psychee</strong> crafting creative and functional user interfaces.
          I’m passionate about front-end development and building modern user
          experiences. With <></>
          <motion.span
            variants={textanimate}
            whileHover={textanimate.whileHover}
            transition={textanimate.transition}
            className="inline-flex items-center gap-x-2 rounded-md border border-dashed border-white/40 bg-linear-to-t from-neutral-400 via-gray-400 to-neutral-100 bg-clip-text px-1.5 align-middle font-bold text-transparent hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          >
            <FaReact size={14} color="#58c4dc " /> React.JS
          </motion.span>
          <></> <></>
          <motion.span
            variants={textanimate}
            whileHover={textanimate.whileHover}
            transition={textanimate.transition}
            className="ml-1 inline-flex items-center gap-x-2 rounded-md border border-dashed border-white/40 bg-linear-to-t from-neutral-600 via-gray-400 to-neutral-100 bg-clip-text px-1.5 align-middle font-bold text-transparent hover:shadow-[0_0_25px_rgba(62,146,138,0.55)]"
          >
            <RiTailwindCssFill size={14} color="#3e928a " />
            Tailwind
          </motion.span>
          <> </>
          <motion.span
            variants={textanimate}
            whileHover={textanimate.whileHover}
            transition={textanimate.transition}
            className="ml-1 inline-flex items-center gap-x-2 rounded-md border border-dashed border-white/40 bg-linear-to-t from-neutral-400 via-gray-400 to-neutral-100 bg-clip-text px-1.5 align-middle font-bold text-transparent hover:shadow-[1px_0_26px_rgba(0,122,204,0.55)]"
          >
            <BiLogoTypescript size={16} color="#007acc" />
            TypeScript
          </motion.span>
          <> and </>
          <motion.span
            variants={textanimate}
            whileHover={textanimate.whileHover}
            transition={textanimate.transition}
            className="ml-1 inline-flex items-center gap-x-2 rounded-md border border-dashed border-white/40 bg-linear-to-t from-neutral-400 via-gray-400 to-neutral-100 bg-clip-text px-1.5 align-middle font-bold text-transparent hover:shadow-[0_0_26px_rgba(234,179,8,0.45)]"
          >
            <TbBrandFramerMotion size={14} color="#FACC15" />
            Motion
          </motion.span>
          <></> , I focus on building clean, interactive, and fluid interfaces
          that feel intuitive to use.
        </div>
      </div>
    </>
  );
}
