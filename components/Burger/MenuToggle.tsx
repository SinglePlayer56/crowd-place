'use client';

import { motion } from "framer-motion";
import styles from './Burger.module.css';

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#00b4f4"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle }: {toggle: any}) => (
    <button className={styles.button} onClick={toggle}>
        <svg width="40" height="40" viewBox="0 0 32 20">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 30 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 30 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 30 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);
