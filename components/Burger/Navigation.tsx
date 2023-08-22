'use client';
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from './Burger.module.css'
import React from "react";
import {HeaderLink} from "@/types";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = ({isOpen}: any) => {
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

    return (
    <motion.ul className={styles.ul} variants={variants}>
        {headerLinkHref.map((link) => (
            <MenuItem
                key={link.href}
                link={link}
                isOpen={isOpen}
            />
        ))}
    </motion.ul>
)};

