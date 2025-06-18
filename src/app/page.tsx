"use client";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Section2 from "./Section2";
import Collections from "./Collections";
import MoistCollections from "./MoistCollections";
import IndoorCollections from "./IndoorCollections";
import VideoSection from "./VideoSection";
import FAQs from "./FAQs";
import Footer from "./Footer";
import Image from "next/image";
import { Overlock } from "next/font/google";
import "./index.css";

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

export default function Home() {
    return (
        <>
            <Hero />
            <Section2 />
            <Collections />
            <MoistCollections />
            <IndoorCollections />
            <VideoSection />
            <FAQs />

            <Footer />
        </>
    );
}
