import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from "motion/react";
import { useState } from "react";
import { TbHandClick } from "react-icons/tb";

export default function Connect() {

  const [click , setclick] = useState(false)
  
  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/yourusername",
    },
    {
      name: "X",
      icon: FaXTwitter,
      href: "https://x.com/shuklashreyas9",
    },
    {
      name: "Gmail",
      icon: MdEmail,
      href: "mailto:shuklashreyas.shs@gmail.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/Shreyasshukla957",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shreyas-shukla-bb8b30315/",
    },
  ];

  return (
    <>
      <div className="flex h-15 w-[98%] flex-col items-start justify-start border-y b border-y-neutral-100/15 bg-linear-to-b from-zinc-900 to-zinc-900/40 px-2 py-3 md:max-w-3xl mx-auto mt-4  border-none rounded-2xl z-20">
        <div className="font-geist w-[30%] cursor-pointer  text-center text-xl font-medium tracking-wide  selection:bg-slate-50/70 pb-1 bg-linear-to-t from-neutral-400 via-neutral-200 to-neutral-50 bg-clip-text text-transparent h-10 ml-4 flex items-center justify-start mb-1 " onMouseEnter={()=>{setclick(!click)}}  >
          Connect with me
        </div>

      <div className="flex items-center justify-center h-full">
      <motion.div
      initial={{
        y:-16,
        x:15,
        
        }}
        animate={{
          scale: [1, 0.9, 1],
          rotate: [0, -8, 0],
          
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-white"
      >
        <TbHandClick size={40} className="text-white" />
      </motion.div>
    </div>

        
      </div>

      {click && <motion.div
        initial={{
          y: -24,
          filter: "blur(5px)",
        }}
        animate={{
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
       className="mt-2  rounded-md  md:max-w-3xl ease-in-out  mx-auto z-0 ">
        <div className="flex items-center justify-start gap-x-3 ml-2   ">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              className="group flex items-center gap-2 rounded-lg border border-neutral-100/10 bg-zinc-900/60 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-neutral-100/30 hover:bg-zinc-800/60  group-hover:opacity-100"
            >
              <link.icon
                size={20}
                className="text-neutral-400 transition-colors duration-300 group-hover:text-neutral-100"
              />

              <span className="font-geist bg-linear-to-t from-gray-400 via-gray-200 to-gray-100 bg-clip-text text-sm font-light text-transparent selection:bg-slate-50/70">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>}

     
    </>
  );
}
