'use client';

import styles from "./SearchButton.module.css";
import Image from "next/image";
import {SearchButtonProps} from "./SearchButton.props";
import cn from 'classnames';
import {ForwardedRef, forwardRef} from "react";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";

const SearchButton = forwardRef(({color, className, onClick}: SearchButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const pathName = usePathname();
    const isSearchPathName = pathName === '/search/';

    return (
        <button
            onClick={onClick}
            ref={ref}
            className={cn(styles.searchButton, className, {
                [styles.white]: color === 'white',
                [styles.blue]: color === 'blue',
                [styles.none]: isSearchPathName
            })}>
            <Image
                src={color === 'white' ? '/icons/search-white.svg' : '/icons/search.svg'}
                alt={'search button'}
                width={21}
                height={21}
            />
        </button>
    );
});

export default motion(SearchButton, {forwardMotionProps: true});
