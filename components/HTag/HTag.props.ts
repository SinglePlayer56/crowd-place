import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>{
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontSize?: '20px';
    children: ReactNode;
}
