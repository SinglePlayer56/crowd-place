'use client';

import styles from "./PlatformsListingLinks.module.css";
import {CustomButton, HTag} from "@/components";
import {platformListingLinks} from "@/consts";
import Link from "next/link";
import cn from "classnames";
import {useState} from "react";

const PlatformsListingLinks = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const isVisibleToggle = () => {
        setIsVisible((prev) => !prev);
    }

    return (
        <section className={styles.links}>
            <div className={'container'}>
                <HTag className={styles.links__title} tag={'h2'}>
                    Links
                </HTag>
                <div className={styles.links__wrapper}>
                    <div className={styles.links__list}>
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
                    </div>
                </div>
                <CustomButton onClick={isVisibleToggle} className={styles.links__button} text={'See all'}
                              color={'transparent'}/>
            </div>
        </section>
    );
};

export default PlatformsListingLinks;
