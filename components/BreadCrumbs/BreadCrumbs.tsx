'use client';

import styles from './BreadCrumbs.module.css'
import {BreadCrumbsProps} from "./BreadCrumbs.props";
import cn from 'classnames';
import Link from "next/link";
import {Fragment} from "react";

function generateBreadcrumbs(params: string[]) {
    let breadcrumbs = [];
    let path = '';

    for (let param of params) {
        if (param === '') {
            path = `/`;
        } else if (path.length === 0) {
            path = `/${path}${param}/`;
        } else {
            path = `${path}${param}/`;
        }
        breadcrumbs.push(path);
    }

    return breadcrumbs;
}

const BreadCrumbs = ({className, paramsPath}: BreadCrumbsProps) => {
    const hrefParams = paramsPath.map((param) => param.href);
    const hrefList = generateBreadcrumbs(hrefParams);
    const breadCrumbsList = paramsPath.map((object, index) => {
        if (paramsPath.length - 1 === index) {
            return {name: object.name, href: ''}
        }

        return {name: object.name, href: hrefList[index]}
    });

    return (
        <section>
            <div className={'container'}>
                <div className={cn(styles.breadCrumbs, className)}>
                    {breadCrumbsList.map((item) => (
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
