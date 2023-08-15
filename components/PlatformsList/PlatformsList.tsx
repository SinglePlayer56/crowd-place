'use client';

import styles from "@/app/platform/[investmentType]/platforms.module.css";
import {HTag, PlatformCard} from "@/components";
import Pagination from "@/components/Pagination/Pagination";
import {store} from "@/store";
import {useEffect, useState} from "react";
import {IPlatform} from "@/types";
import {useSearchParams} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {setPlatforms} from "@/store/slices/platforms";

async function getType(investValue: string[], perPage: number, page: number) {
    const sortedValue = [...investValue].reverse();
    const obj: Record<string, string> = sortedValue.reduce((acc: Record<string, string>, item) => {
        acc[item.toLowerCase().replace(' ', '+')] = item;
        return acc;
    },{});

    const queryParams = Object.entries(obj)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');


    // const ste = 'mini-bonds-buy-to-let-donation-reward-p2p+lending-debt-equity';
    const res = await fetch(`/api/get-type/investment/?${queryParams}&perPage=${perPage}&page=${page}`);


    return await res.json();
}

const PlatformsList = ({}) => {
    const searchParams = useSearchParams();
    const filterValue = useAppSelector((state) => state.filters.investmentType.final);

    const dispatch = useAppDispatch();

    const {count: totalCount, rows: platforms} = useAppSelector((state) => state.platforms);

    const perPage = 12;
    let currentPage = 1;

    if (Number(searchParams.get('page')) >= 1) {
        currentPage = Number(searchParams.get('page'));
    }

    useEffect(() => {
        getType(filterValue, perPage, currentPage)
            .then((res) => dispatch(setPlatforms(res)))
    }, [dispatch, filterValue, currentPage]);


    console.log(currentPage);
    console.log(totalCount);
    console.log(platforms);

    return (
        <section className={styles.reviews}>
            <div className={'container'}>
                <HTag className={styles.reviews__title} tag={'h2'}>
                    Reviews
                </HTag>
                <div className={styles.reviews__list}>
                    {platforms.map((platform: IPlatform) => (
                        <PlatformCard
                            key={platform.name}
                            pathLogo={platform.logo}
                            title={platform.name}
                            countries={platform.country}
                            description={platform.description}
                            type={platform.investmentType}
                            industry={platform.industry}
                            href={`/platforms/${platform.name.split(' ').join('').toLowerCase()}`}/>
                    ))}
                </div>
                <Pagination
                    itemCount={totalCount}
                    page={currentPage}
                    perPage={perPage}
                />
            </div>
        </section>
    );
};

export default PlatformsList;
