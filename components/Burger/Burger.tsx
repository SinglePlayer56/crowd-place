'use client';

import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import {useDimensions} from "@/components/Burger/use-dimension";
import styles from './Burger.module.css';
import cn from 'classnames';

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
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className={cn(styles.nav, className)}
        >
            <motion.div className={styles.background} variants={sidebar} />
            <Navigation isOpen={isOpen} />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};

export default Burger;
