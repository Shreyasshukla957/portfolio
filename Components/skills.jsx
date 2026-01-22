import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiFramer,
  SiEslint,
  SiPrettier,
  SiReactrouter,
} from "react-icons/si";

import { motion } from "motion/react";

import React from "react";
import ReactDOM from "react-dom/client";

export default function Skills() {
  const frontendTech = [
    { name: "HTML5", icon: FaHtml5, bg: "#E44D26" },
    { name: "CSS3", icon: FaCss3Alt, bg: "#1572B6" },
    { name: "JavaScript", icon: FaJs, bg: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, bg: "#3178C6" },
  ];

  const frontendTech2 = [
    { name: "React", icon: FaReact, bg: "#61DAFB" },
    { name: "Redux", icon: SiRedux, bg: "#764ABC" },
    { name: "Router", icon: SiReactrouter, bg: "#CA4245" },
    { name: "Motion", icon: SiFramer, bg: "#E14AFF" },
    { name: "Tailwind", icon: SiTailwindcss, bg: "#06B6D4" },
  ];

  const frontendTech3 = [
    { name: "Prettier", icon: SiPrettier, bg: "#F7B93E" },
    { name: "Vite", icon: SiVite, bg: "#646CFF" },
    { name: "Git", icon: FaGitAlt, bg: "#F05032" },
    { name: "GitHub", icon: FaGithub, bg: "#181717" },
    { name: "npm", icon: FaNpm, bg: "#CB3837" },
  ];

  const frontanimate = {
    animate: {
      x: ["0%", "-50%"],
    },
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeIn",
    },
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div class="flex h-120 w-90 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-neutral-100 transition-shadow duration-300 hover:shadow-xlz">
          <div className="flex h-15 w-full">
            {frontendTech.map((icons, index) => {
              const Icon = icons.icon;
              return (
                <motion.div
                  variants={frontanimate}
                  animate={frontanimate.animate}
                  transition={frontanimate.transition}
                  className="h-30 w-30"
                  key={index}
                >
                  {icons.name}
                  <div className="h-10 w-10">
                    <Icon style={{ color: icons.bg }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="flex h-15 w-full">
            {frontendTech2.map((icons, index) => {
              const Icon = icons.icon;
              return (
                <motion.div
                  variants={frontanimate}
                  animate={frontanimate.animate}
                  transition={frontanimate.transition}
                  className="h-30 w-30"
                  key={index}
                >
                  {icons.name}
                  <div className="h-10 w-10">
                    <Icon style={{ color: icons.bg }} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex h-8 w-full overflow-hidden">
            {frontendTech3.map((icons, index) => {
              const Icon = icons.icon;
              return (
                <motion.div
                  variants={frontanimate}
                  animate={frontanimate.animate}
                  transition={frontanimate.transition}
                  className="mx-2 flex min-w-max items-center gap-2 rounded-md border-2 border-dashed border-gray-300 bg-white px-4 py-1"
                  key={index}
                >
                  <div className="flex h-4 w-4 items-center justify-center">
                    <Icon size={16} style={{ color: icons.bg }} />
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap text-gray-700">
                    {icons.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
