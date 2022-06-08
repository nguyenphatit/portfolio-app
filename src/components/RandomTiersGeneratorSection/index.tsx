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
    const [tiers, setTiers] = useState<number>(0);
    const [text, setText] = useState<string>();

    const onChangeTier = (value: number) => {
        setTiers(value);
    };

    const onChangeText = (value: string) => {
        setText(value);
    };

    const onGenerate = () => {
        const array: string[] = text?.split(",").map(i => i.trim()) || [];
        const arrayShuffle: string[] = shuffle(array);
        const temp = [...arrayShuffle];


        let i = 0;
        let rs = [];
        for (i = 0; i < tiers; i++) {
            if (arrayShuffle.length > tiers) {
                const indexCut = arrayShuffle.length / tiers;
                rs[i] = temp.splice(0, indexCut);
            }
        }

        console.log('rs', rs);
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
    }

    return (
        <section className="min-h-[100vh] bg-[#F5F5F7]">
            <div className="container mx-auto py-20">
                <Heading className="text-6xl font-bold text-success py-10 mx-1 md:mx-auto text-center">
                    Random Team (5) Generator
                </Heading>
                <div className="flex flex-col justify-center ">
                    <InputNumber
                        label="Number of Tiers"
                        name="tiers"
                        min={1}
                        max={10}
                        defaultValue={tiers}
                        onChange={onChangeTier}
                    />
                    <InputArea
                        label="Input text"
                        name="text"
                        onChange={onChangeText}
                    />
                    <button
                        onClick={onGenerate}
                        className="bg-primary border-2 border-primary hover:border-dark rounded-lg py-2 px-4 text-light"
                    >
                        Generate
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RandomTiersGeneratorSection;
