'use client';

// components/Pagination.tsx
// @ts-ignore
import usePagination from "@lucasmogari/react-pagination";
import cn from "classnames";
import Link from "next/link";
import React, { memo, PropsWithChildren } from "react";
import {usePathname} from "next/navigation";
import styles from './Pagination.module.css';

type Props = {
    page: number;
    itemCount: number;
    perPage: number;
};

const Pagination = ({ page, itemCount, perPage }: Props) => {
    // use the usePagination hook
    // getPageItem - function that returns the type of page based on the index.
    // size - the number of pages
    const { getPageItem, totalPages, currentPage} = usePagination({
        totalItems: itemCount,
        page: page,
        itemsPerPage: perPage,
        arrows: false,
        totalPages: Math.ceil(itemCount / perPage)
    });

    // const firstPage = 1;
    // calculate the next page
    // const nextPage = Math.min(page + 1, totalPages);
    // calculate the previous page
    // const prevPage = Math.max(page - 1, firstPage);
    // create a new array based on the total pages
    const arr = new Array(totalPages);

    return (
        <div className={styles.pagination}>
            {[...arr].map((_, i) => {
                // getPageItem function returns the type of page based on the index.
                // it also automatically calculates if the page is disabled.
                const { page } = getPageItem(i);


                if (page === "gap") {
                    return <span className={styles.dashed} key={`${page}-${i}`}>...</span>;
                }

                return page && <PaginationLink active={page === currentPage} key={`${page} + ${i}`} page={page}>
                    {page}
                </PaginationLink>;
            })}
        </div>
    );
};

type PaginationLinkProps = {
    page?: number | string;
    active?: boolean;
    disabled?: boolean;
} & PropsWithChildren;

function PaginationLink({ page, children, ...props }: PaginationLinkProps) {
    const pathName = usePathname();
    // we use existing data from router query, we just modify the page.
    const q = { page };
    return (
        <Link
            scroll={false}
            // only use the query for the url, it will only modify the query, won't modify the route.
            href={page === 1 ? pathName : { query: q }}
            // toggle the appropriate classes based on active, disabled states.
            className={cn(styles.button, {
                "p-2": true,
                [styles.active]: props.active,
                [styles.notActive]: !props.active,
                [styles.pointer]: props.disabled,
            })}
        >
            {children}
        </Link>
    );
}
export default memo(Pagination);
