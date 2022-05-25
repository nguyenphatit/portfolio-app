import Atropos from "atropos/react";
import "atropos/css";

const AtroposCard = () => {
    return (
        <Atropos
            activeOffset={40}
            shadowScale={0.9}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(x, y) => console.log("Rotate", x, y)}
            className="w-[320px] h-[160px]"
        >
            <div className="bg-primary h-full">Hello</div>
        </Atropos>
    );
};

export default AtroposCard;
