import styles from './HTag.module.css'
import {HTagProps} from "./HTag.props";
import cn from 'classnames';

const HTag = ({tag, children, fontSize}: HTagProps) => {

    switch (tag) {
        case "h1":
            return <h1 className={cn(styles.hTag, styles.h1)}>{children}</h1>
        case "h2":
            return <h2 className={cn(styles.hTag, styles.h2)}>{children}</h2>
        case "h3":
            return <h3 className={cn(styles.hTag, styles.h3)}>{children}</h3>
        default:
            return <></>
    }
};

export default HTag;
