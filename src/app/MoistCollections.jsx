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

export default function MoistCollections() {
    return (
        <div className="mt-15">
            <div className="flex items-center px-10 py-20">
                <p
                    className={`${overlock_superbold.className} text-9xl w-[65rem]`}
                >
                    New Plants
                </p>

                <p className={`${overlock_bold.className}`}>
                    Bring nature inside and shop our big selections of fresh
                    indoor plants, including instagram-worthy houseplants,
                    pet-friendly plants, orchids and one-of-a-kind rare plants.
                </p>
            </div>

            <div className="px-10 flex gap-6">
                {[
                    {
                        img: "plants_04",
                        initial: { x: -20, y: 0, opacity: 0 },
                        heading: "Pepotential Plants",
                        text: "Moist but well-drained",
                        price: "$120",
                    },
                    {
                        img: "plants_03",
                        initial: { x: 0, y: 20, opacity: 0 },
                        heading: "Fiddle-leaf Fig",
                        text: "Medium moist, well-drained",
                        price: "$160",
                    },
                    {
                        img: "plants_05",
                        initial: { x: 20, y: 0, opacity: 0 },
                        heading: "Calathea Orbitalis",
                        text: "Moist but well-drained",
                        price: "$150",
                    },
                ].map((data) => {
                    return (
                        <div
                            key={data.img}
                            className="flex-1/3 bg-white rounded-4xl p-3 relative group cursor-pointer"
                        >
                            <div className="relative w-full aspect-[5/3] overflow-hidden rounded-[1.5rem]">
                                <Image
                                    className="object-cover rounded-[1.5rem] group-hover::transform group-hover:scale-110 transition-all duration-300 ease-in-out"
                                    src={`/${data.img}.jpg`}
                                    alt={data.img}
                                    fill
                                />
                            </div>

                            <p
                                className={`${overlock_superbold.className} text-2xl my-1`}
                            >
                                {data.heading}
                            </p>
                            <p className={`${overlock.className} mb-1`}>
                                {data.text}
                            </p>

                            <p className={`${overlock_bold.className} mb-2`}>
                                {data.price}
                            </p>

                            <button className="absolute bottom-3 right-3 h-[3.5rem] w-[3.5rem] rounded-full bg-black">
                                <Image
                                    className="p-4"
                                    src="/arrow_white.png"
                                    alt="Arrow"
                                    fill
                                />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
