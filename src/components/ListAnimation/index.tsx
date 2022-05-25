import styled from "styled-components";

const height = "40px";

const Text = styled.span`
    -webkit-animation: rotateWord 18s linear infinite 0s;
    -ms-animation: rotateWord 18s linear infinite 0s;
    animation: rotateWord 18s linear infinite 0s;

    &:nth-child(2) {
        -webkit-animation-delay: 3s;
        -ms-animation-delay: 3s;
        animation-delay: 3s;
    }

    &:nth-child(3) {
        -webkit-animation-delay: 6s;
        -ms-animation-delay: 6s;
        animation-delay: 6s;
    }

    &:nth-child(4) {
        -webkit-animation-delay: 9s;
        -ms-animation-delay: 9s;
        animation-delay: 9s;
    }

    &:nth-child(5) {
        -webkit-animation-delay: 12s;
        -ms-animation-delay: 12s;
        animation-delay: 12s;
    }

    &:nth-child(6) {
        -webkit-animation-delay: 15s;
        -ms-animation-delay: 15s;
        animation-delay: 15s;
    }

    @-webkit-keyframes rotateWord {
        0% {
            opacity: 0;
        }
        2% {
            opacity: 0;
            -webkit-transform: translateY(-${height});
        }
        5% {
            opacity: 1;
            -webkit-transform: translateY(0px);
        }
        17% {
            opacity: 1;
            -webkit-transform: translateY(0px);
        }
        20% {
            opacity: 0;
            -webkit-transform: translateY(${height});
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    @-ms-keyframes rotateWord {
        0% {
            opacity: 0;
        }
        2% {
            opacity: 0;
            -ms-transform: translateY(-${height});
        }
        5% {
            opacity: 1;
            -ms-transform: translateY(0px);
        }
        17% {
            opacity: 1;
            -ms-transform: translateY(0px);
        }
        20% {
            opacity: 0;
            -ms-transform: translateY(${height});
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes rotateWord {
        0% {
            opacity: 0;
        }
        2% {
            opacity: 0;
            -webkit-transform: translateY(-${height});
            transform: translateY(-${height});
        }
        5% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
        }
        17% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
        }
        20% {
            opacity: 0;
            -webkit-transform: translateY(${height});
            transform: translateY(${height});
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
`;

const ListAnimation = () => {
    return (
        <div className="relative">
            <div className="inline">
                <Text className="absolute opacity-0 overflow-hidden uppercase font-bold text-6xl text-dark">
                    hello!
                </Text>
                <Text className="absolute opacity-0 overflow-hidden uppercase font-bold text-6xl text-primary">
                    안녕!
                </Text>
                <Text className="absolute opacity-0 overflow-hidden uppercase font-bold text-6xl text-secondary">
                    xin chào!
                </Text>
                <Text className="absolute opacity-0 overflow-hidden uppercase font-bold text-6xl text-success">
                    你好!
                </Text>
                <Text className="absolute opacity-0 overflow-hidden uppercase font-bold text-6xl text-warning">
                    bonjour!
                </Text>
                <Text className="absolute opacity-0 overflow-hidden uppercase font-bold text-6xl text-error">
                    今日は!
                </Text>
            </div>
        </div>
    );
};

export default ListAnimation;
