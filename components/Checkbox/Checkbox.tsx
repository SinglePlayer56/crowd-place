'use client';

import {CheckboxProps} from "./Checkbox.props";
import styles from './Checkbox.module.css';
import {useState} from "react";

const Checkbox = ({value, title}: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <label className={styles.checkbox}>
            <input
                className={styles.checkbox__input}
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                value={value}
            />
            <span className={styles.checkbox__checkmark}></span>
            <span className={styles.checkbox__title}>{title}</span>
        </label>
    );
};

export default Checkbox;
