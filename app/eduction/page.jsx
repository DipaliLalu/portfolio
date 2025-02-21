import { Marquee } from "@/components/magicui/marquee";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Card, CardBody, CardHeader } from "@heroui/card";

export default function Eduction() {
    const data = [
        {
            year: "2018-2019",
            course: "SSC",
            name: "M.G.Bhuva Kanya Vidhya Mandir",
        },
        {
            year: "2020-2021",
            course: "HSC",
            name: "M.G.Bhuva Kanya Vidhya Mandir",
        },
        {
            year: "2021-2024",
            course: "Bachelor of Computer Applications",
            name: "Bhakta Kavi Narsinh Mehta University (BKNMU)",
        },
    ];
    const Cards = ({ year, course, name }) => {
        return (
            <Card className="md:min-w-[450px] w-full p-3 bg-transparent border-none">
                <ShineBorder className="rounded-lg w-full" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                    <CardBody>
                        <div className="flex flex-col gap-3">
                            <p className="text-md border shadow rounded-lg p-2 w-1/3">{year}</p>
                            <p className="font-bold text-default-500 ">{course}</p>
                            <p>{name}</p>
                        </div>
                    </CardBody>
                </ShineBorder>
            </Card>
        )
    }
    return (
        <section id="eduction">
            <div className="flex flex-col items-center justify-center gap-20 mt-16">
                <h2 className="uppercase font-bold text-inherit jetbrains-mono text-4xl mb-6">
                    Eduction
                </h2>
                <div className="flex gap-9">
                    <Marquee pauseOnHover repeat={2} reverse className="[--duration:30s]">
                        {data.map((review) => (
                            <Cards key={review.year} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
} 