import {BreadCrumbs, Form, HTag} from "@/components";
import styles from './AddPlatform.module.css';
import {AddFormData, FormField} from "@/types";
import {redirect} from "next/navigation";

const AddPlatform = () => {

    const defaultState: AddFormData = {
        'Platform name': '',
        'Website': '',
        'E-mail': '',
        'Message': ''
    }

    const inputFields: FormField<AddFormData>[] = [
        {
            tag: 'input',
            label: 'Platform name',
            type: 'text',
            required: true
        },
        {
            tag: 'input',
            label: 'Website',
            type: 'text',
            required: true
        },
        {
            tag: 'input',
            label: 'E-mail',
            type: 'email',
            required: true
        },
        {
            tag: 'textArea',
            label: 'Message',
            required: true
        },
    ];

    return (
        <>
            <BreadCrumbs/>
            <section className={styles.contact}>
                <div className={'container'}>
                    <HTag className={styles.contact__title} tag={'h1'}>
                        Add platform
                    </HTag>
                    <Form
                        defaultState={defaultState}
                        inputFields={inputFields}
                    />
                </div>
            </section>
        </>
    );
};

export default AddPlatform;
