'use client';
import styles from "./Input.module.css";

import {InputProps} from "./Input.props";
import cn from 'classnames';
import {RegisterOptions} from "react-hook-form";

const Input = ({register, required = false, errors, label, placeholder, type, className}: InputProps) => {

    const errorField = errors[label];
    const errorOptions: RegisterOptions = {
        required: {
            value: required,
            message: 'Field is required'
        }
    }

    return (
        <div className={cn(styles.input__item, className)}>
            <label className={styles.input__label}>{label}</label>
            <input
                {...register(label, errorOptions)}
                placeholder={placeholder}
                type={type}
                className={cn(styles.input__input,
                    {
                        [styles.error__input]: errorField
                    })}
            />
            {errorField && <span className={styles.error}>{errorField.message?.toString()}</span>}
        </div>
    );
};

export default Input;
