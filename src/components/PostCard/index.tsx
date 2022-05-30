import AtroposCard from "components/AtroposCard";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Card = styled.div`
    background: #ffffff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    cursor: pointer;
    transition: 0.25s all ease-in-out;
    &:hover {
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
    }
    img {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: 60px;
    }
`;

interface Props {
    title: string;
    description: string;
    url: string;
    image: string;
}

const PostCard: FC<Props> = ({ title, description, url, image }) => (
    <Link href={`${url}`} target="_blank">
        <Card>
            <Image
                src={image}
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="fill"
                alt={title}
            />
            <h1 className="font-heading py-4 px-2 text-primary text-xl">
                {title}
            </h1>
            <div className="px-2 pb-4">{description}</div>
        </Card>
    </Link>
);

export default PostCard;
