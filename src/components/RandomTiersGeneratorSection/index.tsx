import InputArea from "components/InputArea";
import InputNumber from "components/InputNumber";
import { FC, useState } from "react";
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

const RandomTiersGeneratorSection: FC = () => {
    const [text, setText] = useState<string>("");
    const [tiers, setTiers] = useState<number>(2);
    const [result, setResult] = useState<Array<string[]>>([]);

    const onGenerate = () => {
        const array: string[] = text?.split(",").map((i) => i.trim()) || [];
        const arrayShuffle: string[] = shuffle(array);
        const temp = [...arrayShuffle];

        let i = 0;
        let rs = [];
        for (i = 0; i < tiers; i++) {
            const indexCut = Math.round(arrayShuffle.length / tiers);
            rs[i] = temp.splice(0, indexCut);
        }

        setResult(rs);
    };

    const shuffle = (array: string[]) => {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    return (
        <section className="min-h-[100vh] bg-[#F5F5F7]">
            <div className="container mx-auto py-20">
                <Heading className="text-6xl font-bold text-success py-10 mx-1 md:mx-auto text-center">
                    Random Tier ({tiers}) Generator
                </Heading>
                <div className="mb-6">
                    <div className="mx-2">
                        <label className="font-bold w-full" htmlFor="tiers">
                            Tiers
                        </label>
                        <input
                            className="bg-transparent border-2 border-gray-600 rounded-lg py-2 px-4 text-gray-700 w-full"
                            id="tiers"
                            type={"number"}
                            defaultValue={tiers}
                            min={1}
                            name="tiers"
                            onChange={(e) => {
                                setTiers(Number(e.target.value || 0));
                            }}
                        />
                    </div>
                    <div className="mx-2 my-2 flex flex-col items-center justify-center">
                        <label className="font-bold w-full" htmlFor="text">
                            Input Text
                        </label>
                        <textarea
                            autoComplete="off"
                            name="text"
                            defaultValue={text}
                            className="bg-transparent border-2 border-gray-600 rounded-lg py-2 px-4 text-gray-700 w-full"
                            id="text"
                            onChange={(e) => {
                                setText(e.target.value);
                            }}
                        ></textarea>
                    </div>
                    <button
                        onClick={onGenerate}
                        className="bg-primary border-2 border-dark hover:border-dark rounded-lg py-2 px-4 text-light"
                    >
                        Generate
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {result &&
                        result.length > 0 &&
                        result.map((item, index) => (
                            <div
                                key={index}
                                className="border-2 rounded-xl p-6 bg-primary"
                            >
                                <h1 className="text-2xl font-bold uppercase text-center select-none">
                                    Tier {index + 1}
                                </h1>
                                {item &&
                                    item.map((el, elIndex) => (
                                        <div
                                            className="py-4 uppercase text-xl text-center select-none"
                                            key={`${el}${elIndex}`}
                                        >
                                            {el}
                                        </div>
                                    ))}
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default RandomTiersGeneratorSection;
