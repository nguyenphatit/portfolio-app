import { NextPage } from "next";
import Head from "next/head";
import settings from "common/app-settings.json";
import devBlog from "resources/dev-blog.json";
import PostCard from "components/PostCard";

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
            <div className="min-h-[100vh] bg-[#F5F5F7]">
                <div className="container mx-auto py-20">
                    <h1 className="text-6xl font-bold text-success py-10 mx-1 md:mx-auto text-center">
                        {devBlog.title}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {devBlog.posts.map((post, index) => (
                            <PostCard key={index} title={post.title} category={post.category} url={post.url} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
