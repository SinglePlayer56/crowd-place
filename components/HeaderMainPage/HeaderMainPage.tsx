import styles from './HeaderMainPage.module.css';
import Link from "next/link";
import {SearchBar} from "@/components";

const HeaderMainPage = () => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <SearchBar page={'Main'} className={styles.header__search}/>
                    <div className={styles.navMenu}>
                        <Link className={styles.header__link} href={'/platforms'}>Platforms</Link>
                        <Link className={styles.header__link} href={'/blog'}>Blog</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMainPage;
