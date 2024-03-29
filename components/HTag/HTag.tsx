import styles from './HTag.module.css'
import {HTagProps} from "./HTag.props";
import cn from 'classnames';

const HTag = ({tag, children, className}: HTagProps) => {

    switch (tag) {
        case "h1":
            return <h1 className={cn(styles.hTag, className, styles.h1)}>{children}</h1>
        case "h2":
            return <h2 className={cn(styles.hTag, className, styles.h2)}>{children}</h2>
        case "h3":
            return <h3 className={cn(styles.hTag, className, styles.h3)}>{children}</h3>
        case "h4":
            return <h4 className={cn(styles.hTag, className, styles.h4)}>{children}</h4>
        case "h5":
            return <h5 className={cn(styles.hTag, className, styles.h5)}>{children}</h5>
        case "h6":
            return <h6 className={cn(styles.hTag, className, styles.h6)}>{children}</h6>
        default:
            return <></>
    }
};

export default HTag;
