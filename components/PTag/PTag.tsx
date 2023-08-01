import {PTagProps} from "./PTag.props";
import styles from './PTag.module.css';
import cn from 'classnames';

const PTag = ({fontSize, children, className}: PTagProps) => {

    return (
        <p className={cn(styles.pTag, className, {
            [styles.font20]: fontSize === '20px',
            [styles.font17]: fontSize === '17px'
        })}>
            {children}
        </p>
    );
};

export default PTag;
