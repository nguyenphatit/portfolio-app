import AtroposCard from "components/AtroposCard";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import TextCard from "../TextCard";

const variants: Variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
        opacity: 0,
        scale: 0.65,
        y: 50,
    },
};

const AboutSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

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
                        About.
                    </motion.h1>
                    <TextCard
                        className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                        backgroundColor="#3FBC5D"
                        backgroundImage="images/mountains.webp"
                        headingTxt="Hey, I am Phat Nguyen"
                        headingStyle="font-bold text-success text-3xl"
                        bodyTxt="I am a software developer currently working at
                            TMA Solutions in Ho Chi Minh City. Since high
                            school* , I started web development out of
                            curiosity, eventually it became a hobby, and
                            after many hobby projects, I thought it would be
                            great to offer my skills to clients. Customers
                            want a great web experience, so here I am. I
                            have a passion for design and development, I
                            want to create things that not only look good
                            but work on multiple levels"
                        bodyStyle="font-bold text-light text-lg w-full sm:w-3/4 leading-normal pb-10"
                        descriptionTxt="*Designing a simple website - Pages 162 - 164 in
                            the 10th grade Informatics book"
                        descriptionStyle="absolute text-right left-10 right-10 bottom-1 md:bottom-10 text-sm italic text-light"
                        descriptionLink="https://drive.google.com/file/d/141jjnLSjcxD3L-2AxjZHL5YZwcaxUSGp/view"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
