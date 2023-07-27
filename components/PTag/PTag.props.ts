import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    fontSize: '16px' | '18px' | '20px';
    children: ReactNode;
}
