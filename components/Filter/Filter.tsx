import {FilterProps} from "./Filter.props";
import styles from './Filter.module.css';
import cn from 'classnames';
import Image from 'next/image';
import {Checkbox} from "@/components";
import {memo} from "react";

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

        const acceptHandler = () => {
            acceptFilters(type);
            setExpanded(false);
        }

        return (
            <div className={styles.filter}>
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
                <div className={cn(styles.filterList,
                    {
                        [styles.active]: isOpen
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
                </div>
            </div>

        );
    }
)

export default Filter;

