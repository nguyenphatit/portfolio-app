import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Button = styled.span<{ visible: boolean }>`
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: saturate(180%) blur(20px);
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const BackToTop = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const ref = useRef<HTMLSpanElement>(null);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled < 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
    });

    return (
        <div className="fixed right-2 md:right-8 bottom-2 md:bottom-16">
            <Button
                ref={ref}
                visible={visible}
                onClick={scrollToTop}
                className="material-symbols-outlined p-2 text-light rounded-full cursor-pointer z-40"
            >
                arrow_upward
            </Button>
        </div>
    );
};

export default BackToTop;
