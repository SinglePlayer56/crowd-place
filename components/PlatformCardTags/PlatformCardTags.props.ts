import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface PlatformCardTagsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    tags: string[];
    title?: string;
}
