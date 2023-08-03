'use client';

import {ContactFormProps} from "./ContactForm.props";
import styles from './ContactForm.module.css';
import {CustomButton, Input, TextArea} from "@/components";
import {SubmitHandler, useForm} from "react-hook-form";

const defaultState = {
    'Platform name': '',
    'Website': '',
    'E-mail': '',
    'Message': ''
}

const ContactForm = ({}: ContactFormProps) => {
    const {register, control, getValues,formState: {errors, }, reset, handleSubmit} = useForm<{ [key: string]: string }>()


    const onSubmit: SubmitHandler<{ [key: string]: string }> = async data => {
        await sendMail(data);
        await reset(defaultState);
    }

    async function sendMail(data: any) {
        const response = await fetch('/api/add-platform', {
            method: 'POST',
            body: JSON.stringify({
                platformName: data['Platform name'],
                website: data['Website'],
                email: data['E-mail'],
                message: data['Message']
            }),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        return await response.json();
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
                control={control}
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
