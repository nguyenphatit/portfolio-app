import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled.section`
    background-color: #132b79;
    background-image: url("images/cat.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`;

const Content = styled(motion.div)`
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: saturate(180%) blur(20px);
`;

const HeroSection = () => {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -300]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);

    return (
        <>
            <Wrapper className="h-screen flex flex-col relative justify-center items-center origin-center w-full">
                <Content
                    className="flex flex-col justify-center items-center p-6 rounded-lg"
                    style={{ y: y1 }}
                >
                    <div className="font-heading text-4xl text-warning uppercase text-center">
                        Welcome to
                    </div>
                    <div className="hidden sm:block font-heading text-4xl text-warning uppercase text-center">
                        the
                    </div>
                    <div className="font-heading text-4xl text-warning uppercase text-center">
                        <span className="block sm:hidden">the</span> Tour De
                        Force
                    </div>
                </Content>
                <motion.div className="absolute bottom-10 text-center cursor-pointer select-none" style={{ y: y2 }}>
                    <span className="material-icons text-light border-2 rounded-full">
                        expand_more
                    </span>
                    <h3 className="font-bold text-light">Scroll Down</h3>
                </motion.div>
            </Wrapper>
        </>
    );
};

export default HeroSection;
