import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SelectFiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    // filters: IFilterField[];
    resetButton?: boolean;
}
