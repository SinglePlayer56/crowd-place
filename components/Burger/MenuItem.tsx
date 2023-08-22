'use client';
import {AnimatePresence, motion} from "framer-motion";
import styles from './Burger.module.css'
import Link from "next/link";
import cn from "classnames";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


export const MenuItem = ({ link, isOpen }: any) => {


    return (
        <AnimatePresence>
            <motion.li
                className={styles.li}
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(styles.header__link, {
                        [styles.notActive]: !isOpen
                    })}
                >
                    {link.name}
                </Link>
            </motion.li>
        </AnimatePresence>
    );
};
