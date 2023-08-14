import {CheckboxProps} from "./Checkbox.props";
import styles from './Checkbox.module.css';
import {memo} from "react";

const Checkbox = memo(
    ({value, toggleCheckboxValue, checked, type, title}: CheckboxProps) => {

        return (
            <label className={styles.checkbox}>
                <input
                    className={styles.checkbox__input}
                    type="checkbox"
                    checked={checked}
                    value={value}
                    onChange={() => toggleCheckboxValue({type, value})}
                />
                <span className={styles.checkbox__checkmark}></span>
                <span className={styles.checkbox__title}>{title}</span>
            </label>
        );
    }
)

export default Checkbox;
