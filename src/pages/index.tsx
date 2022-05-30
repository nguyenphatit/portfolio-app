import type { NextPage } from "next";
import Head from "next/head";
import settings from "common/app-settings.json";
import HeroSection from "components/Home/HeroSection";
import AboutSection from "components/Home/AboutSection";
import Contact from "components/Home/ContactSection";
import HighlightSection from "components/Home/HighlightSection";
import SkillSection from "components/Home/SkillSection";
import FeaturedProjectSection from "components/Home/FeaturedProjectSection";
import ActionSection from "components/Home/ActionSection";

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
            <HighlightSection />
            <SkillSection />
            <FeaturedProjectSection />
            <Contact />
            <ActionSection />
        </>
    );
};

export default Home;
