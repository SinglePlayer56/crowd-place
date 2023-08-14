import {FilterType, IPayloadFilterField} from "@/store/slices/filters";

export interface CheckboxProps {
    value: string;
    title: string;
    toggleCheckboxValue: (value: IPayloadFilterField) => void;
    type: FilterType;
    checked: boolean;
}
