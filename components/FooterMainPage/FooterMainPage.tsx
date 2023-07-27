import styles from './FooterMainPage.module.css';
import Image from 'next/image';
import {SocialIcon} from "@/components";
import Link from "next/link";

const FooterMainPage = () => {

    return (
        <footer className={styles.footer}>
            <div className={'container'}>
                <div className={styles.footer__content}>
                    <Image
                        src={'/icons/logo.svg'}
                        alt={'logo'}
                        width={162}
                        height={21}
                    />

                    <div className={styles.footer__socials}>
                        <Link href={'#'}>
                            <SocialIcon iconPath={'/icons/instagram.svg'} />
                        </Link>
                        <Link href={'#'}>
                            <SocialIcon iconPath={'/icons/linkedin.svg'} />
                        </Link>
                        <span className={styles.footer__link}>English version</span>
                    </div>

                    <div className={styles.footer__nav}>
                        <Link className={styles.footer__link} href={'/contact'}>Contact</Link>
                        <Link className={styles.footer__link} href={'/about-us'}>About Us</Link>
                        <Link className={styles.footer__link} href={'/blog'}>Blog</Link>
                        <Link className={styles.footer__link} href={'/platforms'}>Platform</Link>
                        <Link className={styles.footer__link} href={'/privacy'}>Privacy</Link>
                        <Link className={styles.footer__link} href={'/terms'}>Terms</Link>
                        <Link className={styles.footer__link} href={'/cookies'}>Cookies</Link>
                    </div>
                </div>

                <div className={styles.footer__dash}/>

                <p className={styles.footer__copyright}>© CrowdPlace {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default FooterMainPage;