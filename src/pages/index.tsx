import type { NextPage } from "next";
import Head from "next/head";
import settings from "common/app-settings.json";
import HeroSection from "components/Home/HeroSection";
import AboutSection from "components/Home/AboutSection";
import Contact from "components/Home/ContactSection";
import DonateSection from "components/Home/DonateSection";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{settings.appName}</title>
                <meta name="description" content="Tour De Force" />
                <meta name="description" content="Nguyen Tan Phat" />
                <meta name="description" content="nguyenphatit" />
                <meta name="og:title" content="Tour De Force" />
                <meta name="twitter:card" content="@nguyenphatit" />
                <meta name="twitter:creator" content="@nguyenphatit" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroSection />
            <AboutSection />
            <Contact />
            <DonateSection />
        </>
    );
};

export default Home;
