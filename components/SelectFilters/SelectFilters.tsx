'use client';
import {SelectFiltersProps} from "./SelectFilters.props";
import styles from './SelectFilters.module.css';
import {CustomButton, Filter} from "@/components";
import cn from 'classnames';
import {useCallback, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {
    acceptSelectFilterType, clearSelectFilterType,
    FilterType,
    IPayloadFilterField,
    resetFilters,
    toggleCheckbox,
} from "@/store/slices/filters";
import {useRouter} from "next/navigation";

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

    const allFilters = useAppSelector((state) => state.filters);

    const investmentTypeFilter = allFilters.investmentType.final.map((item) => item.toLowerCase().replace(' ', '-'));
    const investmentTypePath = [...investmentTypeFilter].reverse().join('+');

    const industryFilter = allFilters.industry.final.map((item) => item.toLowerCase().replace(' ', '-'));
    const industryPath = [...industryFilter].reverse().join('+');

    const countryFilter = allFilters.country.final.map((item) => item.toLowerCase().replace(' ', '-'));
    const countryPath = [...countryFilter].reverse().join('+');

    const yearFoundedFilter = allFilters.yearFounded.final.map((item) => item.toLowerCase().replace(' ', '-'));
    const yearFoundedPath = [...yearFoundedFilter].reverse().join('+');

    const licenseNumberFilter = allFilters.licenseNumber.final.map((item) => item.toLowerCase().replace(' ', '-'));
    const licenseNumberPath = [...licenseNumberFilter].reverse().join('+');

    const filters = useAppSelector((state) => state.filters.country.final)
        .map((item) => item.toLowerCase().replace(' ', '-'));

    const path = [...filters].reverse().join('+');

    const router = useRouter();

    function generateFilterUrl(filter1: string, filter2: string, filter3: string, filter4: string, filter5: string) {
        const filters = [filter1, filter2, filter3, filter4, filter5].filter((filter) => filter.length !== 0);

        return `/platform/${filters.join('/')}/`

    }

    const routeHandler = () => {

        const url = generateFilterUrl(investmentTypePath, industryPath, countryPath, yearFoundedPath, licenseNumberPath);
        console.log(url);
        router.push(url);
    }

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
                <CustomButton onClick={routeHandler} className={styles.filters__button} color={'blue'} text={'View'}/>
            </div>
            {resetButton &&
                <CustomButton onClick={resetHandler} className={styles.filters__resetButton} color={'white'}
                              text={'Reset filters'}/>}
            <div>
                {JSON.stringify(path)}
            </div>
        </div>
    );
};

export default SelectFilters;
