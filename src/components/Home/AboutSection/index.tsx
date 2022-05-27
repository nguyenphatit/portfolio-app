import styled from "styled-components";

const TextCard = styled.div`
    background-color: #EC5E4F;
    background-image: url("images/jhin.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`

const AboutSection = () => {
    return (
        <section className="bg-[#F5F5F7]">
            <div className="container mx-auto py-10">
                <div className="w-full">
                    <h1 className="text-6xl font-bold text-error py-10">
                        About.
                    </h1>
                    <TextCard className="text-2xl text-justify w-full max-h-128 p-6 text-light rounded-xl">
                        Hey, I am Okiki Ojo (pronounced O-key-key O-jo), I’m a
                        student currently studying Software Engineering at
                        Ontario Tech University (formerly University of Ontario
                        Institute of Technology, UOIT). From a very young age,
                        I've always been interested in tech, and science.
                        Initially, I started web development out of curiosity,
                        eventually it became a hobby, and after many hobby
                        projects (e.g. Open Source projects; read more in
                        featured projects ), I thought it would be cool to offer
                        my skills to clients who want awesome web experiences,
                        thus here we are. I have a passion for design and
                        development, I like to create things that don’t just
                        look good, but that also function on multiple levels. I
                        am always eager to take on a challenge, and aim to
                        exceed in all tasks I take on. I develop websites that
                        are functional, efficient and that act as an excellent
                        representation of a person or business on the digital
                        landscape. I have 5+ years of experience designing
                        sites, I would love to bring your digital vision to
                        reality.
                    </TextCard>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
