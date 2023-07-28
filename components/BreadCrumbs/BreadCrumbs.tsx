'use client';

import styles from './BreadCrumbs.module.css'
import {BreadCrumbsProps} from "./BreadCrumbs.props";
import cn from 'classnames';
import {usePathname} from "next/navigation";
import {isActiveLink} from "@/helpers";
import Link from "next/link";

const BreadCrumbs = ({className}: BreadCrumbsProps) => {
    const pathName = usePathname();

    const splitPathName = pathName.split('/');

    let count = 0;
    const hrefList: string[] = []

    while (count < splitPathName.length) {
        const href: string[] = [];

        for (let i = 0; i <= count; i++) {
            href.push(splitPathName[i]);
        }

        hrefList.push(href.join('/'));

        count++;
    }

    function getName(href: string) {
        const hrefSplit = href.split('/');
        return hrefSplit[hrefSplit.length - 1];
    }

    const linkDataList = hrefList.map((href) => {
        const nameHref = getName(href);

        return (
            {
                href: href.length > 0 ? href : '/',
                name: nameHref.length > 0 ? nameHref.replace(nameHref[0], nameHref[0].toUpperCase()) : 'Main'
            }
        )
    });

    return (
        <div className={cn(styles.breadCrumbs, className)}>
            {linkDataList.map((item) => (
                <>
                    <Link href={item.href} className={cn(styles.text, {
                        [styles.active]: isActiveLink(item.href)
                    })}>{item.name}</Link>
                    <div className={styles.dash}/>
                </>
            ))}
        </div>
    );
};

export default BreadCrumbs;
