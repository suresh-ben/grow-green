import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

export default function Footer() {
    return (
        <div 
            className="h-[40rem] relative m-4 rounded-4xl"
            style={{
                backgroundImage: `url('/join-us_t.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Image
                className="object-cover rounded-4xl"
                src="/join-us.jpg"
                alt="Join us"
                fill
            />

            <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="bg-black/50 rounded-4xl w-full h-full" />
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 p-6 mt-8 z-30">
                <div className="flex justify-center items-center relative">
                    <div className="absolute top-[50%] left-[5rem] right-[5rem] flex">
                        <div className="border-t border-white flex-1" />
                        <div className="w-[3.5rem]" />
                        <div className="border-t border-white flex-1" />
                    </div>
                    <div 
                        className="h-[3.5rem] w-[3.5rem] relative"
                        style={{
                            backgroundImage: `url('/logo_t.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            priority
                            className="p-2 bg-[rgba(255,255,255,0.25)] rounded-full"
                        />
                    </div>
                </div>

                <p
                    className={`text-center text-white ${overlock_superbold.className} text-8xl mt-10`}
                >
                    Join the community
                </p>

                <p
                    className={`${overlock.className} text-white text-center mt-8 ${overlock_bold.className}`}
                >
                    Subscribe to the Forager to recieve montly plant tips,
                </p>
                <p
                    className={`${overlock.className} text-white text-center mt-2 ${overlock_bold.className}`}
                >
                    store updates, promotions & more
                </p>

                <div className="bg-white p-10 rounded-4xl mt-8 ">
                    <motion.div
                        className="flex gap-2 mb-8 justify-center items-center"
                    >
                        <FooterButton 
                            label={"Instagram"}
                            imageUrl={"https://img.icons8.com/?size=100&id=32292&format=png"}
                        />

                        <FooterButton 
                            label={"Facebook"}
                            imageUrl={"https://img.icons8.com/?size=100&id=118468&format=png"}
                        />

                        <FooterButton 
                            label={"Twitter"}
                            imageUrl={"https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png"}
                        />

                        <FooterButton 
                            label={"Pintrest"}
                            imageUrl={"https://img.icons8.com/?size=100&id=1481&format=png"}
                        />
                    </motion.div>

                    <hr className="border-black/25" />

                    <p className={`text-center ${overlock.className} mt-8`}>
                        @2025, All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

function FooterButton({ label, imageUrl }) {

    return (
        <button className="flex items-center justify-center gap-2 w-[10rem] py-[.75rem] border-black text-black rounded-full border hover:bg-black hover:text-white transition-colors duration-300 group">
            <div className="relative w-[1.5rem] h-[1.5rem]">
                <img
                    className="block group-hover:hidden"
                    src={`${imageUrl}&color=000000`}
                    alt="Instagram"
                />
                <img
                    className="hidden group-hover:block"
                    src={`${imageUrl}&color=ffffff`}
                    alt="Instagram"
                />
            </div>
            <p>{label}</p>
        </button>
    );
}
