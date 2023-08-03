import {PlatformCardProps} from "./PlatformCard.props";
import styles from './PlatformCard.module.css';
import Image from 'next/image';
import {CustomButton, HTag, PlatformCardTags, PTag} from "@/components";
import Link from "next/link";

const PlatformCard = ({pathLogo, title, countries, description, industry, type, href}: PlatformCardProps) => {

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
            <div className={styles.card__tags}>
                <PlatformCardTags tags={industry!} title={'Industry'} />
                <PlatformCardTags tags={type!} title={'Type'} />
            </div>
            <Link href={href}>
                <CustomButton className={styles.card__button} text={'View profile'} color={'white'}/>
            </Link>
        </div>
    );
};

export default PlatformCard;
