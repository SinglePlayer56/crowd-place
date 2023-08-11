'use client';
import {SelectFiltersProps} from "./SelectFilters.props";
import styles from './SelectFilters.module.css';
import {CustomButton, Filter} from "@/components";
import cn from 'classnames';
import {useState} from "react";

const SelectFilters = ({filters, className, resetButton}: SelectFiltersProps) => {
    const [expanded, setExpanded] = useState<false | number>(false);

    return (
        <div className={styles.filters}>
            <div className={cn(styles.filtersWrapper, className)}>
                {filters.map((filter, index) => (
                    <Filter
                        key={filter.placeholder}
                        expanded={expanded}
                        setExpanded={setExpanded}
                        index={index}
                        options={filter.options}
                        placeholder={filter.placeholder}
                    />
                ))}
                <CustomButton className={styles.filters__button} color={'blue'} text={'View'}/>
            </div>
            {resetButton &&
                <CustomButton className={styles.filters__resetButton} color={'white'} text={'Reset filters'}/>}
        </div>
    );
};

export default SelectFilters;
