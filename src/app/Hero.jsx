import React from "react";
import Image from "next/image";
import { Overlock } from "next/font/google";
import { motion } from "framer-motion";
import TransparentScreen from "./TransparentScreen";

const overlock = Overlock({
    weight: '400',
    subsets: ['latin'],
});

const overlock_bold = Overlock({
    weight: '700',
    subsets: ['latin'],
});

const overlock_superbold = Overlock({
    weight: '900',
    subsets: ['latin'],
});

export default function Hero() {
    return (
        <div className="relative">
            <div className="absolute w-screen h-screen">
                <Image
                    className="rounded-b-4xl"
                    src="/hero-background.jpg"
                    alt="Hero background"
                    priority
                    fill
                />
            </div>

            <div
                className={`relative z-10 w-screen h-screen text-white flex flex-col ${overlock.className}`}
            >
                <nav className="flex justify-between items-center p-10">
                    <motion.div
                        className=""
                        initial={{ opacity: 0.5, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative aspect-square h-[3rem]">
                            <Image src="/logo.png" alt="Logo" fill priority />
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0.5, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button className="w-[10rem] py-[.75rem] border-white text-white rounded-full border hover:bg-white hover:text-black transition-colors duration-300">
                            <p>Home</p>
                        </button>

                        <button className="w-[10rem] py-[.75rem] border-white text-white rounded-full border hover:bg-white hover:text-black transition-colors duration-300">
                            <p>Contact</p>
                        </button>

                        <button className="w-[10rem] py-[.75rem] border-white text-white rounded-full border hover:bg-white hover:text-black transition-colors duration-300">
                            <p>Blog</p>
                        </button>
                    </motion.div>
                </nav>

                <div className="flex-1 flex w-full justify-center items-center -mt-20">
                    <div className="mx-[15%] flex flex-col justify-center items-center">
                        <div>
                            <p
                                className={`${overlock_superbold.className} text-4xl`}
                            >
                                Petal Power
                            </p>
                            <p
                                className={`text-[15rem] ${overlock_superbold.className} -mt-24`}
                            >
                                growth
                            </p>
                        </div>
                        <p className="w-[70%] text-center">
                            we're your online houseplant destinatiojn. We offer
                            a wide range of houseplants and accessories shipped
                            directly from our (green)house to yours.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 bg-white z-20 rounded-tl-4xl hero-shop-button">
                <button className="m-4 w-[20rem] py-[.75rem] border-black text-black rounded-full border hover:bg-black hover:text-white transition-colors duration-300">
                    <p className={`${overlock_bold.className}`}>
                        Shop tropical plants
                    </p>
                </button>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 z-20 p-10 flex gap-2"
                initial={{ opacity: 0.5, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TransparentScreen>
                    <div>
                        <p
                            className={`${overlock_superbold.className} text-2xl mb-2`}
                        >
                            100+ Plants
                        </p>
                        <p className={`${overlock.className}`}>
                            We want our vision to be inspired to get their hands
                            dirty
                        </p>
                    </div>
                </TransparentScreen>

                <TransparentScreen maxwidthClass="w-[6rem]">
                    <div className="flex justify-center items-center flex-col absolute top-0 left-0 ml-[1rem] mt-[1rem]">
                        <div className="h-[4rem] w-[4rem] relative rounded-full border-white border overflow-hidden">
                            <Image
                                className=""
                                src="/plants_01.jpg"
                                alt="Plants_01"
                                fill
                            />
                        </div>
                        <div className="h-[4rem] w-[4rem] relative rounded-full border-white border overflow-hidden -mt-[2rem]">
                            <Image
                                className=""
                                src="/plants_02.jpg"
                                alt="Plants_01"
                                fill
                            />
                        </div>
                        <div className="h-[4rem] w-[4rem] relative rounded-full border-white border overflow-hidden -mt-[2rem]">
                            <Image
                                className=""
                                src="/plants_03.jpg"
                                alt="Plants_01"
                                fill
                            />
                        </div>
                    </div>
                </TransparentScreen>
            </motion.div>
        </div>
    );
}
