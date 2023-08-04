'use client';

import styles from './BreadCrumbs.module.css'
import {BreadCrumbsProps} from "./BreadCrumbs.props";
import cn from 'classnames';
import {usePathname} from "next/navigation";
import Link from "next/link";
import {Fragment} from "react";

const BreadCrumbs = ({className}: BreadCrumbsProps) => {
    const pathName = usePathname();
    let splitPathName: string[] = pathName.split('/');

    if (splitPathName.length > 1) {
        splitPathName.pop();
    }


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
        const nameLink = hrefSplit[hrefSplit.length-1].split('-').join(' ');
        return nameLink;
    }


    const linkDataList = hrefList.map((href) => {
        const nameHref = getName(href);

        return (
            {
                href: href.length > 0 ? href : '/',
                name:  nameHref.length > 0 ? nameHref.replace(nameHref[0], nameHref[0].toUpperCase()) : 'Main'
            }
        )
    });

    return (
        <section>
            <div className={'container'}>
                <div className={cn(styles.breadCrumbs, className)}>
                    {linkDataList.map((item) => (
                        <Fragment key={item.href}>
                            <Link
                                href={item.href}
                                className={styles.text}
                            >
                                {item.name}
                            </Link>
                            <div className={styles.dash}/>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BreadCrumbs;
