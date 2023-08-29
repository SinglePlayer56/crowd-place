'use client';

import styles from './Form.module.css';
import {CustomButton, Input, TextArea} from "@/components";
import {SubmitHandler, useForm} from "react-hook-form";
import {AddFormData, ContactsFormData, formData} from "@/types";
import {sendMail} from "@/helpers/fetch";
import {useState} from "react";
import Image from 'next/image';
import {FormProps} from "./Form.props";

const Form = ({defaultState, inputFields}: FormProps) => {
    const {
        register,
        control,
        formState: {errors},
        reset,
        handleSubmit
    } = useForm<formData<AddFormData | ContactsFormData>>();
    const [isSendMessage, setIsSendMessage] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<formData<AddFormData | ContactsFormData>> = async data => {
        try {
            setIsLoading(true);
            await sendMail(data);
            setIsLoading(false);
            reset(defaultState);
            setIsSendMessage(true);
        } catch (e) {
            setIsLoading(false);
            if (e instanceof Error) {
                console.log(e.message);
            }
        }
    }


    return (
        <>
            {!isSendMessage ?
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    {inputFields.map((inputField) => {
                        switch (inputField.tag) {
                            case "input":
                                return <Input
                                    key={inputField.label}
                                    className={styles.form__item}
                                    label={inputField.label}
                                    type={inputField.type}
                                    register={register}
                                    errors={errors}
                                    required={inputField.required}
                                />
                            case "textArea":
                                return <TextArea
                                    key={inputField.label}
                                    className={styles.form__textArea}
                                    label={inputField.label}
                                    register={register}
                                    errors={errors}
                                    maxLength={500}
                                    control={control}
                                    required={inputField.required}
                                />
                            default :
                                return <></>
                        }
                    })}
                    {/*<Input*/}
                    {/*    className={styles.form__item}*/}
                    {/*    label={'Platform name'}*/}
                    {/*    type={'text'}*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}*/}
                    {/*    required*/}
                    {/*/>*/}
                    {/*<Input*/}
                    {/*    className={styles.form__item}*/}
                    {/*    label={'Website'}*/}
                    {/*    type={'text'}*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}*/}
                    {/*    required*/}
                    {/*/>*/}
                    {/*<Input*/}
                    {/*    className={styles.form__item}*/}
                    {/*    label={'E-mail'}*/}
                    {/*    type={'email'}*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}*/}
                    {/*    required*/}
                    {/*/>*/}
                    {/*<TextArea*/}
                    {/*    className={styles.form__textArea}*/}
                    {/*    label={'Message'}*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}*/}
                    {/*    maxLength={500}*/}
                    {/*    control={control}*/}
                    {/*    required*/}
                    {/*/>*/}
                    <CustomButton
                        text={'Send message'}
                        color={'blue'}
                        type={'submit'}
                        disabled={isLoading}
                    >
                        {isLoading &&
                            <Image
                                src={'/icons/loading.svg'}
                                alt={'loading icons'}
                                width={30}
                                height={30}
                                className={styles.form__loader}
                            />
                        }
                    </CustomButton>
                </form>
                :
                <>
                    <p className={styles.form__sendMessage}>
                        Your message has been sent. <br/>
                        We’ll get back to you as soon as possible.
                    </p>
                </>
            }
        </>
    );
};

export default Form ;
