'use client';

import styles from "./PlatformsListingLinks.module.css";
import {CustomButton, HTag} from "@/components";
import {platformListingLinks} from "@/consts";
import Link from "next/link";
import cn from "classnames";
import {memo, useEffect, useRef, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const PlatformsListingLinks = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const listRef = useRef<HTMLDivElement>(null);
    const [offsetList, setOffsetList] = useState<number>(0);
    const isHiddenButton = offsetList && offsetList < -600 && isVisible;

    const isVisibleToggle = () => {
        setIsVisible((prev) => !prev);
    }

    const handleScroll = () => {
        if (listRef.current) {
            const offsetTop = listRef.current.getBoundingClientRect().top;
            if (offsetTop < 200) {
                setOffsetList(offsetTop);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={listRef} className={styles.links}>
            <div className={'container'}>
                <HTag className={styles.links__title} tag={'h2'}>
                    Links
                </HTag>
                <div className={styles.links__wrapper}>
                    <div className={styles.links__list}>
                       <LinkList isVisible={isVisible}/>
                    </div>
                </div>
                <AnimatePresence>
                    {isHiddenButton &&
                        <motion.button
                            key={'hide-links-button'}
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: -65}}
                            exit={{opacity: 0, x: -20}}
                            className={styles.hide}
                            onClick={isVisibleToggle}
                        >
                            Hide links
                        </motion.button>
                    }
                </AnimatePresence>
                <CustomButton
                    onClick={isVisibleToggle}
                    className={cn(styles.links__button, {
                        [styles.notActive]: isHiddenButton
                    })}
                    text={'See all'}
                    color={'transparent'}
                />
            </div>
        </section>
    );
};

export default PlatformsListingLinks;


const LinkList = memo(({isVisible}: {isVisible: boolean}) => {
    return  (
        <>
            {platformListingLinks.map((link, index) => {
                if (index < 20) {
                    return (
                        <Link
                            key={link.href}
                            className={styles.list__item}
                            href={link.href}>
                            {link.title}
                        </Link>
                    )
                } else {
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={(cn(styles.list__item, {
                                [styles.hidden]: !isVisible
                            }))}
                        >
                            {link.title}
                        </Link>
                    )
                }
            })}
        </>
    )
})
