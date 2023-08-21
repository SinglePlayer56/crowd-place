'use client';

import styles from "./PlatformCardTags.module.css";
import {Tag} from "@/components";
import cn from "classnames";
import {PlatformCardTagsProps} from "@/components/PlatformCardTags/PlatformCardTags.props";
import {useEffect, useRef, useState} from "react";
import {motion, AnimatePresence} from 'framer-motion';
import {useSearchParams} from "next/navigation";

const PlatformCardTags = ({tags, title, className}: PlatformCardTagsProps) => {
    const searchParams = useSearchParams();
    const pageParams = searchParams.get('page');

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [parentWidth, setParentWidth] = useState<number>(0);
    const [renderElem, setRenderElem] = useState<number>(2);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const containerWidth = Number(contentRef.current.getBoundingClientRect().width.toFixed(2));
            const parentWidth = Number(contentRef.current.parentElement?.parentElement?.getBoundingClientRect().width.toFixed(2));

            if (containerWidth > parentWidth! - 61.33) {
                setContainerWidth(containerWidth);
                setParentWidth(parentWidth! - 61.33);
                setRenderElem(1);
            }
        }
    }, [pageParams]);

    return (
        <AnimatePresence>
            <motion.div
                animate={{height: isVisible ? 'auto' : 35}}
                ref={contentRef}
                className={cn(styles.tags, className, {
                    [styles.wrap]: isVisible
                })}
            >
                <span className={styles.tags__name}>{title}:</span>
                {tags.map((item, index) => {
                    if (index < renderElem) {
                        return (
                            <Tag
                                key={item}
                                title={item}
                                initial={false}
                                animate={{opacity: 1, y: 0}}
                            />
                        )
                    } else {
                        return (
                            <Tag
                                key={item}
                                className={cn({
                                    [styles.hidden]: !isVisible
                                })}
                                title={item}
                                initial={false}
                                animate={{opacity: isVisible ? 1 : 0, y: 0}}
                                transition={{duration: 0.3, delay: 0.1 * index}}
                            />
                        )
                    }
                })}

                {(containerWidth > parentWidth || tags.length > renderElem) && tags.length > renderElem &&
                    <button
                        className={cn(styles.seeMore, {
                            [styles.hidden]: isVisible
                        })}
                        onClick={() => setIsVisible(true)}
                    >
                        + seeMore
                    </button>
                }
            </motion.div>
        </AnimatePresence>
    );
};

export default PlatformCardTags;
