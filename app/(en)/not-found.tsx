import './globalNotFound.css';
import styles from './not-found.module.css';
import Link from "next/link";
import Image from "next/image";
import React from "react";

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header__content}>
                        <Link href={'/'}>
                            <Image
                                src={'/icons/logo.svg'}
                                alt={'logo'}
                                width={181}
                                height={24}
                                className={styles.header__logo}
                            />
                        </Link>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <p className={styles.text__error}>404 | Not found</p>
            </main>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footer__content}>
                        <Link href={'/'}>
                            <Image
                                src={'/icons/logo.svg'}
                                alt={'logo'}
                                width={162}
                                height={21}
                                className={styles.footer__logo}
                            />
                        </Link>
                        <div className={styles.footer__nav}>
                            <Link className={styles.footer__link} href={'/contacts/'}>Contacts</Link>
                            <Link className={styles.footer__link} href={'/about-us/'}>About Us</Link>
                            <Link className={styles.footer__link} href={'/blog/'}>Blog</Link>
                            <Link className={styles.footer__link} href={'/platforms/'}>Platforms</Link>
                            <Link className={styles.footer__link} href={'/privacy/'}>Privacy</Link>
                            <Link className={styles.footer__link} href={'/terms/'}>Terms</Link>
                            <Link className={styles.footer__link} href={'/cookies/'}>Cookies</Link>
                        </div>
                    </div>

                    <div className={styles.footer__dash}/>

                    <p className={styles.footer__copyright}>© CrowdPlace {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
};

export default NotFound;
