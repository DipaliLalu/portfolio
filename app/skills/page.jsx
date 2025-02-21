"use client";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from "next/image";
import { Tilt } from "react-tilt";

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
    (slug) => `https://cdn.simpleicons.org/${slug}`, // Using 'black' as a valid color
  );

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section id="skills">
      <div className="relative flex flex-col size-full items-center justify-center gap-10 overflow-hidden mt-10">
        <div className="uppercase font-bold text-inherit jetbrains-mono text-4xl">
          Skills
        </div>
        <div className="flex gap-5 flex-wrap justify-center items-center p-5">
          {images.map((data, index) => {
            return (
              <Tilt options={defaultOptions} key={index}>
                <ShineBorder
                  className="rounded-lg w-8"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <img src={data} width="70" height="70" alt="skill image" />
                </ShineBorder>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}
