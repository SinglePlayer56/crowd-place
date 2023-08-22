'use client';

import styles from "./PlatformCardCountryList.module.css";
import {PlatformCardCountryListProps} from "./PlatformCardCountryList.props";
import cn from 'classnames';
import {useEffect, useState} from "react";

const PlatformCardCountryList = ({countries, className}: PlatformCardCountryListProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isVisible]);

    return (
        <div className={cn(styles.countryList, className)}>
            <span className={styles.card__country}>{countries[0]}</span>
            {countries.length > 1 && <span className={styles.seeMore} onClick={() => setIsVisible(true)}>+seeMore</span>}
            <div className={cn(styles.countryList__modal, {
                [styles.hidden]: !isVisible,
                [styles.active]: isVisible
            })}>
                {countries.map((country, index) => {
                    if (index > 0) {
                        const lastIndex = countries.length - 1;
                        return (
                            <span className={cn(styles.card__country, styles.modal)} key={country}>
                                    {lastIndex !== index ? `${country} | ` : country}
                                </span>
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default PlatformCardCountryList;
