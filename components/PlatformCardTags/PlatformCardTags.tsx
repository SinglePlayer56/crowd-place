'use client';

import styles from "./PlatformCardTags.module.css";
import {Tag} from "@/components";
import cn from "classnames";
import {PlatformCardTagsProps} from "@/components/PlatformCardTags/PlatformCardTags.props";
import {useState} from "react";

const PlatformCardTags = ({tags, title, className}: PlatformCardTagsProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className={cn(styles.tags, className)}>
            <span className={styles.tags__name}>{title}:</span>
            {tags.map((item, index) => {
                if (index <=1) {
                    return <Tag key={item} title={item}/>
                } else {
                    return <Tag key={item} className={cn({
                        [styles.hidden]: !isVisible
                    })} title={item}/>
                }
            })}
            {tags.length > 2 &&
                <button
                    className={cn(styles.seeMore, {
                        [styles.hidden]: isVisible
                    })}
                    onClick={() => setIsVisible(true)}
                >
                    + seeMore
                </button>
            }
        </div>
    );
};

export default PlatformCardTags;
