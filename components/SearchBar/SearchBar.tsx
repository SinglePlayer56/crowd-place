'use client';

import {SearchButton} from "@/components";
import styles from './SearchBar.module.css';
import cn from 'classnames';
import {SearchBarProps} from "./SearchBar.props";
import {ChangeEvent, ReactNode, useEffect, useRef, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useClickOutside} from 'react-click-outside-hook';
import {KeyboardEvent} from "react";
import Image from 'next/image';
import {ISearchResult} from "@/types";
import Link from 'next/link';
import {useRouter} from "next/navigation";
import clientEnv from "@/consts/clientEnv";

async function fetchSearchHandler(value: string): Promise<ISearchResult> {
    const response = await fetch(`${clientEnv.localServer}/api/search?searchParams=${value}`);
    const data = await response.json();

    return data;
}

const SearchBar = ({className, page}: SearchBarProps) => {
    const [values, setValue] = useState<string>('');
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const refSearchInput = useRef<HTMLInputElement>(null);
    const [searchResult, setSearchResult] = useState<ISearchResult | undefined>();
    const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [refSearchWindow, isOutsideClick] = useClickOutside();
    const [variants, setVariants] = useState({});
    const router = useRouter();

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const searchHandler = () => {
        if (values.length > 0) {
            setIsFetching(true);
            setSearchResult(undefined);

            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }

            const timeoutId = setTimeout(() => {
                fetchSearchHandler(values)
                    .then((res) => setSearchResult(res))
                    .then(() => setIsFetching(false));
            }, 1500);

            setSearchTimeout(timeoutId);
        }
    }

    const keyEnterSearch = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    }

    useEffect(() => {
        searchHandler();

        if (window.innerWidth >= 537) {
            const variantsAnimation = {
                expandSearch: {width: 500, opacity: 1},
                collapseSearch: {width: 0, opacity: 0},
                opacityZero: {opacity: 0},
                opacityOne: {opacity: 1},
                expandResult: {height: 400, opacity: 1},
                collapseResult: {height: 0, opacity: 0},
                widthZero: {width: 0}
            }
            setVariants(variantsAnimation)
        }

        if (window.innerWidth < 537) {
            const variantsAnimation = {
                expandSearch: {width: 380, opacity: 1},
                collapseSearch: {width: 0, opacity: 0},
                opacityZero: {opacity: 0},
                opacityOne: {opacity: 1},
                expandResult: {height: 400, opacity: 1},
                collapseResult: {height: 0, opacity: 0},
                widthZero: {width: 0}
            }
            setVariants(variantsAnimation)
        }

        if (window.innerWidth < 425) {
            const variantsAnimation = {
                expandSearch: {width: 280, opacity: 1},
                collapseSearch: {width: 0, opacity: 0},
                opacityZero: {opacity: 0},
                opacityOne: {opacity: 1},
                expandResult: {height: 400, opacity: 1},
                collapseResult: {height: 0, opacity: 0},
                widthZero: {width: 0}
            }
            setVariants(variantsAnimation)
        }

        if (values.length === 0) {
            setSearchResult(undefined);
            setIsFetching(false);
        }

        if (isExpanded && refSearchInput.current) {
            refSearchInput.current.focus();
        }

        if (isOutsideClick && isExpanded) {
            setSearchTimeout(null);
            setSearchResult(undefined);
            setIsFetching(false);
            setValue('');
            setIsExpanded(false);
        }

    }, [values, isExpanded, isOutsideClick]);

    const closeSearchHandler = () => {
        setIsExpanded(false);
        setValue('');
    }

    const routeSearchPage = () => {
        const hrefSearchPage = `/search/?content=${values}&limitPlatforms=8&platformPage=1&limitPosts=6&postPage=1`;

        router.push(hrefSearchPage);
    }

    return (
        <div ref={refSearchWindow} className={cn(styles.searchBar, className)}>
            <SearchButton
                variants={variants}
                initial={'opacityOne'}
                animate={isExpanded ? 'opacityZero' : 'opacityOne'}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                onClick={() => setIsExpanded(true)}
                color={page === 'Main' ? 'white' : 'blue'}
                className={cn({
                    [styles.mainPosition]: page === 'Main',
                    [styles.otherPositions]: page === 'Other',
                    [styles.notActiveButton]: isExpanded
                })}
            />
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        key={"search-input-wrapper"}
                        className={styles.searchBar__wrapper}
                        animate={isExpanded ? 'expandSearch' : 'collapseSearch'}
                        transition={{duration: 0.3}}
                        exit={'collapseSearch'}
                        variants={variants}
                        initial={'collapseSearch'}
                    >
                        <div className={styles.searchBar__inputContainer}>
                            <input
                                ref={refSearchInput}
                                className={styles.searchBar__input}
                                type="text"
                                onChange={inputHandler}
                                placeholder={'Search...'}
                                onKeyDown={keyEnterSearch}
                            />
                            <Image
                                src={'/icons/close-icon.svg'}
                                width={26}
                                height={26}
                                alt={'close-button'}
                                onClick={closeSearchHandler}
                                className={styles.searchBar__close}
                            />
                        </div>

                        {values.length > 0 && (
                            <motion.div
                                className={styles.searchBar__resultContainer}
                                key={'search-result'}
                                variants={variants}
                                initial={'collapseResult'}
                                animate={values.length > 0 ? 'expandResult' : 'collapseResult'}
                                exit={'collapseResult'}
                                transition={{duration: 0.3}}
                            >
                                {isFetching &&
                                    <motion.div
                                        key={'searchbar-loader'}
                                        className={styles.searchBar__loader}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{duration: 0.3}}
                                    >
                                        <Image
                                            src={'/icons/loading-blue.svg'}
                                            alt={'loading-animation'}
                                            width={40}
                                            height={40}
                                            style={{objectFit: 'contain'}}
                                        />
                                    </motion.div>
                                }

                                {
                                    searchResult &&
                                    searchResult.platformResult.length === 0 &&
                                    searchResult.postResult.length === 0 &&
                                    <motion.div
                                        key={'searchbar-no-result'}
                                        className={styles.searchBar__noresult}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{duration: 0.3}}
                                    >
                                        <p>No result</p>
                                    </motion.div>
                                }

                                {searchResult && searchResult.platformResult.length > 0 &&
                                    <motion.div
                                        key={'platforms-result'}
                                        className={styles.result}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{duration: 0.3}}
                                    >
                                        <p className={styles.result__title}>Platforms</p>
                                        <div className={styles.result__list}>
                                            {
                                                searchResult.platformResult.map((platform) => (
                                                    <motion.div
                                                        key={`${platform.slug}${platform.name}`}
                                                        className={styles.result__item}
                                                    >
                                                        <Image
                                                            src={platform.logo}
                                                            alt={'platform-log'}
                                                            width={26}
                                                            height={26}
                                                            style={{objectFit: 'contain'}}
                                                        />
                                                        <Link href={`/platform/${platform.slug}/`}
                                                              className={styles.result__item_text}>
                                                            {highlightMatch(platform.name, values)}
                                                        </Link>
                                                    </motion.div>
                                                ))
                                            }

                                        </div>
                                    </motion.div>
                                }

                                {searchResult && searchResult.postResult.length > 0 &&
                                    <div className={styles.result}>
                                        <p className={styles.result__title}>Post</p>
                                        <div className={styles.result__list}>
                                            {
                                                searchResult.postResult.map((post) => (
                                                    <div key={`${post.slugHref}${post.title}`}
                                                         className={styles.result__list}>
                                                        <div className={styles.result__item}>
                                                            <Link href={`/blog/${post.slugHref}/`}
                                                                  className={styles.result__item_text}>
                                                                {highlightMatch(post.title, values)}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                }

                                {searchResult && (searchResult.totalPosts > 5 || searchResult.totalPlatform > 5) &&
                                    <span onClick={routeSearchPage}
                                          className={styles.result__seeMore}>See more results</span>
                                }
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SearchBar;

function highlightMatch(text: string, values: string): ReactNode {
    const lowerCaseText = text.toLowerCase();
    const lowerCaseQuery = values.toLowerCase();

    if (lowerCaseText.includes(lowerCaseQuery)) {
        const startIndex = lowerCaseText.indexOf(lowerCaseQuery);
        const endIndex = startIndex + lowerCaseQuery.length;

        return (
            <>
                {text.substring(0, startIndex)}
                <span className={styles.result__item_highlight}>{text.substring(startIndex, endIndex)}</span>
                {text.substring(endIndex)}
            </>
        );
    }

    return text;
}
