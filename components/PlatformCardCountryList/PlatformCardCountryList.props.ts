import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface PlatformCardCountryListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    countries: string[];
}
