'use client';

import styles from "./PlatformCardCountryList.module.css";
import {PlatformCardCountryListProps} from "./PlatformCardCountryList.props";
import cn from 'classnames';
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link";

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
            <Link
                href={`/platforms/${countries[0].toLowerCase().split(' ').join('-')}/`}
                className={styles.card__country}
            >
                {countries[0]}
            </Link>
            {countries.length > 1 &&
                <span className={styles.seeMore} onClick={() => setIsVisible(true)}>+seeMore</span>}
            <AnimatePresence>
                <motion.div
                    initial={false}
                    animate={{opacity: isVisible ? 1 : 0, display: 'flex'}}
                    transition={{duration: 0.3}}
                    className={cn(styles.countryList__modal, {
                        [styles.hidden]: !isVisible
                    })}
                >
                    {countries.map((country, index) => {
                        if (index > 0) {
                            const lastIndex = countries.length - 1;
                            return (
                                <Link
                                    className={cn(styles.card__country, styles.modal)}
                                    key={country}
                                    href={`/platforms/${country.toLowerCase().split(' ').join('-')}/`}
                                >
                                    {lastIndex !== index ? `${country} |\u00A0` : country}
                                </Link>
                            )
                        }
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PlatformCardCountryList;
