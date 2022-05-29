import Atropos from "atropos/react";
import "atropos/css";
import { FC } from "react";

interface Props {
    children: React.ReactNode;
}

const AtroposCard: FC<Props> = ({ children }) => {
    return (
        <Atropos
            activeOffset={40}
            shadowScale={0.9}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(x, y) => console.log("Rotate", x, y)}
            className="rounded-lg"
        >
            {children}
        </Atropos>
    );
};

export default AtroposCard;
