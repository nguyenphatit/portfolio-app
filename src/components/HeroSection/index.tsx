import styled from "styled-components";
import ListAnimation from "components/ListAnimation";

const Wrapper = styled.section`
    background-color: #132b79;
    background-image: url("images/bg-hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`

const HeroSection = () => {
    return (
        <Wrapper className="h-screen flex justify-center items-center origin-center w-full">
            <h1>HELLO</h1>
        </Wrapper>
    );
};

export default HeroSection;
