import {CrowdfundingCardProps} from "./CrowdfundingCard.props";
import styles from './CrowdfundingCard.module.css';
import Image from 'next/image';

const CrowdfundingCard = ({title, iconPath}: CrowdfundingCardProps) => {

  return (
    <div className={styles.card}>
        <Image
            src={iconPath}
            alt={'card icon'}
            width={62}
            height={62}
            className={styles.card__icon}
        />
        <h3 className={styles.card__title}>
            {title}
        </h3>
    </div>
  );
};

export default CrowdfundingCard;
