'use client';

import {ContactFormProps} from "./ContactForm.props";
import styles from './ContactForm.module.css';
import {CustomButton, Input, TextArea} from "@/components";
import {SubmitHandler, useForm} from "react-hook-form";
import {useEffect} from "react";

const ContactForm = ({}: ContactFormProps) => {
    const {register, formState: {errors}, handleSubmit} = useForm<{[key:string]: string}>()

    const onSubmit: SubmitHandler<{ [key:string]: string }> = data => {
        console.log(JSON.stringify(data));
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
                className={styles.form__item}
                label={'Platform name'}
                type={'text'}
                register={register}
                errors={errors}
                required
            />
            <Input
                className={styles.form__item}
                label={'Website'}
                type={'text'}
                register={register}
                errors={errors}
                required
            />
            <Input
                className={styles.form__item}
                label={'E-mail'}
                type={'email'}
                register={register}
                errors={errors}
                required
            />
            <TextArea
                className={styles.form__textArea}
                label={'Message'}
                register={register}
                errors={errors}
                maxLength={500}
                required
            />
            <CustomButton
                text={'Send message'}
                color={'blue'}
                type={'submit'}
            />
        </form>
    );
};

export default ContactForm;
