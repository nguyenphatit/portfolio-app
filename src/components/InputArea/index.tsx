import { FC } from "react";
import styled from "styled-components";

interface Props {
    label: string;
    labelStyle?: string;
    defaultValue?: number;
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
        <div className="mx-2 my-2 flex items-center">
            <label className={`font-bold mr-2 ${labelStyle}`} htmlFor={label}>
                {label}
            </label>
            <textarea
                name={name}
                defaultValue={defaultValue}
                className="bg-transparent border-2 border-gray-600 rounded-lg py-2 px-4 text-gray-700"
                id={label}
                onChange={e => onChange(e.target.value, label)}
            ></textarea>
        </div>
    );
};

export default InputArea;
