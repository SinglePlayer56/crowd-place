'use client';

import styles from "./TextArea.module.css";
import {TextAreaProps} from "./TextArea.props";
import cn from 'classnames';
import {useState} from "react";
import {RegisterOptions} from "react-hook-form";

const TextArea = ({register, errors, maxLength, required = false, label, placeholder, className}: TextAreaProps) => {
    const [value, setValue] = useState<string>('');

    const errorField = errors[label];

    const errorOption: RegisterOptions = {
        required: {
            value: required,
            message: 'Field is required'
        },
        maxLength: {
           value: maxLength,
           message: 'No more than 500 characters'
        }
    }

    return (
        <div className={cn(styles.textArea, className)}>
            <label className={styles.textArea__label} >{label}</label>
            <textarea
                value={value}
                {...register(label, errorOption)}
                onChange={(e) => setValue(e.target.value)}
                className={cn(styles.textArea__input,
                    {
                        [styles.error__input]: errorField
                    })}
            />
            <span className={styles.textArea__number}>{value.length}/{maxLength}</span>
            {errorField && <span className={styles.error}>{errorField.message?.toString()}</span>}
        </div>
    );
};

export default TextArea;
