import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled.section`
    background-color: #132b79;
    background-image: url("images/cat.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
`;

const Content = styled(motion.div)`
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: saturate(180%) blur(20px);
`;

const HeroSection = () => {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -200]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);
    const [screenSize, setScreenSize] = useState<{ width: number; height: number }>({ width: 0, height: 0});

    useEffect(() => {
        setScreenSize({ width: (window.innerWidth / 2) - 200, height: (window.innerHeight / 2) - 200 });
    }, []);

    return (
        <Wrapper className="h-screen flex flex-col relative justify-center items-center origin-center w-full">
            <Content
                className="flex flex-col justify-center items-center p-6 rounded-3xl select-none cursor-grab"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                drag
                dragConstraints={{
                    top: -(screenSize.height),
                    left: -screenSize.width,
                    right: screenSize.width,
                    bottom: screenSize.height,
                }}
            >
                <div className="font-heading text-4xl text-warning uppercase text-center">
                    Welcome to
                </div>
                <div className="hidden sm:block font-heading text-4xl text-warning uppercase text-center">
                    the
                </div>
                <div className="font-heading text-4xl text-warning uppercase text-center">
                    <span className="block sm:hidden">the</span> Tour De Force
                </div>
            </Content>
            <motion.div
                className="absolute bottom-10 text-center cursor-pointer select-none"
                style={{ y: y2 }}
            >
                <span className="material-icons text-light border-2 rounded-full">
                    expand_more
                </span>
                <motion.h3 className="font-bold text-light" style={{ y: y1 }}>Scroll Down</motion.h3>
            </motion.div>
        </Wrapper>
    );
};

export default HeroSection;
