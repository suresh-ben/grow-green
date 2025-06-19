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

export default function Section2() {
    return (
        <div className={`${overlock.className} pt-15 relative z-50 bg-[#f2f2f2]`}>
            <div className="flex justify-center items-center">
                <div className="flex p-10 gap-6 justify-center items-center">
                    <div className="w-[20rem]">
                        <p
                            className={`${overlock_superbold.className} text-5xl mb-6`}
                        >
                            Plants for the People
                        </p>
                        <p>
                            we want our vision to be inspired to get their hands
                            dirty
                        </p>
                    </div>

                    <div className="w-[15rem] -ml-4 relative">
                        <video
                            autoPlay={true}
                            loop={true}
                            muted
                            playsInline
                            width="100%"
                            src={"/plants_01.mp4"}
                            className="rounded-4xl"

                            style={{
                                backgroundImage: `url('/plants_01_thumb.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />

                        <div className="absolute top-[50%] -right-[.25rem] bg-white translate-y-[-50%] rounded-full p-[.25rem]">
                            <div className="h-[2.75rem] w-[2.75rem] rounded-full relative bg-black">
                                <Image
                                    className="p-3"
                                    src="/play.png"
                                    alt="Play"
                                    fill
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`flex-1 flex flex-col ${overlock_bold.className} w-[30rem] text-2xl`}
                    >
                        <div className={`flex gap-2 items-center`}>
                            <p className="">Each plant is cared </p>
                            <div 
                                className="w-[7rem] h-[2.25rem] relative rounded-full overflow-hidden"
                                style={{
                                    backgroundImage: `url('/plants_01_t.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <Image
                                    className="object-cover"
                                    src="/plants_01.jpg"
                                    alt="Plants"
                                    fill
                                />
                            </div>
                            <p className="text-2xl inline">for by our </p>
                        </div>
                        <p>
                            horticulture experts, so they are as happy as
                            healthy as they get.
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-10 mt-10">
                <div className="flex justify-between">
                    <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <button className="w-[10rem] py-[.75rem] border-black text-black rounded-full border hover:bg-black hover:text-white transition-colors duration-300">
                            <p>Home</p>
                        </button>

                        <button className="w-[10rem] py-[.75rem] border-black text-black rounded-full border hover:bg-black hover:text-white transition-colors duration-300">
                            <p>Contact</p>
                        </button>

                        <button className="w-[10rem] py-[.75rem] border-black text-black rounded-full border hover:bg-black hover:text-white transition-colors duration-300">
                            <p>Blog</p>
                        </button>
                    </motion.div>

                    <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <button className="w-[10rem] py-[.75rem] border-black text-black rounded-full border hover:bg-black hover:text-white transition-colors duration-300">
                            <p>See All</p>
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
