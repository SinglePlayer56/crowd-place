import styles from './CountryList.module.css';
import {CustomButton, HTag} from "@/components";
import {CountryListValue} from "@/consts";
import Image from 'next/image';

const CountryList = () => {

    return (
        <section className={styles.countryList}>
            <div className={'container'}>
                <HTag className={styles.countryList__title} tag={'h2'}>
                    Crowdfunding platforms by country
                </HTag>
                <div className={styles.countryList__list}>
                    {CountryListValue.map((countryValue) => (
                        <div key={countryValue.country} className={styles.countryList__item}>
                            <Image
                                src={countryValue.pathFlag}
                                alt={'lag icon'}
                                width={26}
                                height={21}
                                className={styles.countryList__flag}
                            />
                            <span className={styles.countryList__name}>{countryValue.country}</span>
                        </div>
                    ))}
                </div>
                <CustomButton color={'white'} text={'See all'} />
            </div>
        </section>
    );
};

export default CountryList;
