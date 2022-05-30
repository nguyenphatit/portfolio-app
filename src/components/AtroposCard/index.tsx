import Atropos from "atropos/react";
import "atropos/css";
import { FC } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
    shadowScale?: number;
    activeOffset?: number;
}

const AtroposCard: FC<Props> = ({ children, className, activeOffset = 40, shadowScale = 0.9 }) => {
    return (
        <Atropos
            activeOffset={activeOffset}
            shadowScale={shadowScale}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(x, y) => console.log("Rotate", x, y)}
            className={`${className} rounded-lg`}
        >
            {children}
        </Atropos>
    );
};

export default AtroposCard;
