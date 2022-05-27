import styled from "styled-components";

const TextCard = styled.div`
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
                        <h1 className="text-6xl font-bold text-success py-10">
                            About.
                        </h1>
                        <TextCard className="w-full h-[70vh] p-10 relative">
                            <h1 className="font-bold text-success text-3xl">
                                Hey, I am Phat Nguyen
                            </h1>
                            <p className="font-bold text-light text-lg w-full sm:w-3/4 leading-relaxed">
                                I am a software developer currently working at
                                TMA Solutions in Ho Chi Minh City. Since high
                                school* , I started web development out of
                                curiosity, eventually it became a hobby, and
                                after many hobby projects, I thought it would be
                                great to offer my skills to clients. Customers
                                want a great web experience, so here I am. I
                                have a passion for design and development, I
                                want to create things that not only look good
                                but work on multiple levels
                            </p>
                            <div className="absolute text-right right-10 bottom-10 italic text-light">
                                *Designing a simple website - Pages 162 - 164 in
                                the 10th grade Informatics book{" "}
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/141jjnLSjcxD3L-2AxjZHL5YZwcaxUSGp/view"
                                >
                                    <span className="material-symbols-outlined text-sm">
                                        open_in_new
                                    </span>
                                </a>
                            </div>
                        </TextCard>
                    </div>
                </div>
            </section>
            <section className="bg-[#F5F5F7]">
                <div className="container mx-auto py-20">
                    <div className="w-full">
                        <h1 className="text-6xl font-bold text-dark py-10">
                            Experiences.
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
        </>
    );
};

export default AboutSection;
