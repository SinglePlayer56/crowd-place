import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IFiltersState} from "@/store/slices/filters";

export interface SelectFiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    // filters: IFilterField[];
    resetButton?: boolean;
    serverState?: IFiltersState;
}
