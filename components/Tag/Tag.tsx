import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

const Tag = ({title, className}: TagProps) => {

    return (
        <span className={cn(styles.tag, className)}>
            {title}
        </span>
    );
};

export default Tag;
