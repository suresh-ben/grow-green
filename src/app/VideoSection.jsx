import React from "react";
import { Overlock } from "next/font/google";
import Image from "next/image";

const overlock = Overlock({
    weight: "400",
    subsets: ["latin"],
});

const overlock_superbold = Overlock({
    weight: "900",
    subsets: ["latin"],
});

export default function VideoSection() {
    return (
        <div className="">
            <p
                className={`${overlock_superbold.className} text-9xl text-center px-10 py-20 mt-15`}
            >
                Quality Plants & Curated Goods
            </p>
            <p className={`${overlock.className} text-center px-[20%] mb-30`}>
                We offer carefully curated selection of indoor and outdoor
                plants, hand crafted home goods that put quality ahead of
                quantity, and living art made right here in the shop:
                terrariums, landscapes, arrangements, vessels and holders.
            </p>

            <div 
                className="flex justify-center items-center mx-[20%] mb-20 aspect-[1366/720] rounded-4xl relative"
                style={{
                    backgroundImage: `url('/gardening_thumb_t.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <Image 
                    className="object-cover rounded-4xl"
                    src="/gardening_thumb.jpg"
                    alt="Gardening"
                    fill
                />
                <video
                    className="rounded-4xl relative z-50"
                    src="/gardening.mp4"
                    autoPlay={true}
                    loop={true}
                    muted
                    playsInline
                />
            </div>
        </div>
    );
}
