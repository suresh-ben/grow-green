"use client";
import Hero from "./Hero";
import Section2 from "./Section2";
import Collections from "./Collections";
import MoistCollections from "./MoistCollections";
import IndoorCollections from "./IndoorCollections";
import VideoSection from "./VideoSection";
import FAQs from "./FAQs";
import Footer from "./Footer";
import "./index.css";

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
