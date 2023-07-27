import {PTagProps} from "./PTag.props";
import styles from './PTag.module.css';
import cn from 'classnames';

const PTag = ({fontSize, children}: PTagProps) => {

    return (
        <p className={cn(styles.pTag, {
            [styles.font20]: fontSize === '20px'
        })}>
            {children}
        </p>
    );
};

export default PTag;
