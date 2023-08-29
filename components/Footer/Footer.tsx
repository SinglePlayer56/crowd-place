import styles from './Footer.module.css';
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={'container'}>
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

                    {/*<div className={styles.footer__socials}>*/}
                    {/*    <Link href={'#'}>*/}
                    {/*        <SocialIcon iconPath={'/icons/instagram.svg'} />*/}
                    {/*    </Link>*/}
                    {/*    <Link href={'#'}>*/}
                    {/*        <SocialIcon iconPath={'/icons/linkedin.svg'} />*/}
                    {/*    </Link>*/}
                    {/*    <span className={styles.footer__link}>English version</span>*/}
                    {/*</div>*/}

                    <div className={styles.footer__nav}>
                        <Link className={styles.footer__link} href={'/contacts/'}>Contacts</Link>
                        <Link className={styles.footer__link} href={'/about-us/'}>About Us</Link>
                        <Link className={styles.footer__link} href={'/blog/'}>Blog</Link>
                        <Link className={styles.footer__link} href={'/platforms/'}>Platform</Link>
                        <Link className={styles.footer__link} href={'/privacy/'}>Privacy</Link>
                        <Link className={styles.footer__link} href={'/terms/'}>Terms</Link>
                        <Link className={styles.footer__link} href={'/cookies/'}>Cookies</Link>
                    </div>
                </div>

                <div className={styles.footer__dash}/>

                <p className={styles.footer__copyright}>© CrowdPlace {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
