import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import settings from "common/app-settings.json";

const Blog: NextPage = () => {
    return (
        <>
            <Head>
                <title>Blog | {settings.appName}</title>
                <meta name="description" content="Tour De Force" />
                <meta name="description" content="Nguyen Tan Phat" />
                <meta name="description" content="nguyenphatit" />
                <meta name="og:title" content="Tour De Force" />
                <meta name="twitter:card" content="@nguyenphatit" />
                <meta name="twitter:creator" content="@nguyenphatit" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-[100vh]">
                <div className="container mx-auto py-20">
                    <h1 className="text-6xl font-bold text-success py-10 mx-1 md:mx-auto text-center">
                        Coming soon.
                    </h1>
                    <div className="text-xl font-bold mx-1 md:mx-auto text-center">
                        We&apos;re working hard to do that <br />
                        <Link href={"/"}>
                            <a className="text-warning">Back to home</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
