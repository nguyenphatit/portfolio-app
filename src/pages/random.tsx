import { NextPage } from "next";
import Head from "next/head";
import settings from "common/app-settings.json";
import RandomNumberGeneratorSection from "components/RandomNumberGeneratorSection";
import RandomTiersGeneratorSection from "components/RandomTiersGeneratorSection";


const Random: NextPage = () => {
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
            <RandomNumberGeneratorSection />
            {/* <hr /> */}
            {/* <RandomTiersGeneratorSection /> */}
        </>
    );
};

export default Random;
