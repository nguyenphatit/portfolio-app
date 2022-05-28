import Image from "next/image";
import styled from "styled-components";
import TextCard from "../TextCard";

const TextCardOld = styled.div`
    background-color: #ec5e4f;
    background-image: url("images/jhin.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
`;

const AboutSection = () => {
    return (
        <>
            <section className="bg-[#F5F5F7]">
                <div className="container mx-auto py-20">
                    <div className="w-full">
                        <h1 className="text-6xl font-bold text-success py-10 mx-1 md:mx-auto">
                            About.
                        </h1>
                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#3FBC5D"
                            backgroundImage="images/jhin.jpg"
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
            <section className="bg-[#F5F5F7]">
                <div className="container mx-auto py-20">
                    <div className="mx-1 md:mx-auto">
                        <h1 className="text-6xl font-bold text-dark py-10">
                            Highlight.
                        </h1>
                        <div className="font-bold text-dark text-lg w-full sm:w-3/4 leading-relaxed pl-6">
                            <ol className="list-disc">
                                <li>3 years React.JS development</li>
                                <li>2 years Node.JS development</li>
                                <li>1+ years Angular development</li>
                                <li>
                                    Experience working with using remote data
                                    via REST APIs, JSON, and GraphQL as well as
                                    integrating with third-party libraries
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F5F5F7]">
                <div className="container mx-auto py-20 pb-5">
                    <div className="mx-1 md:mx-auto">
                        <h1 className="text-6xl font-bold text-error py-10">
                            Skills.
                        </h1>
                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#ec5e4f"
                            backgroundImage="images/jhin.jpg"
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
                <div className="container mx-auto py-20 pt-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#ec5e4f"
                            backgroundImage="images/jhin.jpg"
                            headingTxt="Speed"
                            headingStyle="font-bold text-error text-2xl"
                            bodyTxt="How quickly the client wants their website,
                                and accordingly what tools will ensure high
                                levels of speed."
                            bodyStyle="text-light text-lg w-full pb-10"
                        />
                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#ec5e4f"
                            backgroundImage="images/jhin.jpg"
                            headingTxt="Efficiency"
                            headingStyle="font-bold text-error text-2xl"
                            bodyTxt="Making sure not to waste resources, time
                            and/or effort, so users can get the most out
                            of the final product."
                            bodyStyle="text-light text-lg w-full pb-10"
                        />

                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#ec5e4f"
                            backgroundImage="images/jhin.jpg"
                            headingTxt="Ease-of-use"
                            headingStyle="font-bold text-error text-2xl"
                            bodyTxt="The site needs to be easy to use, easy
                            enough so users can navigate through the
                            site without breaking a sweat."
                            bodyStyle="text-light text-lg w-full pb-10"
                        />

                        <TextCard
                            className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                            backgroundColor="#ec5e4f"
                            backgroundImage="images/jhin.jpg"
                            headingTxt="Impact"
                            headingStyle="font-bold text-error text-2xl"
                            bodyTxt="As the representation of you or your
                            business online, the site should leave an
                            impact that encourages users to visit again."
                            bodyStyle="text-light text-lg w-full pb-10"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-[#F5F5F7]">
                <div className="container mx-auto py-20">
                    <div className="mx-1 md:mx-auto">
                        <h1 className="text-6xl font-bold text-primary py-10">
                            Featured Projects.
                        </h1>
                    </div>
                    <div className="container mx-auto py-20 pt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <TextCard
                                className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                                backgroundColor="#538FF7"
                                backgroundImage="images/jhin.jpg"
                                headingTxt="Customer Relationship Management"
                                headingStyle="font-bold text-primary text-2xl"
                                bodyTxt="Allow users to approach and communicate
                                in a lead effective way, and manage lead
                                information such as account information,
                                needs, contact and other issues to serve
                                customers with better products"
                                bodyStyle="text-light text-lg w-full pb-10"
                                buttonExpand={true}
                                expandedChildren={
                                    <div className="flex flex-col justify-center items-center text-center">
                                        <div>Implement features, UI suggestion, coding and bug fixing</div>
                                        <hr />
                                        <div className="flex flex-row justify-center items-center text-center gap-4">
                                            <Image src="/images/brands/reactjs.svg" alt="" width={30} height={30} />
                                            <Image src="/images/brands/nodejs.svg" alt="" width={30} height={30} />
                                            <Image src="/images/brands/sequelizejs.svg" alt="" width={30} height={30} />
                                            <Image src="/images/brands/mysql.svg" alt="" width={30} height={30} />
                                        </div>
                                    </div>
                                }
                            />
                            <TextCard
                                className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                                backgroundColor="#538FF7"
                                backgroundImage="images/jhin.jpg"
                                headingTxt="Virtual Class"
                                headingStyle="font-bold text-primary text-2xl"
                                bodyTxt="Developing a web classroom online
                                application, it allows the users teach
                                and learn online"
                                bodyStyle="text-light text-lg w-full pb-10"
                                buttonExpand={true}
                                expandedChildren={
                                    <div className="flex flex-col justify-center items-center text-center">
                                        <div>Implement features, coding and bug fixing</div>
                                        <div className="flex flex-row justify-center items-center text-center gap-4">
                                            <Image src="/images/brands/reactjs.svg" alt="" width={30} height={30} />
                                            <Image src="/images/brands/gatsbyjs.svg" alt="" width={30} height={30} />
                                            <Image src="/images/brands/nodejs.svg" alt="" width={30} height={30} />
                                            <Image src="/images/brands/mysql.svg" alt="" width={30} height={30} />
                                        </div>
                                    </div>
                                }
                            />
                            <TextCard
                                className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                                backgroundColor="#538FF7"
                                backgroundImage="images/jhin.jpg"
                                headingTxt="Food Delivery"
                                headingStyle="font-bold text-primary text-2xl"
                                bodyTxt="A web app that helps users to buy easily
                                and to schedule services, appointment
                                booking, from the store."
                                bodyStyle="text-light text-lg w-full pb-10"
                                buttonExpand={true}
                                expandedChildren={
                                    <div className="flex flex-col justify-center items-center text-center">
                                        <div>Design, Implement features, coding and bug fixing</div>
                                        <div className="flex flex-row justify-center items-center text-center gap-4">
                                            <Image src="/images/brands/reactjs.svg" alt="" width={30} height={30} />
                                        </div>
                                    </div>
                                }
                            />
                            <TextCard
                                className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                                backgroundColor="#538FF7"
                                backgroundImage="images/jhin.jpg"
                                headingTxt="Drug Marketplace"
                                headingStyle="font-bold text-primary text-2xl"
                                bodyTxt="Develop a website that allows customers
                                to order drugs and manage deliveries"
                                bodyStyle="text-light text-lg w-full pb-10"
                                buttonExpand={true}
                                expandedChildren={
                                    <div className="flex flex-col justify-center items-center text-center">
                                        <div>Implement features, code and bug fixing</div>
                                        <div className="flex flex-row justify-center items-center text-center gap-4">
                                            <Image src="/images/brands/angular.svg" alt="" width={30} height={30} />
                                        </div>
                                    </div>
                                }
                            />
                            <TextCard
                                className="min-h-[80vh] p-10 relative mx-1 md:mx-auto"
                                backgroundColor="#538FF7"
                                backgroundImage="images/jhin.jpg"
                                headingTxt="Billing Portal"
                                headingStyle="font-bold text-primary text-2xl"
                                bodyTxt="Develop a web application for invoice
                                management website, this website manage
                                the receipt of invoices"
                                bodyStyle="text-light text-lg w-full pb-10"
                                buttonExpand={true}
                                expandedChildren={
                                    <div className="flex flex-col justify-center items-center text-center ">
                                        <div>Implement features, UI suggestion, coding and bug fixing</div>
                                        <div className="flex flex-row justify-center items-center text-center gap-4">
                                            <Image src="/images/brands/nodejs.svg" alt="" width={30} height={30} />
                                            <Image src="/images/brands/angular.svg" alt="" width={30} height={30} />
                                            <Image src="/images/brands/sequelizejs.svg" alt="" width={30} height={30} />
                                            <Image src="/images/brands/mysql.svg" alt="" width={30} height={30} />
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;
