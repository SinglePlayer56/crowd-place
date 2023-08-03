import {CustomListProps} from "./CustomList.props";
import {HTag} from "@/components";
import styles from './CustomList.module.css';
import cn from 'classnames';

const CustomList = ({title, as, children, className}: CustomListProps) => {

    switch (as) {
        case "ul":
            return (
                <div className={cn(styles.list__container, className)}>
                    {title &&
                        <HTag className={styles.list__title} tag={'h6'}>
                            {title}
                        </HTag>
                    }
                    <ul className={styles.ulList}>
                        {children}
                    </ul>
                </div>
            )
        case "ol":
            return (
                <div className={cn(styles.list__container, className)}>
                    {title &&
                        <HTag className={styles.list__title} tag={'h6'}>
                            {title}
                        </HTag>
                    }
                    <ol className={styles.olList}>
                        {children}
                    </ol>
                </div>
            )
    }
};

export default CustomList;
