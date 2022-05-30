import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants: Variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
        opacity: 0,
        scale: 0.65,
        y: 50,
    },
};

const HighlightSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    return (
        <section className="bg-[#F5F5F7] py-10">
            <div className="container mx-auto">
                <div className="mx-1 md:mx-auto">
                    <motion.h1
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        ref={ref}
                        className="text-6xl font-bold text-dark py-10"
                    >
                        Highlights.
                    </motion.h1>
                    <div className="font-bold text-dark text-lg w-full sm:w-3/4 leading-relaxed pl-2">
                        <div>2018 - Present: Working at TMA Solutions</div>
                        <ol className="list-disc pl-6">
                            <li>3 years React.JS development</li>
                            <li>2 years Node.JS development</li>
                            <li>1+ years Angular development</li>
                            <li>
                                Experience working with using remote data via
                                REST APIs, JSON, and GraphQL as well as
                                integrating with third-party libraries
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightSection;
