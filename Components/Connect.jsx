import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function Connect() {
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
      <div className="flex h-35 w-full flex-col items-start justify-start border-y border-dashed border-y-neutral-100/15 bg-linear-to-b from-zinc-900 to-zinc-900/40 px-2 py-3 md:max-w-3xl mx-auto mt-4">
        <div className="font-geist w-full cursor-pointer  text-center text-xl font-medium tracking-wide  selection:bg-slate-50/70 pb-1 bg-linear-to-t from-neutral-400 via-neutral-200 to-neutral-50 bg-clip-text text-transparent h-10 ml-4 flex items-center justify-start mb-1">
          Connect with me
        </div>
         <div className="mt-2 w-full rounded-md  md:max-w-3xl">
        <div className="flex items-center justify-start gap-x-3 ml-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              className="group flex items-center gap-2 rounded-lg border border-neutral-100/10 bg-zinc-900/60 px-4 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-neutral-100/30 hover:bg-zinc-800/60"
            >
              <link.icon
                size={20}
                className="text-neutral-400 transition-colors duration-300 group-hover:text-neutral-100"
              />

              <span className="font-geist bg-linear-to-t from-gray-400 via-gray-200 to-gray-100 bg-clip-text text-sm font-light text-transparent selection:bg-slate-50/70">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      </div>

     
    </>
  );
}
