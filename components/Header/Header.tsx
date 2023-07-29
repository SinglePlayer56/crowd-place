'use client';

import styles from './Header.module.css';
import Image from 'next/image';
import Link from "next/link";
import cn from 'classnames';
import {HeaderLink} from "@/types";
import {isActiveLink} from "@/helpers";
import {SearchButton} from "@/components";
import {useScrollPosition} from "@/hooks";

const Header = () => {
    const headerLinkHref: HeaderLink[] = [
        {
            name: 'Platforms',
            href: '/platforms',
        },
        {
            name: 'Blog',
            href: '/blog'
        },
        {
            name: 'Add platform',
            href: '/add-platform'
        }
    ];

    const scrollPosition = useScrollPosition();
    const buttonVariants = {
        hidden: {scale: 0},
        visible: {scale: 1},
        hover: {scale: 1.05}
    }

    return (
        <header className={styles.header}>
            <div className={'container'}>
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
                    <SearchButton
                        variants={buttonVariants}
                        initial={false}
                        animate={scrollPosition > 80 ? 'hidden' : 'visible'}
                        whileHover={'hover'}
                        className={styles.header__searchButton}
                        color={'blue'}
                    />
                    <div className={styles.header__nav}>
                        {headerLinkHref.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(styles.header__link, {
                                    [styles.active]: isActiveLink(link.href)
                                })}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
