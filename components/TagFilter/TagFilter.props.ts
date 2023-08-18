export interface TagFilterProps {
    removeFilter: ({type, value}: {type: string, value: string}) => void;
    type: string;
    value: string;
}
