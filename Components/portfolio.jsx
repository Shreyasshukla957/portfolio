import Navbar from "./Navbar.jsx";
import { motion } from "motion/react";
import FirstSection from "./FirstSection.jsx";
import Connect from "./Connect.jsx";
import Gitgraph from "./gitgraph.jsx";
import Resume from "./resume.jsx";

export default function Portfolio() {
  return (
    <motion.div className="mx-auto flex min-h-screen max-w-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_center,oklch(44.2%_0.017_285.786),oklch(14.1%_0.005_285.823))] text-white  ">
      <div className="fixed top-0 left-0 right-0 h-4 z-10  backdrop-blur-4xl  backdrop-blur-xl  w-3xl  mx-auto"></div>
      <Navbar />

      <motion.div
        initial={{
          y: -24,
          filter: "blur(20px)",
        }}
        animate={{
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        div
        className="mx-auto flex h-200 w-full flex-col items-start justify-start rounded-lg border border-x border-dashed border-x-white/15 border-y-neutral-100/15 bg-linear-to-b from-zinc-900 to-zinc-900/40 px-5 py-7 md:max-w-3xl"
      >
        <div className="flex flex-col gap-y-2  border-x rounded-lg border-t border-dashed border-neutral-200/30">
          <FirstSection />
          <Resume/>
          <Connect />
          <div className="h-20"></div>
        </div>
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 backdrop-blur-xs h-11 w-3xl bg-linear-to-b to-zinc-900/90 mx-auto  "></div>
    </motion.div>
  );
}
