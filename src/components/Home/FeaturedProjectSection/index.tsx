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

const FeaturedProjectSection = () => {
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
                        className="text-6xl font-bold text-primary py-10"
                    >
                        Featured Projects.
                    </motion.h1>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#538FF7"
                            backgroundImage="images/spotted-rustic.webp"
                            headingTxt="Customer Relationship Management"
                            headingStyle="font-bold text-primary text-2xl"
                            bodyTxt="Allow users to approach and communicate
                                in a lead effective way, and manage lead
                                information such as account information,
                                needs, contact and other issues to serve
                                customers with better products."
                            bodyStyle="text-light text-lg w-full pb-10"
                            descriptionTxt="React.js, Redux, Redux-Saga, Node.js, REST API, Sequelize,js, MySQL"
                            descriptionStyle="text-light text-lg w-full pb-10 font-bold"
                            buttonExpand={true}
                            expandedChildren={
                                <div className="flex flex-col justify-center items-center text-center">
                                    <div>
                                        Implement features, UI suggestion,
                                        coding and bug fixing
                                    </div>
                                    <hr />
                                    <div className="flex flex-row justify-center items-center text-center gap-4">
                                        <Image
                                            src="/images/brands/reactjs.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/images/brands/nodejs.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/images/brands/sequelizejs.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/images/brands/mysql.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </div>
                            }
                        />
                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#538FF7"
                            backgroundImage="images/spotted-rustic.webp"
                            headingTxt="Virtual Class"
                            headingStyle="font-bold text-primary text-2xl"
                            bodyTxt="Developing a web classroom online
                                application, it allows the users teach
                                and learn online"
                            bodyStyle="text-light text-lg w-full pb-10"
                            descriptionTxt="React.js, Gatsby.js, Redux, Redux-Thunk, Node.js, REST API, Sequelize,js, MySQL"
                            descriptionStyle="text-light text-lg w-full pb-10 font-bold"
                            buttonExpand={true}
                            expandedChildren={
                                <div className="flex flex-col justify-center items-center text-center">
                                    <div>
                                        Implement features, coding and bug
                                        fixing
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-center gap-4">
                                        <Image
                                            src="/images/brands/reactjs.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/images/brands/gatsbyjs.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/images/brands/nodejs.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/images/brands/mysql.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </div>
                            }
                        />
                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#538FF7"
                            backgroundImage="images/spotted-rustic.webp"
                            headingTxt="Food Delivery"
                            headingStyle="font-bold text-primary text-2xl"
                            bodyTxt="A web app that helps users to buy easily
                                and to schedule services, appointment
                                booking, from the store."
                            bodyStyle="text-light text-lg w-full pb-10"
                            descriptionTxt="React.js, Redux, Redux-Thunk"
                            descriptionStyle="text-light text-lg w-full pb-10 font-bold"
                            buttonExpand={true}
                            expandedChildren={
                                <div className="flex flex-col justify-center items-center text-center">
                                    <div>
                                        Implement features, UI suggestion,
                                        coding and bug fixing
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-center gap-4">
                                        <Image
                                            src="/images/brands/reactjs.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </div>
                            }
                        />
                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#538FF7"
                            backgroundImage="images/spotted-rustic.webp"
                            headingTxt="Drug Marketplace"
                            headingStyle="font-bold text-primary text-2xl"
                            bodyTxt="Develop a website that allows customers
                                to order drugs and manage deliveries"
                            bodyStyle="text-light text-lg w-full pb-10"
                            descriptionTxt="Angular, Angular Material"
                            descriptionStyle="text-light text-lg w-full pb-10 font-bold"
                            buttonExpand={true}
                            expandedChildren={
                                <div className="flex flex-col justify-center items-center text-center">
                                    <div>
                                        Implement features, code and bug fixing
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-center gap-4">
                                        <Image
                                            src="/images/brands/angular.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </div>
                            }
                        />
                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#538FF7"
                            backgroundImage="images/spotted-rustic.webp"
                            headingTxt="Billing Portal"
                            headingStyle="font-bold text-primary text-2xl"
                            bodyTxt="Develop a web application for invoice
                                management website, this website manage
                                the receipt of invoices"
                            bodyStyle="text-light text-lg w-full pb-10"
                            descriptionTxt="Angular, Node.js, REST API, Sequelize.js, MySQL"
                            descriptionStyle="text-light text-lg w-full pb-10 font-bold"
                            buttonExpand={true}
                            expandedChildren={
                                <div className="flex flex-col justify-center items-center text-center ">
                                    <div>
                                        Implement features, UI suggestion,
                                        coding and bug fixing
                                    </div>
                                    <div className="flex flex-row justify-center items-center text-center gap-4">
                                        <Image
                                            src="/images/brands/angular.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/images/brands/nodejs.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/images/brands/sequelizejs.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                        <Image
                                            src="/images/brands/mysql.svg"
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectSection;
