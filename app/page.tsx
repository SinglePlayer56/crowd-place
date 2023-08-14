import styles from './MainPage.module.css';
import {
    BlogCard,
    CountryList,
    CrowdfundingCard,
    CustomButton,
    HTag, MainPageLayout,
    PTag,
    SelectFilters
} from "@/components";
import Image from 'next/image';
import {BlogCardsValues, CrowdfundingCardValues} from "@/consts";
import Link from "next/link";

const Main = () => {

    return (
        <MainPageLayout>
            <section className={styles.start}>
                <div className={'container'}>
                    <div className={styles.start__wrapper}>
                        <div className={styles.start__left}>
                            <Image
                                src={'/icons/logo.svg'}
                                alt={'logo'}
                                width={231}
                                height={30}
                                className={styles.start__logo}
                            />
                            <div className={styles.start__content}>
                                <HTag className={styles.start__title} tag={'h1'}>
                                    Crowdfunding platform aggregator. Explore and find the best match for you.
                                </HTag>
                                <PTag className={styles.start__text} fontSize={'20px'}>
                                    Search the best crowdfunding platform aggregator to discover alternative
                                    investment
                                    opportunities or get your crowdfunding platform listed to get discovered.
                                </PTag>
                                <Link href={'/add-platform'}>
                                    <CustomButton
                                        text={'Add platform'}
                                        color={'white'}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={styles.start__imageSection}>
                            <Image
                                className={styles.start__image}
                                src={'/img/main_page_image_retina.png'}
                                alt={'start image'}
                                width={501}
                                height={501}
                            />
                        </div>
                        <SelectFilters className={styles.start__filters}/>
                    </div>
                </div>
            </section>
            <section className={styles.crowdfundingCards}>
                <div className={'container'}>
                    <div className={styles.crowdfundingCards__wrapper}>
                        {CrowdfundingCardValues.map((valueCard) => (
                            <CrowdfundingCard
                                key={valueCard.title}
                                iconPath={valueCard.iconPath}
                                title={valueCard.title}
                            />))}
                    </div>
                </div>
            </section>
            <CountryList/>
            <section className={styles.latestBlog}>
                <div className={'container'}>
                    <HTag className={styles.latestBlog__title} tag={'h2'}>
                        Latest from blog
                    </HTag>
                    <div className={styles.latestBlog__list}>
                        {BlogCardsValues.map((cardValue) => (
                            <BlogCard
                                key={cardValue.title}
                                pathImage={cardValue.pathImage}
                                title={cardValue.title}
                                text={cardValue.text}
                                tag={cardValue.tag}
                                date={cardValue.date}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </MainPageLayout>
    );
};

export default Main;


