import AtroposCard from "components/AtroposCard";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextCard from "../TextCard";

const variants: Variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
        opacity: 0,
        scale: 0.65,
        y: 50,
    },
};

const SkillSection = () => {
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
                        className="text-6xl font-bold text-error py-10"
                    >
                        Skills.
                    </motion.h1>
                    <TextCard
                        className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                        backgroundColor="#ec5e4f"
                        backgroundImage="images/archer.jpg"
                        headingTxt="I'm a Front-end Developer"
                        headingStyle="font-bold text-error text-3xl"
                        bodyTxt="I have experience in Javascript, Typescript,
                            CSS/SASS, HTML, Pug, Node.js, React.js, Next.js,
                            Gatsby.js, Angular, RestAPI, GraphQL, Figma,
                            Adobe XD and more... I prefer to learn skills as
                            I need them, so I can focus on finding solutions
                            to problems instead of trying to implement new
                            technologies for the sake of implementing them."
                        bodyStyle="font-bold text-light text-lg w-full sm:w-3/4 leading-normal pb-10"
                    />
                </div>
            </div>
            <div className="container mx-auto py-5 pt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <AtroposCard>
                        <TextCard
                            className="min-h-[60vh] p-10 relative mx-1 md:mx-auto flex flex-col justify-center"
                            backgroundColor="#ffffff"
                            backgroundImage="images/watercolor.jpg"
                            headingTxt="Speed"
                            headingStyle="font-bold text-error text-2xl"
                            bodyTxt="How quickly the client wants their website,
                                and accordingly what tools will ensure high
                                levels of speed."
                            bodyStyle="text-dark text-lg w-full pb-10 font-bold"
                        />
                    </AtroposCard>
                    <AtroposCard>
                        <TextCard
                            className="min-h-[60vh] p-10 relative mx-1 md:mx-auto flex flex-col justify-center"
                            backgroundColor="#ffffff"
                            backgroundImage="images/watercolor.jpg"
                            headingTxt="Efficiency"
                            headingStyle="font-bold text-error text-2xl"
                            bodyTxt="Making sure not to waste resources, time
                            and/or effort, so users can get the most out
                            of the final product."
                            bodyStyle="text-dark text-lg w-full pb-10 font-bold"
                        />
                    </AtroposCard>
                    <AtroposCard>
                        <TextCard
                            className="min-h-[60vh] p-10 relative mx-1 md:mx-auto flex flex-col justify-center"
                            backgroundColor="#ffffff"
                            backgroundImage="images/watercolor.jpg"
                            headingTxt="Ease-of-use"
                            headingStyle="font-bold text-error text-2xl"
                            bodyTxt="The site needs to be easy to use, easy
                            enough so users can navigate through the
                            site without breaking a sweat."
                            bodyStyle="text-dark text-lg w-full pb-10 font-bold"
                        />
                    </AtroposCard>
                    <AtroposCard>
                        <TextCard
                            className="min-h-[60vh] p-10 relative mx-1 md:mx-auto flex flex-col justify-center"
                            backgroundColor="#ffffff"
                            backgroundImage="images/watercolor.jpg"
                            headingTxt="Impact"
                            headingStyle="font-bold text-error text-2xl"
                            bodyTxt="As the representation of you or your
                            business online, the site should leave an
                            impact that encourages users to visit again."
                            bodyStyle="text-dark text-lg w-full pb-10 font-bold"
                        />
                    </AtroposCard>
                </div>
            </div>
        </section>
    );
};

export default SkillSection;
