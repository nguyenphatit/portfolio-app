import InputNumber from "components/InputNumber";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const Heading = styled.h1`
    background: -webkit-linear-gradient(
        320deg,
        #06b7db -63.59%,
        #ff4ecd -20.3%,
        #0072f5 70.46%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const RandomNumberGeneratorSection: FC = () => {
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(100);
    const [result, setResult] = useState<number | undefined>(undefined);
    const [time, setTime] = useState<Date | undefined>(undefined);

    const onGenerate = () => {
        setResult(Math.floor(Math.random() * (max - min + 1)) + min);
        setTime(new Date());
    };

    useEffect(() => {
        const keyEvent = (event: KeyboardEvent) => {
            if (
                event.isComposing ||
                event.keyCode === 13 ||
                event.keyCode === 32
            ) {
                onGenerate();
                event.preventDefault();
            }
        };
        document.addEventListener("keydown", keyEvent);

        return () => {
            document.removeEventListener("keydown", keyEvent);
        };
    });

    return (
        <section className="min-h-[83vh] bg-[#F5F5F7]">
            <div className="container mx-auto py-20">
                <Heading className="text-6xl font-bold text-success py-10 mx-1 md:mx-auto text-center">
                    Random Number Generator
                </Heading>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="mx-2">
                        <label className="font-bold mr-4" htmlFor="min">
                            Min
                        </label>
                        <input
                            className="bg-transparent border-2 border-gray-600 rounded-lg py-2 px-4 text-gray-700"
                            id="min"
                            type={"number"}
                            defaultValue={0}
                            name="min"
                            onChange={(e) => {
                                setMin(Number(e.target.value || 0));
                            }}
                        />
                    </div>

                    <div className="mx-2">
                        <label className="font-bold mr-4" htmlFor="max">
                            Max
                        </label>
                        <input
                            className="bg-transparent border-2 border-gray-600 rounded-lg py-2 px-4 text-gray-700"
                            id="max"
                            type={"number"}
                            defaultValue={100}
                            name="max"
                            onChange={(e) => {
                                setMax(Number(e.target.value || 0));
                            }}
                        />
                    </div>
                    <button
                        onClick={onGenerate}
                        className="bg-primary border-2 border-primary hover:border-dark rounded-lg py-2 px-4 text-light"
                    >
                        Generate
                    </button>
                </div>
                {(result || result === 0) && (
                    <div className="flex justify-center items-center">
                        <Heading className="text-9xl font-bold text-success py-10 mx-1 md:mx-auto text-center">
                            {result}
                            <div className="text-3xl">
                                -{" "}
                                {time &&
                                    time.getHours() +
                                        ":" +
                                        time.getMinutes() +
                                        ":" +
                                        time.getSeconds()}{" "}
                                -
                            </div>
                        </Heading>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RandomNumberGeneratorSection;
