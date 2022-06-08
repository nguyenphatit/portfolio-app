import { FC } from "react";
import styled from "styled-components";

interface Props {
    label: string;
    labelStyle?: string;
    defaultValue?: number;
    name: string;
    min?: number;
    max?: number;
    onChange: (value: number, name: string) => void;
}

const InputNumber: FC<Props> = ({
    label,
    labelStyle,
    defaultValue,
    max,
    min,
    name,
    onChange
}) => {
    return (
        <div className="mx-2">
            <label className={`font-bold mr-2 ${labelStyle}`} htmlFor={label}>
                {label}
            </label>
            <input
                className="bg-transparent border-2 border-gray-600 rounded-lg py-2 px-4 text-gray-700"
                id={label}
                type={"number"}
                defaultValue={defaultValue}
                max={max}
                min={min}
                name={name}
                onChange={e => onChange(Number(e.target.value || defaultValue), label)}
            />
        </div>
    );
};

export default InputNumber;
