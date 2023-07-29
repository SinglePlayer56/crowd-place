import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface SearchButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color: 'white' | 'blue';
}
