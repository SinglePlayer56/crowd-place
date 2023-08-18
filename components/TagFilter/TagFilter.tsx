import {TagFilterProps} from "./TagFilter.props";
import styles from './TagFilter.module.css'
import {memo} from "react";


const TagFilter = memo(({removeFilter, type, value}: TagFilterProps) => {

    return (
        <span className={styles.filters__tag}>
                {value}
            <span onClick={() => removeFilter({type, value})}
                  className={styles.filters__tag_delete}
            >+</span>
        </span>
    );
});

export default TagFilter;
