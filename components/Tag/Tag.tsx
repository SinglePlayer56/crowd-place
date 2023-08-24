'use client';

import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';
import {ForwardedRef, forwardRef} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

const Tag = forwardRef<HTMLSpanElement, TagProps>(({title, href, className}: TagProps, ref: ForwardedRef<HTMLSpanElement>) => {

    return (
        <span ref={ref} className={cn(styles.tag, className)}>
            <Link href={`/${href}/${title.toLowerCase().split(' ').join('-')}/`} >
                {title}
            </Link>
        </span>
    );
});

export default motion(Tag, {forwardMotionProps: true});
