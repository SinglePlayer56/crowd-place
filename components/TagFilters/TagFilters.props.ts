export interface TagFiltersProps {
    removeFilter: ({type, value}: {type: string, value: string}) => void;
    title: string;
    options: string[];
}
