import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AtroposCard from "components/AtroposCard";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import BuyMeACoffee from "../BuyMeACoffee";

const Heading = styled.div`
    background: -webkit-linear-gradient(
        320deg,
        #06b7db -63.59%,
        #ff4ecd -20.3%,
        #0072f5 70.46%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const variants: Variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
        opacity: 0,
        scale: 0.65,
        y: 50,
    },
};

const ActionSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    const handleClick = () => {
        window.location.href = `https://app.daily.dev/${process.env.USER_NAME || 'nguyenphatit'}`;
    };

    return (
        <section className="bg-[#F5F5F7] py-10">
            <div className="container mx-auto">
                <div className="w-full">
                    <motion.h1
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        ref={ref}
                        className="text-6xl font-bold text-success py-10 mx-1 md:mx-auto"
                    >
                        <Heading>Actions.</Heading>
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <AtroposCard
                            className="flex justify-center items-center cursor-pointer"
                            shadowScale={0.5}
                            activeOffset={20}
                            onClick={handleClick}
                        >
                            <Image
                                src={`https://api.daily.dev/devcards/c2b2d3add5eb4d0aadd743c895e4ad6f.png?r=g9b`}
                                alt=""
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                priority
                            />
                        </AtroposCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActionSection;
