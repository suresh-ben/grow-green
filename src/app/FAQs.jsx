"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { Overlock } from "next/font/google";
import { div } from "framer-motion/client";

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

export default function FAQs() {
    return (
        <div className="flex flex-col p-10 py-20 gap-6 mb-10">
            {[
                {
                    question: "Ordering for Delivery?",
                    answer: "Delivery is available in the US and Canada, please contact us at 1-800-123-4567 for more information. Delivery is available in the US and Canada, please contact us at 1-800-123-4567 for more information.",
                },
                {
                    question: "Potting Services",
                    answer: "We offer potting on in store purechase or you are welcome to bring in your own and we can pot them for you . There is a ependoing one what supplies are used. Visit us or call us for more details.",
                },
                {
                    question: "Do you ship plants?",
                    answer: "We offer shipping for indoor and outdoor plants. Please contact us at 1-800-123-4567 for more information.",
                },
                {
                    question: "Ordering for Pickup?",
                    answer: "Pickup is available in the US and Canada. Please contact us at 1-800-123-4567 for more information.",
                },
            ].map((data, ind) => {
                return (
                    <FAQ
                        key={ind}
                        question={data.question}
                        answer={data.answer}
                    />
                );
            })}
        </div>
    );
}

function FAQ({ question, answer }) {
    const [isQuestionOpen, setIsQuestionOpen] = useState(false);

    return (
        <div
            className="rounded-4xl border border-black p-10 flex justify-between items-center cursor-pointer"
            onClick={() => {
                setIsQuestionOpen(!isQuestionOpen);
            }}
        >
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center w-full">
                    <p className={`${overlock_superbold.className} text-4xl`}>
                        {question}
                    </p>

                    <motion.div 
                        className="h-[3rem] w-[3rem] rounded-full border border-black relative"
                        initial={{
                            rotate: 45
                        }}
                        animate={{
                            rotate: isQuestionOpen ? -45 : 45
                        }}
                    >
                        <Image
                            className="p-3"
                            src="/arrow.png"
                            alt="Arrow down"
                            width={100}
                            height={100}
                        />
                    </motion.div>
                </div>

                <motion.div 
                    className="overflow-hidden"
                    initial={{
                        height: 0,
                        marginTop: 0
                    }}
                    animate={{
                        height: isQuestionOpen ? "auto" : 0,
                        marginTop: isQuestionOpen ? "1rem" : 0
                    }}
                >
                    <p className={`${overlock.className}`}>{answer}</p>
                </motion.div>
            </div>
        </div>
    );
}
