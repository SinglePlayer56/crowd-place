'use client';

import styles from './LangSwitcher.module.css';
import Link from 'next/link';
import {useEffect, useMemo, useState} from "react";
import cn from 'classnames';
import {usePathname} from "next/navigation";
import Image from 'next/image';
import {useClickOutside} from "react-click-outside-hook";

const LangSwitcher = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathName = usePathname();
    const [refSwitcher, isClickedOutside] = useClickOutside();
    const isBlogPage = pathName.includes('blog');

    const curLang = useMemo(() => pathName.split('/'), [pathName]);

    let curTestLang = 'en';

    useEffect(() => {
        setIsOpen(false);
    }, [isClickedOutside]);

    const toggleHandler = () => {
        setIsOpen((prev) => !prev);
    };

    const allLang = ['En', 'De', 'Fr'];
    const toLowerLang = allLang.map((lang) => lang.toLowerCase());

    for (const elem of curLang) {
        for (const lang of toLowerLang) {
            if (elem === lang) {
                curTestLang = lang;
            }
        }
    }

    const langPage = allLang.filter((lang) => lang.toLowerCase() === curTestLang);

    const langList = allLang.filter((lang) => lang.toLowerCase() !== curTestLang);
    let arrLink = [];

    if (curTestLang === 'en') {
        arrLink = toLowerLang
            .filter((lang) => curTestLang !== lang)
            .map((lang) => `${pathName}${lang}/`);
    } else {
        arrLink = toLowerLang.map((lang) =>
            lang === 'en'
                ? pathName.replace(`${curTestLang}/`, '')
                : pathName.replace(curTestLang, lang)
        );
    }

    arrLink = arrLink.filter((link) => !link.includes(curTestLang));


    return (
        <div ref={refSwitcher} onClick={toggleHandler} className={cn(styles.switcher, {
            [styles.switcher__off]: !isBlogPage
        })}>
            <div className={styles.switcher__currentLang_wrapper}>
                <span className={styles.switcher__currentLang}>{langPage[0]}</span>
                <Image
                    src={'/icons/angle.svg'}
                    alt={'angle-icon'}
                    width={14}
                    height={9}
                    className={cn(styles.switcher__icon, {
                        [styles.open]: isOpen
                    })}
                />
            </div>
            <div className={cn(styles.switcher__langList, {
                [styles.switcher__langList_open]: isOpen
            })}>
                {arrLink.map((href, index) => {
                    return (
                        <Link key={href}
                              className={styles.switcher__langList_item}
                              href={href}>{langList[index]}</Link>
                    )
                })}
            </div>
        </div>
    );
};

export default LangSwitcher;
