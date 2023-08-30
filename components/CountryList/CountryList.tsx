'use client';

import styles from './CountryList.module.css';
import {CustomButton, HTag} from "@/components";
import {CountryListValue} from "@/consts";
import Image from 'next/image';
import Link from "next/link";
import {useLayoutEffect, useRef, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {generateLink} from "@/helpers";

const CountryList = () => {
    const [isVisibleAll, setIsVisibleAll] = useState<boolean>(false);
    const [heightList, setHeightList] = useState<number>();
    const elementRef = useRef<HTMLDivElement>(null);

    const perPage = 10;

    useLayoutEffect(() => {
        if (elementRef.current) {
            const currentHeight = elementRef.current.clientHeight;
            setHeightList(currentHeight);
        }
    }, [])


    return (
        <section className={styles.countryList}>
            <div className={'container'}>
                <HTag className={styles.countryList__title} tag={'h2'}>
                    Crowdfunding platforms by country
                </HTag>
                <AnimatePresence>
                    <motion.div
                        ref={elementRef}
                        className={styles.countryList__list}
                        initial={false}
                        animate={{height: isVisibleAll ? 'auto' : heightList}}
                        // exit={{height: heightList}}
                        // transition={{duration: 0.3, delay: 3}}
                    >
                        {CountryListValue.map((countryValue, index) => {
                            if (index < perPage) {
                                return (
                                    <motion.div
                                        initial={{transform: 'scale(1)'}}
                                        transition={{duration: 0.3}}
                                        whileTap={{transform: 'scale(0.95)'}}
                                        key={countryValue.country}
                                        className={styles.countryList__item}
                                    >
                                        <Image
                                            src={countryValue.pathFlag}
                                            alt={'lag icon'}
                                            width={26}
                                            height={21}
                                            className={styles.countryList__flag}
                                        />
                                        <Link
                                            href={generateLink('/platforms/', countryValue.country)}
                                            className={styles.countryList__name}
                                        >
                                            {countryValue.country}
                                        </Link>
                                    </motion.div>
                                )
                            } else {
                                return (
                                    <motion.div
                                        initial={{opacity: 0, display: 'none', transform: 'scale(1)'}}
                                        animate={{opacity: isVisibleAll ? 1 : 0, display: isVisibleAll ? 'flex' : '', transform: 'scale(1)'}}
                                        exit={{opacity: 0}}
                                        transition={{opacity: { duration: 0.3, delay: isVisibleAll ? 0.2 : 0 }, transform: {duration: 0.3}}}
                                        key={countryValue.country}
                                        whileTap={{transform: 'scale(0.95)'}}
                                        className={styles.countryList__item}
                                    >
                                        <Image
                                            src={countryValue.pathFlag}
                                            alt={'lag icon'}
                                            width={26}
                                            height={21}
                                            className={styles.countryList__flag}
                                        />
                                        <Link
                                            href={generateLink('/platforms/', countryValue.country)}
                                            className={styles.countryList__name}
                                        >
                                            {countryValue.country}
                                        </Link>
                                    </motion.div>
                                )
                            }
                        })}
                    </motion.div>
                </AnimatePresence>
                <CustomButton
                    onClick={() => setIsVisibleAll(prev => !prev)}
                    color={'white'}
                    text={!isVisibleAll ? 'See all' : 'Hide'}
                />
            </div>
        </section>
    );
};

export default CountryList;
