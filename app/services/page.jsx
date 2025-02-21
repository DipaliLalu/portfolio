"use client";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import { Tilt } from "react-tilt";
const data = [
  {
    img: "/resposiveimg.png",
    title: "Responsive Web Design",
    desc: "Responsive Web Design (RWD) ensures websites adapt seamlessly to different devices, providing an optimal viewing and interaction experience across desktops, laptops, tablets, and smartphones.",
  },
  {
    img: "/htmlcssimg.jpg",
    title: "HTML/CSS Development",
    desc: "HTML/CSS Development involves writing code to create the structure and style of websites. Adhering to best practices ensures the resulting websites are functional, accessible, and easy to maintain.",
  },
  {
    img: "/gitimg.png",
    title: "Version Control (Git)",
    desc: "Version Control with Git is essential for efficiently tracking changes, managing collaborative workflows, resolving conflicts, and maintaining code quality in software development projects.",
  },
];
export default function Services() {
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
    <section id="services" className="mt-10">
      <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
        <h2 className="uppercase font-bold text-inherit jetbrains-mono text-4xl mb-6">
          Services
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9 p-16 ">
          {data.map((value) => {
            return (
              <Tilt options={defaultOptions} key={value.title}>
                <Card isPressable shadow="sm" className="">
                  <ShineBorder
                    className="rounded-lg"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  >
                    <CardBody className="overflow-hidden p-0">
                      <Image
                        alt={value.title}
                        className="w-full object-contain h-[140px] rounded-2xl"
                        src={value.img}
                        width={100}
                        height={80}
                        priority
                      />
                    </CardBody>
                    <CardFooter className="text-small flex flex-col gap-4 items-center justify-center text-center p-4">
                      <p className="font-semibold text-lg">⭐ {value.title}</p>
                      <p className="text-gray-600">{value.desc}</p>
                    </CardFooter>
                  </ShineBorder>
                </Card>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}
