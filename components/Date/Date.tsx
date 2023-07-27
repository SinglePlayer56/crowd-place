import styles from './Date.module.css';
import {DateProps} from "./Date.props";

const Date = ({date}: DateProps) => {

    return (
        <span className={styles.date}>
            {date}
        </span>
    );
};

export default Date;
