'use client';

// @ts-ignore
import usePagination from "@lucasmogari/react-pagination";
import cn from "classnames";
import Link from "next/link";
import React, {useEffect, useLayoutEffect, useMemo, useState} from "react";
import {usePathname} from "next/navigation";
import styles from './Pagination.module.css';
import {PaginationLinkProps, PaginatorType, SearchPageSearchParams} from "@/types";
import {replacedSearchParam} from "@/helpers";

type Props = {
    page: number;
    itemCount: number;
    perPage: number;
    type: PaginatorType;
    searchParams?: SearchPageSearchParams
};

const Pagination = ({page, itemCount, perPage, type, searchParams}: Props) => {
    const [searchProps, setSearchProps] = useState<SearchPageSearchParams | undefined>(searchParams);
    const [currentUrl, setCurrentUrl] = useState<string>('');

    useEffect(() => {
        const url = typeof window !== "undefined" ? window.location.href : "";
        setCurrentUrl(url);
    }, [])

    useEffect(() => {
        if (searchParams !== searchProps) {
            setSearchProps(searchParams);
        }
    }, [searchParams]);

    const {getPageItem, totalPages, currentPage} = usePagination({
        totalItems: itemCount,
        page: page,
        itemsPerPage: perPage,
        arrows: false,
        totalPages: Math.ceil(itemCount / perPage)
    });

    const pathName = usePathname();
    const getPageLinks = useMemo(() => {
        const links = [];

        for (let i = 0; i < totalPages; i++) {
            const { page } = getPageItem(i);

            if (page === "gap") {
                links.push(<span className={styles.dashed} key={`gap-${i}`}>...</span>);
            } else if (page) {
                const link = type === "main" ? `page=${page}` :
                    type === "platforms" ? replacedSearchParam(currentUrl, "platformPage", String(page)) :
                        replacedSearchParam(currentUrl, "postPage", String(page));

                const linkHref = (type === "main" && page === 1) ? pathName : `?${link}`;

                links.push(
                    <PaginationLink
                        key={`page-${type}-${page}`}
                        type={type}
                        rel={currentPage > page ? 'prev' : currentPage < page ? 'next' : 'self'}
                        active={page === currentPage}
                        page={page}
                        platformPage={page}
                        postPage={page}
                        currentPage={String(currentPage)}
                        linkHref={linkHref}
                    >
                        {page}
                    </PaginationLink>
                );
            }
        }

        return links;
    }, [currentPage, currentUrl, totalPages, type]);

    return (
        <div className={styles.pagination}>
            {getPageLinks}
        </div>
    );
};



function PaginationLink({page, children, platformPage, postPage, currentPage, type, rel, linkHref, ...props}: PaginationLinkProps) {
    return (
        <Link
            scroll={false}
            href={ linkHref }
            rel={rel}
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

export default Pagination;
