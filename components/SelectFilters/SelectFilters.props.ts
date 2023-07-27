import {FilterProps} from "@/components/Filter/Filter.props";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SelectFiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    filters: FilterProps[]
}
