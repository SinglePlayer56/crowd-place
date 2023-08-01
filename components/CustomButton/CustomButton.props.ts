import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface CustomButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string;
    color: 'white' | 'blue' | 'transparent';
}
