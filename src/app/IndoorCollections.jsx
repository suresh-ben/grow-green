import React from "react";
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

export default function IndoorCollections() {
    return (
        <div className="mt-15">
            <div className="flex items-center px-10 py-20 gap-4">
                <p className={`${overlock_bold.className}`}>
                    Bring nature inside and shop our big selections of fresh
                    indoor plants, including instagram-worthy houseplants,
                    pet-friendly plants, orchids and one-of-a-kind rare plants.
                </p>

                <p
                    className={`${overlock_superbold.className} text-9xl w-[165rem]`}
                >
                    Indoor Collection
                </p>
            </div>

            <div className="px-10 flex gap-6 flex-wrap mb-10">
                {[
                    {
                        img: "plants_04",
                        initial: { x: -20, y: 0, opacity: 0 },
                        heading: "Pepotential Plants",
                        text: "Moist but well-drained",
                        price: "$120",
                        width: "w-[calc(60%-1.5rem)]"
                    },
                    {
                        img: "plants_03",
                        initial: { x: 0, y: 20, opacity: 0 },
                        heading: "Fiddle-leaf Fig",
                        text: "Medium moist, well-drained",
                        price: "$160",
                        width: "w-[40%]"
                    },
                    {
                        img: "plants_05",
                        initial: { x: 20, y: 0, opacity: 0 },
                        heading: "Calathea Orbitalis",
                        text: "Moist but well-drained",
                        price: "$150",
                        width: "w-[40%]"
                    },
                    {
                        img: "plants_01",
                        initial: { x: 20, y: 0, opacity: 0 },
                        heading: "Calathea Orbitalis",
                        text: "Moist but well-drained",
                        price: "$150",
                        width: "w-[calc(60%-1.5rem)]"
                    },
                ].map((data) => {
                    return (
                        <div
                            key={data.img}
                            className={`bg-white rounded-4xl p-3 relative group cursor-pointer ${data.width} h-[20rem] relative overflow-hidden group cursor-pointer`}
                            style={{
                                backgroundImage: `url('/${data.img}_t.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <Image 
                                className="object-cover"
                                src={`/${data.img}.jpg`}
                                alt={data.img}
                                fill
                            />

                            <div className="absolute top-0 left-0 bottom-0 right-0 z-20 text-white flex items-end p-10">
                                <div className="bg-transparent group-hover:bg-[rgba(255,255,255,0.25)] group-hover:p-4 group-hover:backdrop-blur-sm transition-all duration-300 ease-in-out rounded-2xl">
                                    <p className={`${overlock_superbold.className} text-4xl group-hover:mb-4`}>{data.heading}</p>
                                    <p className={`group-hover:block hidden ${overlock.className} h-0 group-hover:h-auto`}>{data.text}</p>
                                </div>

                                <button className="absolute top-[1.5rem] right-[1.5rem] h-[3rem] w-[3rem] rounded-full border border-white group-hover:bg-white">
                                    <Image 
                                        className="p-3 block group-hover:hidden"
                                        src="/arrow_white.png"
                                        alt="Arrow"
                                        fill
                                    />
                                    <Image 
                                        className="p-3 hidden group-hover:block"
                                        src="/arrow.png"
                                        alt="Arrow"
                                        fill
                                    />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
