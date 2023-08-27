'use client';

import styles from './LangSwitcher.module.css';
import Link from 'next/link';
import {useState} from "react";
import cn from 'classnames';
import {usePathname} from "next/navigation";
import Image from 'next/image';

const LangSwitcher = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathName = usePathname();

    const curLang = pathName.split('/');

    let curTestLang = 'en';

    const toggleHandler = () => {
        setIsOpen((prev) => !prev);
    }

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
    let arrLink = []


    if (curTestLang === 'en') {
        for (const lang of toLowerLang) {
            if (curTestLang !== lang) {
                const href = `/${lang}${pathName}`
                arrLink.push(href);
            }
        }
    } else {
        for (const lang of toLowerLang) {
            if (lang === 'en') {
                const href = pathName.replace(`${curTestLang}/`, '')
                arrLink.push(href);
            } else {
                const href = pathName.replace(curTestLang, lang);
                arrLink.push(href);
            }
        }
    }


    arrLink = arrLink.filter((link) => !link.includes(curTestLang));

    console.log(langList);
    console.log(arrLink);

    return (
        <div onClick={toggleHandler} className={styles.switcher}>
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
