import styles from './HeaderMainPage.module.css';
import Image from 'next/image';
import Link from "next/link";

const HeaderMainPage = () => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <div className={styles.searchBar}>
                        <button className={styles.searchButton}>
                            <Image
                                src={'/icons/search-white.svg'}
                                alt={'search button'}
                                width={21}
                                height={21}
                            />
                        </button>
                    </div>

                    <div className={styles.navMenu}>
                        <Link className={styles.header__link} href={'/platform'}>Platforms</Link>
                        <Link className={styles.header__link} href={'/blog'}>Blog</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderMainPage;
