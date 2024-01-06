import { Dispatch, SetStateAction } from "react";

interface InputComponentState {
    value: string
}

export interface InputComponentProps {
    type: string,
    label: string,  
    setValue: Dispatch<SetStateAction<string>>,
    value: string
}