'use client';

import styles from './Up.module.css';
import {useAnimation} from "framer-motion";
import {motion} from 'framer-motion';
import {useEffect} from "react";
import {useScrollY} from "@/hooks/scrollY";
import Image from 'next/image';
const Up = () : JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({opacity: y / 500});
    }, [y, controls]);

    const scrollToTop = () => {
        if ("scrollBehavior" in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            const scrollStep = -window.scrollY / (500 / 15);
            const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
        }
    };

    return (
        <motion.div
            className={styles.up}
            animate={controls}
            initial={{opacity: 0}}
        >
            <button onClick={scrollToTop} className={styles.button}>
                <Image
                    className={styles.icon}
                    width={24}
                    height={24}
                    src={'/icons/angle.svg'}
                    alt={'up-icon'}
                />
            </button>
        </motion.div>
    );
};

export default Up;

