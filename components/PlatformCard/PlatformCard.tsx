import {PlatformCardProps} from "./PlatformCard.props";
import styles from './PlatformCard.module.css';
import Image from 'next/image';
import {CustomButton, HTag, PlatformCardCountryList, PlatformCardTags, PTag} from "@/components";
import Link from "next/link";
import {memo} from "react";

const PlatformCard = memo(({pathLogo, title, countries, description, industry, type, href}: PlatformCardProps) => {

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
                    <PlatformCardCountryList
                        countries={countries}
                        className={styles.card__countryList}
                    />
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
});

export default PlatformCard;
