import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import settings from "common/app-settings.json";
import devBlog from "resources/dev-blog.json";
import PostCard from "components/PostCard";
import axios from "axios";
import { DEV_TO_URL } from "common/constants";
import { Article } from "types/article";
import styled from "styled-components";

export const getStaticProps: GetStaticProps = async (context) => {
    const response = await axios.get(`${DEV_TO_URL}${process.env.USER_NAME}`);
    return {
        props: {
            articles: response.data,
        },
    };
};

const Heading = styled.h1`
    background: -webkit-linear-gradient(
        320deg,
        #06b7db -63.59%,
        #ff4ecd -20.3%,
        #0072f5 70.46%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

interface Props {
    articles: Article[];
}

const Blog: NextPage<Props> = ({ articles }) => (
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
                <Heading className="text-6xl font-bold text-success py-10 mx-1 md:mx-auto text-center">
                    Think outside the box.
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {articles.map((article: Article, index: number) => (
                        <PostCard
                            key={article.id}
                            title={article.title}
                            description={article.description}
                            image={article.cover_image || article.social_image}
                            url={article.canonical_url}
                            publishedAt={article.published_at}
                            readingTimeMinutes={article.reading_time_minutes}
                            tagList={article.tag_list}
                        />
                    ))}
                </div>
            </div>
        </div>
    </>
);

export default Blog;
