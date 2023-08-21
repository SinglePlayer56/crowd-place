'use client';

import cn from "classnames";
import {HiddenDescriptionProps} from "@/components/HiddenDescription/HiddenDescription.props";
import styles from './HiddenDescription.module.css';
import {useState} from "react";
import {motion, AnimatePresence} from 'framer-motion';

const HiddenDescription = ({description, className}: HiddenDescriptionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={className}>
            <p className={styles.description__title}>Description</p>
            <AnimatePresence>
                <motion.p
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : '97px' }}
                    exit={{ height: '97px' }}
                    transition={{ duration: 0.3 }}
                    className={cn(styles.description__text,
                        {
                            [styles.hidden]: !isOpen
                        })}
                >
                    {description}
                </motion.p>
            </AnimatePresence>
            <span
                onClick={() => setIsOpen(true)}
                className={cn(styles.description__full, {
                    [styles.none]: isOpen
                })}
            >
                Read full
            </span>
        </div>
    );
};

export default HiddenDescription;
