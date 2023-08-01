import {ReviewCardProps} from "./ReviewCard.props";
import styles from './ReviewCard.module.css';
import Image from 'next/image';
import {CustomButton, HTag, PTag} from "@/components";
import Link from "next/link";

const ReviewCard = ({pathLogo, title, countries, description, industry, type, href}: ReviewCardProps) => {

    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <Image
                    className={styles.card__image}
                    src={pathLogo}
                    alt={'logo platform'}
                    width={56}
                    height={56}
                />
                <div className={styles.card__title}>
                    <HTag tag={'h4'}>
                        {title}
                    </HTag>
                    <p className={styles.card__countryList}>
                        {countries.map((country, index) => {
                            const lastIndex = countries.length - 1;
                            return (
                                <span className={styles.card__country} key={country}>
                                    {index === lastIndex ? country.trim() : `${country.trim()}, `}
                                </span>
                            )
                        })}
                    </p>
                </div>
            </div>
            <PTag fontSize={'17px'} className={styles.card__description}>
                {description}
            </PTag>
            <Link href={href}>
                <CustomButton className={styles.card__button} text={'View profile'} color={'white'}/>
            </Link>
        </div>
    );
};

export default ReviewCard;
