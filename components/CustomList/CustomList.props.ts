import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CustomListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string;
    as: 'ul' | 'ol';
    children: ReactNode;
}
