import { IoIosSend } from "react-icons/io";
import { PiReadCvLogoLight } from "react-icons/pi";
import { motion } from "motion/react";
export default function Resume() {
  return (
    <div className="flex h-14 w-[85%] items-center justify-between ml-10 ">   
      <div className="h-10 w-29  flex items-center justify-center rounded-lg gap-1  border [box-shadow:inset_0px_0px_2px_0px_oklch(70.8%_0_0)] hover:[box-shadow:inset_0px_1px_2px_0px_oklch(87.1%_0.006_286.286)] border-neutral-200/30  font-manrope text-sm bg-clip-text bg-transparent font-light cursor-pointer selection:bg-slate-50/70"><PiReadCvLogoLight size={19} /> Resume</div>
      <div 
      className="h-10 w-36 border flex justify-center gap-1 items-center rounded-lg   bg-neutral-300  font-manrope text-zinc-950 text-sm font-medium cursor-pointer hover:bg-neutral-200  ">
        <motion.div
        whileHover={{
          rotate: 45,
        }}
        
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        
        
         ><IoIosSend size={19}/></motion.div>
          <span className="selection:bg-neutral-500">Get in touch</span>  
             </div>
    </div>
  );
}

