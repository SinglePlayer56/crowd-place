'use client';

import styles from './Header.module.css';
import Image from 'next/image';
import Link from "next/link";
import cn from 'classnames';
import {HeaderLink} from "@/types";
import {isActiveLink} from "@/helpers";

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
    ]

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
