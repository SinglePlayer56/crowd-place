'use client';

import styles from "./PlatformCardTags.module.css";
import {Tag} from "@/components";
import cn from "classnames";
import {PlatformCardTagsProps} from "@/components/PlatformCardTags/PlatformCardTags.props";
import {useLayoutEffect, useRef, useState} from "react";
import {motion, AnimatePresence} from 'framer-motion';

const PlatformCardTags = ({tags, title, className}: PlatformCardTagsProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [parentWidth, setParentWidth] = useState<number>(0);
    const [renderElem, setRenderElem] = useState<number>(2);

    const contentRef = useRef<HTMLDivElement>(null);
    const tagRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        if (contentRef.current) {
            const containerWidth = contentRef.current.clientWidth;
            const parentWidth = contentRef.current.parentElement?.parentElement?.clientWidth;

            if (containerWidth > parentWidth! - 60) {
                setContainerWidth(containerWidth);
                setParentWidth(parentWidth! - 60);
                setRenderElem(1);
            }
        }
    }, [isVisible]);

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
                                ref={tagRef}
                                className={cn({
                                    [styles.hidden]: !isVisible && containerWidth > parentWidth && index > renderElem
                                })}
                                key={item}
                                title={item}
                            />
                        )
                    } else {
                        return (
                            <Tag
                                ref={tagRef}
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


                {(containerWidth > parentWidth || tags.length > 2) &&
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
