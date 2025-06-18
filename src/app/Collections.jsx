import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { Overlock } from "next/font/google";

const overlock = Overlock({
    weight: "400",
    subsets: ["latin"],
});

const overlock_bold = Overlock({
    weight: "700",
    subsets: ["latin"],
});

const overlock_superbold = Overlock({
    weight: "900",
    subsets: ["latin"],
});

export default function Collections() {
    return (
        <div className="flex gap-4 px-10">
            {[
                {
                    img: "plants_01",
                    initial: { x: -20, y: 0, opacity: 0 },
                    heading: "Pet Friendly Plants",
                    text: "There are many houseplants ptions for your home that are non-toxic. These plants will add life to your home while keeping your kids and pets safe",
                },
                {
                    img: "plants_02",
                    initial: { x: 0, y: 20, opacity: 0 },
                    heading: "Orchids",
                    text: "Orchids are easily everyone's favorite flowering plant. Find new orchids, and orchids success items in this collection.",
                },
                {
                    img: "plants_03",
                    initial: { x: 20, y: 0, opacity: 0 },
                    heading: "Succulents",
                    text: "Succulents are one of the most popular houseplants. You can find new succulents and succulent accessories in this collection.",
                },
            ].map((data) => {
                return (
                    <motion.div
                        key={data.img}
                        className="flex-1/3 rounded-4xl hover:flex-2/3 relative h-[30rem] transition-all duration-300 ease-in-out grayscale hover:grayscale-0 cursor-pointer group"
                        initial={data.initial}
                        whileInView={{
                            x: 0,
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                className="rounded-4xl object-cover"
                                src={`/${data.img}.jpg`}
                                alt={data.img}
                                fill
                            />
                        </div>

                        <div className="absolute top-0 left-0 w-full h-full p-10 text-white">
                            <div>
                                <div className="flex justify-between items-center">
                                    <p
                                        className={`${overlock_superbold.className} text-4xl mb-10`}
                                    >
                                        {data?.heading}
                                    </p>
                                    <div className="hidden group-hover:block relative h-[3.5rem] w-[3.5rem] rounded-full bg-white">
                                        <Image
                                            className="p-4"
                                            src="/arrow.png"
                                            alt="Arrow"
                                            fill
                                        />
                                    </div>
                                </div>
                                <p className={`${overlock_bold.className} `}>
                                    {data?.text}
                                </p>
                            </div>

                            <div className="w-[calc(100%-5rem)] absolute bottom-0 h-[6rem] border-white border-t flex items-center">
                                <div
                                    className="rounded-full flex items-center gap-1"
                                    style={{
                                        backgroundColor:
                                            "rgba(255,255,255,0.25)",
                                    }}
                                >
                                    <div
                                        className="relative h-[3rem] w-[3rem] rounded-full"
                                        style={{
                                            backgroundColor:
                                                "rgba(255,255,255,0.25)",
                                        }}
                                    >
                                        <Image
                                            className="p-2"
                                            src={"/logo.png"}
                                            alt="Logo"
                                            fill
                                        />
                                    </div>

                                    <p
                                        className={`${overlock_superbold.className} px-3`}
                                    >
                                        Explore
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
