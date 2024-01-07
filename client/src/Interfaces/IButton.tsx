import { MouseEventHandler } from "react";

export interface ButtonComponentProps {
    type?: string,
    size?: string,
    text?: string,
    handleClick: MouseEventHandler<HTMLButtonElement>,
}