import {BreadCrumbs, ContactForm, HTag} from "@/components";
import styles from './addPlatform.module.css';

const AddPlatform = () => {

    return (
        <>
            <BreadCrumbs/>
            <section className={styles.contact}>
                <div className={'container'}>
                    <HTag className={styles.contact__title} tag={'h1'}>
                        Add platform
                    </HTag>
                    <ContactForm/>
                </div>
            </section>
        </>
    );
};

export default AddPlatform;
