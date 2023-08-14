'use client';
import {SelectFiltersProps} from "./SelectFilters.props";
import styles from './SelectFilters.module.css';
import {CustomButton, Filter} from "@/components";
import cn from 'classnames';
import {useCallback, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {
    acceptSelectFilterType, clearSelectFilterType,
    FilterType,
    IPayloadFilterField,
    resetFilters,
    toggleCheckbox,
} from "@/store/slices/filters";

const SelectFilters = ({className, resetButton}: SelectFiltersProps) => {
    const [expanded, setExpanded] = useState<false | number>(false);

    const clientFilters = useAppSelector((state) => state.filters.filtersFields);
    const dispatch = useAppDispatch();

    const toggleCheckboxValue = useCallback((value: IPayloadFilterField) => {
        dispatch(toggleCheckbox(value));
    }, [dispatch]);

    const resetHandler = () => {
        dispatch(resetFilters());
    }

    const acceptFilterHandler = useCallback((type: FilterType) => {
        dispatch(acceptSelectFilterType(type))
    }, [dispatch]);

    const clearFilterHandler = useCallback((type: FilterType) => {
        dispatch(clearSelectFilterType(type))
    }, [dispatch])

    return (
        <div className={styles.filters}>
            <div className={cn(styles.filtersWrapper, className)}>
                {clientFilters.map((filter, index) => (
                    <Filter
                        key={filter.placeholder}
                        type={filter.type}
                        expanded={expanded}
                        setExpanded={setExpanded}
                        index={index}
                        options={filter.options}
                        placeholder={filter.placeholder}
                        toggleCheckboxValue={toggleCheckboxValue}
                        acceptFilters={acceptFilterHandler}
                        clearFilters={clearFilterHandler}
                    />
                ))}
                <CustomButton className={styles.filters__button} color={'blue'} text={'View'}/>
            </div>
            {resetButton &&
                <CustomButton onClick={resetHandler} className={styles.filters__resetButton} color={'white'}
                              text={'Reset filters'}/>}
        </div>
    );
};

export default SelectFilters;
