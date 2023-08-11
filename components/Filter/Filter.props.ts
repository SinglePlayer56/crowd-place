export interface FilterProps {
    options: string[];
    placeholder: string;
    expanded: false | number;
    setExpanded: (expanded: false | number) => void;
    index: number;
}
