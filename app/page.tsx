import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4"
      id="home"
    >
      <div className="z-10 flex items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-200 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Frontend Developer</span>
          </AnimatedShinyText>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center max-w-xl h-auto text-center justify-center font-poppins">
        <div className="text-6xl font-bold">Hello I&apos;m </div>
        <span
          className={title({
            color: "violet",
            size: "lg",
            className: "font-bold h-20",
          })}
        >
          <TypingAnimation className="sm:text-6xl tracking-normal ">
            Dipali Lalu
          </TypingAnimation>
        </span>
      </div>
      <TypingAnimation
        className="text-lg w-full md:w-1/2 text-center"
        duration={55}
      >
        As a dedicated and passionate front-end developer, I specialize in
        creating dynamic, responsive, and user-friendly web applications.
      </TypingAnimation>
      <div className="flex gap-3 justify-center items-center">
        <a
          className="bg-blue-600 text-white flex gap-2 p-3 rounded-xl"
          download="dipali-lalu.pdf"
          href="/Dipali-Lalu.pdf"
        >
          <MdOutlineFileDownload size={23} />
          Download CV
        </a>

        <Link
          className="bg-slate-400 p-2 rounded-full hover:p-4 transition-all"
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon />
        </Link>

        <Link
          className="bg-slate-400 p-2 rounded-full hover:p-4 transition-all"
          href={siteConfig.links.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin className="text-blue-600" size={22} />
        </Link>
      </div>
    </section>
  );
}
