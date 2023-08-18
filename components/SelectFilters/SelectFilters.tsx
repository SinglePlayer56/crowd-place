'use client';
import {SelectFiltersProps} from "./SelectFilters.props";
import styles from './SelectFilters.module.css';
import {CustomButton, Filter, Tag, TagFilters} from "@/components";
import cn from 'classnames';
import {useCallback, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {
    acceptSelectFilterType, addServerState, clearSelectFilterType,
    FilterType,
    IPayloadFilterField, removeFilter,
    resetFilters,
    toggleCheckbox,
} from "@/store/slices/filters";
import Link from "next/link";

const SelectFilters = ({className, resetButton, serverState}: SelectFiltersProps) => {
    const [expanded, setExpanded] = useState<false | number>(false);

    const clientFilters = useAppSelector((state) => state.filters.filtersFields);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (serverState) {
            dispatch(addServerState(serverState))
        }
    }, []);

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
    }, [dispatch]);

    const removeTagHandler = useCallback(({type, value}: {type: string, value: string}) => {
        dispatch(removeFilter({type, value}))
    }, [dispatch]);

    const allFilters = useAppSelector((state) => state.filters);

    const investmentTypeFinal = allFilters.investmentType.final;
    const investmentTypeFilter = investmentTypeFinal.map((item) => item.toLowerCase().replaceAll(' ', '-'));
    const investmentTypePath = investmentTypeFilter.sort().join('+');

    const industryFinal = allFilters.industry.final;
    const industryFilter = industryFinal.map((item) => item.toLowerCase().replaceAll(' ', '-'));
    const industryPath = industryFilter.sort().join('+');

    const countryFinal = allFilters.country.final;
    const countryFilter = countryFinal.map((item) => item.toLowerCase().replaceAll(' ', '-'));
    const countryPath = countryFilter.sort().join('+');

    const yearFoundedFinal = allFilters.yearFounded.final;
    const yearFoundedFilter = yearFoundedFinal.map((item) => item.toLowerCase().replaceAll(' ', '-'));
    const yearFoundedPath = yearFoundedFilter.sort().join('+');

    const licenseNumberFinal = allFilters.licenseNumber.final;
    const licenseNumberFilter = licenseNumberFinal.map((item) => item.toLowerCase().replaceAll(' ', '-'));
    const licenseNumberPath = licenseNumberFilter.sort().join('+');


    console.log(countryFinal)
    function generateFilterUrl(filter1: string, filter2: string, filter3: string, filter4: string, filter5: string) {
        const filters = [filter1, filter2, filter3, filter4, filter5].filter((filter) => filter.length !== 0);

        if (!filters.join('/').length) {
            return `/platforms/`
        }

        return `/platform/${filters.join('/')}/`

    }

        const url = generateFilterUrl(investmentTypePath, industryPath, countryPath, yearFoundedPath, licenseNumberPath);

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
                <Link href={url.length !== 0 ? url : '/platforms/'} scroll={false}>
                    <CustomButton className={styles.filters__button} color={'blue'} text={'View'}/>
                </Link>
            </div>
            <div className={styles.filters__tag_wrapper}>
                {investmentTypeFinal.length > 0 && <TagFilters removeFilter={removeTagHandler} title={'Investment type'} options={investmentTypeFinal}/>}
                {industryFinal.length > 0 && <TagFilters removeFilter={removeTagHandler} title={'Industry'} options={industryFinal}/>}
                {countryFinal.length > 0 && <TagFilters removeFilter={removeTagHandler} title={'Country'} options={countryFinal}/>}
                {yearFoundedFinal.length > 0 && <TagFilters removeFilter={removeTagHandler} title={'Years on market'} options={yearFoundedFinal}/>}
                {licenseNumberFinal.length > 0 && <TagFilters removeFilter={removeTagHandler} title={'ECSP license'} options={licenseNumberFinal}/>}
            </div>
            {resetButton &&
                <CustomButton
                    onClick={resetHandler}
                    className={styles.filters__resetButton}
                    color={'white'}
                    text={'Reset filters'}
                />}
        </div>
    );
};

export default SelectFilters;
