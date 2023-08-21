import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface HiddenDescriptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    description: string;
}
