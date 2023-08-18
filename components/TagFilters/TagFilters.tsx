import {TagFiltersProps} from "./TagFilters.props";
import styles from './TagFilters.module.css'
import {memo} from "react";
import {TagFilter} from "@/components";


const TagFilters = memo(({removeFilter, title, options}: TagFiltersProps) => {

    return (
        <div className={styles.filters__tags}>
            <span className={styles.filters__tag_title}>
                {title}:
            </span>
            {options.map((option) => (
                <TagFilter key={option} removeFilter={removeFilter} type={title} value={option} />
            ))}
        </div>
    );
});

export default TagFilters;
