'use client';

import {CrowdfundingCardProps} from "./CrowdfundingCard.props";
import styles from './CrowdfundingCard.module.css';
import Image from 'next/image';
import {useEffect, useState} from "react";
import cn from 'classnames';
import Link from 'next/link';

const CrowdfundingCard = ({title, iconPath, value, href}: CrowdfundingCardProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isVisible]);

    return (
        <div className={styles.card}>
            <div className={styles.card__container}>
                <Image
                    src={iconPath}
                    alt={'card icon'}
                    width={62}
                    height={62}
                />
                {value && Array.isArray(value) ?
                    <div className={styles.card__items}>
                        <span className={styles.card__text}>{value[0]}</span>
                        {value.length > 1 && <span className={styles.seeMore} onClick={() => setIsVisible(true)}>+see more</span>}
                    </div>
                    :
                    <span className={styles.card__text}>{value}</span>
                }
                {Array.isArray(value) && value.length > 1 &&
                    <div className={cn(styles.card__hiddenList, {
                        [styles.visibleList]: isVisible,
                        [styles.fadeOut]: !isVisible
                    })}>
                        {value.map((item, index) => index > 0 && (<span key={item} className={styles.card__hiddenList_text}>{value.length - 1 !== index ? `${item} | ` : item}</span>))}
                    </div>
                }
            </div>
            {href && <Link className={styles.card__link} href={href}></Link>}
            <h3 className={styles.card__title}>
                {title}
            </h3>
        </div>
    );
};

export default CrowdfundingCard;
