import {FilterType, ICheckboxValues, IPayloadFilterField} from "@/store/slices/filters";

export interface FilterProps {
    options: ICheckboxValues[];
    placeholder: string;
    type: FilterType;
    expanded: false | number;
    setExpanded: (expanded: false | number) => void;
    index: number;
    toggleCheckboxValue: (value: IPayloadFilterField) => void;
    acceptFilters: (type: FilterType) => void;
    clearFilters: (type: FilterType) => void;
}
