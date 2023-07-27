'use client';

import {FilterProps} from "./Filter.props";
import styles from './Filter.module.css';
import {useState} from "react";
import cn from 'classnames';
import Image from 'next/image';

const Filter = ({options, placeholder}: FilterProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    }

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className={styles.filter} data-open={isOpen}>
            <label htmlFor="filter-toggle" className={styles.filterActive}>
                <span id={'filter-selected'}>{selectedOption !== '' ? selectedOption : placeholder}</span>
                <button
                    className={styles.filter__button}
                    onClick={handleToggle}
                >
                    <Image
                        src={'/icons/triangle-arrow.svg'}
                        alt={'toggle arrow'}
                        width={14}
                        height={7}
                    />
                </button>
            </label>
            <input
                className={styles.filterToggle}
                type="checkbox"
                name={'filter-toggle'}
                id={'filter-toggle'}
                aria-controls={'filter-list'}
                checked={isOpen}
            />
            <ul className={styles.filterList}>
                {options.map((option) => (
                    <li
                        key={option}
                        data-option={option}
                        className={cn({[styles.active]: selectedOption === option})}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
