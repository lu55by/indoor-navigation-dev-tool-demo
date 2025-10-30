import * as React from "react";

interface ButtonProps {
    onClick?: () => void,
    cusClassName?: string;
    children?: React.ReactNode,
}

export default function Button({onClick, cusClassName, children}: ButtonProps) {
    return (
        <button
            className={`rounded-md px-3 py-2 text-stone-200 ${cusClassName} ${!cusClassName && "bg-stone-800"}`}
            onClick={onClick}>{children}</button>
    );
};