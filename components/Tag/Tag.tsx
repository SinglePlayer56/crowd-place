'use client';

import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';
import {ForwardedRef, forwardRef} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

const Tag = forwardRef<HTMLSpanElement, TagProps>(({title, href, className}: TagProps, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
        <motion.span
            ref={ref}
            className={cn(styles.tag, className)}
            initial={{transform: 'scale(1)'}}
            whileHover={{backgroundColor: '#24b2fc', border: '2px solid #24b2fc'}}
            whileTap={{transform: 'scale(0.95)'}}
            transition={{duration: 0.3, ease: "easeInOut"}}
        >
            <Link href={`${href}`} >
                {title}
            </Link>
        </motion.span>
    );
});

export default motion(Tag, {forwardMotionProps: true});
