'use client';

import styles from "./SearchPageInput.module.css";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import {PTag} from "@/components";
import {SearchPageInputProps} from "./SearchPageInput.props";
import {useRouter} from "next/navigation";
import Image from 'next/image';

const SearchPageInput = ({totalCountResult, content}: SearchPageInputProps) => {
    const [inputValue, setInputValue] = useState<string>(content);
    const router = useRouter();


    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const searchHandler = () => {
        const hrefSearch = `/search/?content=${inputValue}&limitPlatforms=8&platformPage=1&limitPosts=6&postPage=1`;

        router.push(hrefSearch);
    }

    const keyEnterSearch = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    }

    return (
        <section className={styles.search}>
            <div className="container">
                <div className={styles.search__wrapper}>
                    <div className={styles.search__input_wrapper}>
                        <input
                            onKeyDown={keyEnterSearch}
                            className={styles.search__input}
                            value={inputValue}
                            placeholder={'Search...'}
                            onChange={inputChangeHandler}
                            type="text"
                        />
                    </div>
                    <button className={styles.search__button} onClick={searchHandler}>
                        <Image
                            src={'/icons/search-white.svg'}
                            width={30}
                            height={30}
                            alt={'search-icon'}
                        />
                    </button>
                </div>
                {content &&
                    <div className={styles.search__sidebar}>
                        <PTag fontSize={'20px'} >
                            Searching: "<span className={styles.sidebar__highlight}>{content}</span>", found {totalCountResult} results
                        </PTag>
                    </div>
                }
            </div>
        </section>
    );
};

export default SearchPageInput;
