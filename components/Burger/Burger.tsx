'use client';

import {useEffect} from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styles from './Burger.module.css';
import cn from 'classnames';
import {useClickOutside} from 'react-click-outside-hook';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 270px 30px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 270px 30px)",
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Burger = ({className}: any) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [refElem, isClickedOutside] = useClickOutside();

    useEffect(() => {

        if (isOpen && isClickedOutside) {
            toggleOpen();
        }

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.removeAttribute('style');
        }

    }, [isOpen, isClickedOutside]);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            // custom={height}
            // ref={containerRef}
            ref={refElem}
            className={cn(styles.nav, className, {
                [styles.notActive]: !isOpen
            })}
        >
            <motion.div ref={refElem} className={cn(styles.background, {
                [styles.notActive]: !isOpen
            })} variants={sidebar} />
            <Navigation isOpen={isOpen} />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};

export default Burger;
