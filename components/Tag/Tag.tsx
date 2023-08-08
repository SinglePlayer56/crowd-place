import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';
import {ForwardedRef, forwardRef} from "react";

const Tag = forwardRef<HTMLSpanElement, TagProps>(({title, className}: TagProps, ref: ForwardedRef<HTMLSpanElement>) => {

    return (
        <span ref={ref} className={cn(styles.tag, className)}>
            {title}
        </span>
    );
});

export default Tag;
