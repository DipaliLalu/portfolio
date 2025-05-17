"use client"; // for Next.js if you use it

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const timelineData = [
    {
        year: "2025",
        title: "Frontend Developer",
        description: "Promoted to full-time frontend developer, working on responsive, engaging web applications.",
        image: "/frontend-dev.png"
    },
    {
        year: "Early 2024",
        title: "Intern at Sulok Digital Solutions Pvt Ltd (April - December)",
        description: "Joined as a Intern in April, focusing on frontend development fundamentals. Built a solid foundation in core technologies and best practices for creating user-friendly interfaces.",
        image: "/learn.jpg"
    }
];

export default function Timeline() {
    const timelineRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        function handleScroll() {
            if (!timelineRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const visibleHeight = Math.min(rect.height, Math.max(0, window.innerHeight - rect.top));
            setLineHeight(visibleHeight);
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // call once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={timelineRef} className="relative ml-6 md:ms-20 lg:ms-36">
            {/* Static gray line full height */}
            <div className="absolute top-0 left-1.5 w-1 bg-gray-300 h-full"></div>

            {/* Dynamic multi-color vertical line growing with scroll */}
            <div
                className="absolute top-0 left-1.5 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top transition-all duration-300 ease-out"
                style={{ height: `${lineHeight}px` }}
            ></div>


            {/* Timeline items */}
            {timelineData.map((item, index) => (
                <div key={index} className="mb-20 relative pl-8 flex flex-col lg:flex-row gap-4 lg:gap-8">
                    {/* Dot */}
                    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>

                    <div className="flex flex-col lg:flex-row gap-8" >
                        <h3 className="font-semibold text-gray-500 text-2xl md:text-3xl lg:text-4xl lg:w-52">{item.year}</h3>

                        <div className="flex flex-col gap-4 w-4/5 self-start lg:px-20">
                            <h4 className="text-lg md:text-xl font-semibold">{item.title}</h4>
                            <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                            <div className="relative overflow-hidden rounded-lg w-full h-[200px] md:h-[300px] lg:h-[400px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    objectFit="cover"
                                    className="rounded-lg transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
