"use client";

import Timeline from "../../components/timeline";

export function Experience() {

    return (
        <section id="experience">
            <div className="relative flex flex-col items-center justify-center gap-32 overflow-hidden mt-24 w-full">
                <div className="uppercase font-bold text-inherit jetbrains-mono text-4xl">
                    Experience
                </div>
                <div className="flex flex-col gap-5 p-5">
                <div className="capitalize text-3xl">
                    From Intern to Trainee: A Frontend Developer Journey
                </div>
                <div className="w-full lg:w-1/2 ">
                    I've been working on Sulok Digital Solutions Private Limited for the past 1 years. Here's a timeline of my journey.
                </div>
                </div>
            </div>
            <div className="relative flex size-full items-center justify-center overflow-hidden mt-32">
                <Timeline />
            </div>
        </section>
    );
}
