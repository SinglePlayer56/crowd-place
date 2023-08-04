import {CrowdfundingCardProps} from "./CrowdfundingCard.props";
import styles from './CrowdfundingCard.module.css';
import Image from 'next/image';

const CrowdfundingCard = ({title, iconPath, value}: CrowdfundingCardProps) => {

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
                    value.map((item) => (<span className={styles.card__text}>{item}</span>)):
                    <span className={styles.card__text}>{value}</span>
                }
            </div>
            <h3 className={styles.card__title}>
                {title}
            </h3>
        </div>
    );
};

export default CrowdfundingCard;
