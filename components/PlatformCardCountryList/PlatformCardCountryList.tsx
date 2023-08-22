'use client';

import styles from "./PlatformCardCountryList.module.css";
import {PlatformCardCountryListProps} from "./PlatformCardCountryList.props";
import cn from 'classnames';
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

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
            {countries.length > 1 &&
                <span className={styles.seeMore} onClick={() => setIsVisible(true)}>+seeMore</span>}
            <AnimatePresence>
                <motion.div
                    initial={false}
                    animate={{opacity: isVisible ? 1 : 0, display:'flex'}}
                    exit={{opacity: 0, display: 'none'}}
                    transition={{duration: 0.3}}
                    className={cn(styles.countryList__modal)}
                >
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
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PlatformCardCountryList;
