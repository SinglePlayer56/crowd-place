'use client';
import {SelectFiltersProps} from "./SelectFilters.props";
import styles from './SelectFilters.module.css';
import {CustomButton, Filter, TagFilters} from "@/components";
import cn from 'classnames';
import {memo, useCallback, useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {
    acceptSelectFilterType, addTag, clearSelectFilterType,
    FilterType,
    IPayloadFilterField, removeFilter,
    resetFilters,
    toggleCheckbox,
} from "@/store/slices/filters";
import Link from "next/link";
import {useParams} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion";


function processFilterArray(filterArray: string[]) {
    return filterArray
        .map(item => item.toLowerCase().replaceAll(' ', '-'))
        .sort()
        .join('+');
}

function generateFilterUrl(...filters: string[]) {
    const validFilters = filters.filter(filter => filter.length !== 0);

    if (validFilters.length === 0) {
        return '/platforms/';
    }

    return `/platforms/${validFilters.join('/')}/`;
}

const SelectFilters = memo(({className}: SelectFiltersProps) => {
    const params = useParams();
    const dispatch = useAppDispatch();

    const [expanded, setExpanded] = useState<false | number>(false);
    const clientFilters = useAppSelector((state) => state.filters.filtersFields);

    useEffect(() => {
        resetHandler();
        for (const key in params) {
            dispatch(addTag(decodeURIComponent(params[key] as string).split('+')));
        }
    }, [dispatch]);

    const toggleCheckboxValue = useCallback((value: IPayloadFilterField) => {
        dispatch(toggleCheckbox(value));
    }, [dispatch]);

    const resetHandler = useCallback(() => {
        dispatch(resetFilters())
    }, [dispatch]);

    const acceptFilterHandler = useCallback((type: FilterType) => {
        dispatch(acceptSelectFilterType(type))
    }, [dispatch]);

    const clearFilterHandler = useCallback((type: FilterType) => {
        dispatch(clearSelectFilterType(type))
    }, [dispatch]);

    const removeTagHandler = useCallback(({type, value}: { type: string, value: string }) => {
        dispatch(removeFilter({type, value}))
    }, [dispatch]);

    const allFilters = useAppSelector((state) => state.filters);

    const investmentTypePath = useMemo(() => processFilterArray(allFilters.investmentType.final), [allFilters.investmentType.final]);
    const industryPath = useMemo(() => processFilterArray(allFilters.industry.final), [allFilters.industry.final]);
    const countryPath = useMemo(() => processFilterArray(allFilters.country.final), [allFilters.country.final]);
    const yearFoundedPath = useMemo(() => processFilterArray(allFilters.yearFounded.final), [allFilters.yearFounded.final]);
    const licenseNumberPath = useMemo(() => processFilterArray(allFilters.licenseNumber.final), [allFilters.licenseNumber.final]);

    const tagFiltersList = useMemo(() => [
        { title: 'Investment type', options: allFilters.investmentType.final },
        { title: 'Industry', options: allFilters.industry.final },
        { title: 'Country', options: allFilters.country.final },
        { title: 'Years on market', options: allFilters.yearFounded.final },
        { title: 'ECSP license', options: allFilters.licenseNumber.final }
    ], [
        allFilters.investmentType.final,
        allFilters.industry.final,
        allFilters.country.final,
        allFilters.yearFounded.final,
        allFilters.licenseNumber.final
    ]);

    const url = useMemo(() => generateFilterUrl(investmentTypePath, industryPath, countryPath, yearFoundedPath, licenseNumberPath), [
        investmentTypePath,
        industryPath,
        countryPath,
        yearFoundedPath,
        licenseNumberPath
    ]);

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
                <Link href={url} scroll={false}>
                    <CustomButton className={styles.filters__button} color={'blue'} text={'View'}/>
                </Link>
            </div>
            <div className={styles.filters__tag_wrapper}>
                {tagFiltersList.map(({title, options}) => (
                    options.length > 0
                    && <TagFilters
                        key={title}
                        removeFilter={removeTagHandler}
                        title={title}
                        options={options}
                    />
                ))}
            </div>
            <AnimatePresence>
                {url.length > 11 &&
                    <motion.div
                        key={'reset-filters-button'}
                        style={{overflow: 'hidden'}}
                        initial={{opacity: 0, scale: 0, height: 0}}
                        animate={url.length > 11 ? {opacity: 1, scale: 1, height: 90} : {opacity: 0, scale: 0, height: 0}}
                        transition={{duration: 0.3}}
                        exit={{opacity: 0, scale: 0, height: 0}}
                    >
                        <CustomButton
                            onClick={resetHandler}
                            className={styles.filters__resetButton}
                            color={'white'}
                            text={'Reset filters'}
                        />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
});

export default SelectFilters;
