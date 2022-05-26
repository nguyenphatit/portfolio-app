import styled from "styled-components";

const Wrapper = styled.section`
    background-color: #132b79;
    background-image: url("images/bg-hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`;

const Content = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: saturate(180%) blur(20px);
`

const HeroSection = () => {
    return (
        <Wrapper className="h-screen flex justify-center items-center origin-center w-full">
            <Content className="flex flex-col justify-center items-center p-6 rounded-lg">
                <div className="font-heading text-7xl text-warning uppercase">Welcome to</div>
                <div className="font-heading text-7xl text-warning uppercase">
                    the Tour De Force
                </div>
            </Content>
        </Wrapper>
    );
};

export default HeroSection;
