import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{
    backgroundColor: string;
    backgroundImage: string;
}>`
    background-color: ${(props) => props.backgroundColor};
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    overflow: hidden;
`;

const Button = styled.button<{ expanded: boolean; color: string }>`
    span {
        border-radius: 9999px;
        background: ${(props) => (props.expanded ? "#ffffff" : "#80868B")};
        color: ${(props) => (props.expanded ? props.color : "#ffffff")};
        transform: rotate(${(props) => (props.expanded ? "45deg" : "0deg")});
        transition: all 0.3s ease-in-out;
    }
`;

const Expanded = styled.div<{ expanded: boolean; backgroundColor: string }>`
    border-radius: 30px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: ${(props) => (props.expanded ? "visible" : "hidden")};
    background-color: ${(props) =>
        props.expanded ? props.backgroundColor : "transparent"};
    transition: all 0.3s ease-in-out;
    ${(props) => (props.expanded ? "transition-delay: 0.2s;" : "transition-delay: 0.5s;")};
`;

const ExpandedText = styled.div<{ expanded: boolean }>`
    visibility: ${(props) => (props.expanded ? "visible" : "hidden")};
    transform: translateY(${(props) => (props.expanded ? "0" : "-30px")});
    transition: all 0.3s ease-in-out;
    ${(props) => (props.expanded ? "transition-delay: 0.5s;" : "transition-delay: 0.2s;")};
`;

interface Props {
    className: string; // class name of the component
    backgroundColor: string; // background color of the component
    backgroundImage: string; // background image of the component
    headingTxt: string; // heading text of the component
    bodyTxt: string; // body text of the component
    headingStyle?: string; // heading style of the component
    bodyStyle?: string; // body style of the component
    descriptionTxt?: string; // description text of the component
    descriptionStyle?: string; // description style of the component
    descriptionLink?: string; // description link of the component
    buttonExpand?: boolean; // button exposant of the component
    expandedText?: string; // expanded text of the component
    expandedChildren?: JSX.Element; // expanded children of the component
}

const TextCard: FC<Props> = ({
    className,
    backgroundColor,
    backgroundImage,
    headingTxt,
    headingStyle,
    bodyTxt,
    bodyStyle,
    descriptionTxt,
    descriptionStyle,
    descriptionLink,
    buttonExpand,
    expandedText,
    expandedChildren,
}) => {
    const [expanded, setExpanded] = React.useState<boolean>(false);
    return (
        <Wrapper
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            className={className}
        >
            <h1 className={headingStyle}>{headingTxt}</h1>
            <p className={bodyStyle}>{bodyTxt}</p>
            {descriptionTxt && (
                <div className={descriptionStyle}>
                    {descriptionTxt}{" "}
                    <a rel="noreferrer" target="_blank" href={descriptionLink}>
                        <span className="material-symbols-outlined text-sm">
                            open_in_new
                        </span>
                    </a>
                </div>
            )}
            {buttonExpand && (
                <Button
                    expanded={expanded}
                    color={backgroundColor}
                    className="absolute bottom-10 right-10 z-10"
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                >
                    <span className="material-symbols-outlined rounded-full font-bold p-2">
                        add
                    </span>
                </Button>
            )}
            {buttonExpand && (
                <Expanded expanded={expanded} backgroundColor={backgroundColor} className="flex justify-center items-center px-10">
                    <ExpandedText expanded={expanded} className={bodyStyle}>
                        {expandedChildren}
                    </ExpandedText>
                </Expanded>
            )}
        </Wrapper>
    );
};

export default TextCard;
