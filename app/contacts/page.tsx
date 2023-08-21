import {BreadCrumbs, Form, HTag} from "@/components";
import styles from './Contacts.module.css';
import {ContactsFormData, FormField} from "@/types";

const Contacts = () => {
    const defaultState: ContactsFormData = {
        'Name': '',
        'E-mail': '',
        'Message': ''
    }

    const inputFields: FormField<ContactsFormData>[] = [
        {
            tag: 'input',
            label: 'Name',
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

    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Contacts', href: 'contacts'},
    ];

    return (
        <>
            <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
            <section className={styles.contact}>
                <div className={'container'}>
                    <HTag className={styles.contact__title} tag={'h1'}>
                        Contacts
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

export default Contacts;
