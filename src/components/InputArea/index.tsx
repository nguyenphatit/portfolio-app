import { FC } from "react";
import styled from "styled-components";

interface Props {
    label: string;
    labelStyle?: string;
    defaultValue?: string;
    name: string;
    onChange: (value: string, name: string) => void;
}

const InputArea: FC<Props> = ({
    label,
    labelStyle,
    defaultValue,
    name,
    onChange,
}) => {
    return (
        <div className="mx-2 my-2 flex flex-col items-center justify-center">
            <label className={`font-bold w-full ${labelStyle}`} htmlFor={label}>
                {label}
            </label>
            <textarea
                autoComplete="off"
                name={name}
                defaultValue={defaultValue}
                className="bg-transparent border-2 border-gray-600 rounded-lg py-2 px-4 text-gray-700 w-full"
                id={label}
                onChange={(e) => onChange(e.target.value, label)}
            ></textarea>
        </div>
    );
};

export default InputArea;
