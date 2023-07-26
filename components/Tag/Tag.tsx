import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';

const Tag = ({title}: TagProps) => {

    return (
        <span className={styles.tag}>
            {title}
        </span>
    );
};

export default Tag;
