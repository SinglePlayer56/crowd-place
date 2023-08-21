import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface BreadCrumbsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    paramsPath: {
        name: string;
        href: string;
    }[];
}
