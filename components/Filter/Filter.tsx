'use client';

import {motion} from 'framer-motion';

import {FilterProps} from "./Filter.props";
import styles from './Filter.module.css';
import cn from 'classnames';
import Image from 'next/image';
import {Checkbox} from "@/components";
import {memo, useEffect} from "react";
import {useClickOutside} from "react-click-outside-hook";

const Filter = memo(
    ({
         options,
         placeholder,
         clearFilters,
         acceptFilters,
         expanded,
         toggleCheckboxValue,
         type,
         setExpanded,
         index
     }: FilterProps) => {
        const isOpen = expanded === index;

        const [refElem, isClickedOutside] = useClickOutside();

        useEffect(() => {
            if (isOpen && isClickedOutside) {
                setExpanded(false);
            }
        }, [isOpen, isClickedOutside]);

        const acceptHandler = () => {
            acceptFilters(type);
            setExpanded(false);
        }

        return (
            <div ref={refElem} className={styles.filter}>
                <label
                    className={styles.filterActive}

                >
                    <span>{placeholder}</span>
                    <button
                        className={styles.filter__button}
                        onClick={() => setExpanded(isOpen ? false : index)}
                    >
                        <Image
                            src={'/icons/triangle-arrow.svg'}
                            alt={'toggle arrow'}
                            width={14}
                            height={7}
                            className={cn({
                                [styles.arrowUp]: isOpen,
                                [styles.arrowDown]: !isOpen
                            })}
                        />
                    </button>
                </label>
                <motion.div
                    initial={{height:0, opacity: 0}}
                    animate={isOpen ? {height: 'auto', opacity: 1} : {height: 0, opacity: 0}}
                    className={cn(styles.filterList, {
                        [styles.notActive]: !isOpen
                    })}
                >
                    <div className={styles.filterList__checkboxes}>
                        {
                            options.map((option) => (
                                <Checkbox
                                    toggleCheckboxValue={toggleCheckboxValue}
                                    type={type}
                                    key={option.title}
                                    value={option.title}
                                    title={option.title}
                                    checked={option.checked}
                                />
                            ))
                        }
                    </div>
                    <div className={styles.filterList__buttons}>
                        <button
                            className={cn(styles.filterList__button, styles.filterList__button_clear)}
                            onClick={() => clearFilters(type)}
                        >
                            Clear
                        </button>
                        <button
                            className={cn(styles.filterList__button, styles.filterList__button_add)}
                            onClick={acceptHandler}
                        >
                            Add
                        </button>
                    </div>
                </motion.div>
            </div>

        );
    }
)

export default Filter;

