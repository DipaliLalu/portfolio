"use client";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "vercel",
  "git",
  "github",
  "bootstrap",
  "tailwindcss",
  "mongodb",
  "nextdotjs",
];

export function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section id="skills">
      <div className="relative flex flex-col items-center justify-center gap-10 overflow-hidden my-32 ">
        <div className="uppercase font-bold text-inherit jetbrains-mono text-4xl ">
          Skills
        </div>
      </div>
      <div className="relative flex size-full items-center justify-center overflow-hidden mt-10">
        <IconCloud 
        // icons={
        //   [
        //     <FaGitAlt size={100}/>,
        //     <FaGithub size={100}/>,
        //     <FaHtml5 size={100}/>,
        //     <FaCss3Alt size={100}/>,
        //     <FaJs size={100}/>,
        //     <FaReact size={100}/>,
        //     <RiNextjsFill size={100}/>,
        //     <RiTailwindCssFill size={100}/>,
        //     <FaBootstrap size={100}/>,
        //     <SiShadcnui size={100}/>
        //   ]
        // }
        images={images}
        />
      </div>
    </section>
  );
}
