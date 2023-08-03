'use client';

import styles from "./TextArea.module.css";
import {TextAreaProps} from "./TextArea.props";
import cn from 'classnames';
import {useEffect, useState} from "react";
import {RegisterOptions, useWatch} from "react-hook-form";

const TextArea = ({register, control, errors, maxLength, required = false, label, placeholder, className}: TextAreaProps) => {
    // const [value, setValue] = useState<string>('');
    const fieldValue = useWatch({
        control,
        name: label
    });

    const errorField = errors[label];

    const errorOption: RegisterOptions = {
        required: {
            value: required,
            message: 'Field is required'
        },
        maxLength: {
           value: maxLength,
           message: `No more than ${maxLength} characters`
        }
    }

    return (
        <div className={cn(styles.textArea, className)}>
            <label className={styles.textArea__label} >{label}</label>
            <textarea
                {...register(label, errorOption)}
                className={cn(styles.textArea__input,
                    {
                        [styles.error__input]: errorField
                    })}
            />
            <span className={styles.textArea__number}>{fieldValue.length.toString()}/{maxLength}</span>
            {errorField && <span className={styles.error}>{errorField.message?.toString()}</span>}
        </div>
    );
};

export default TextArea;
