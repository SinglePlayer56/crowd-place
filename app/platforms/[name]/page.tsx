import {Metadata} from "next";
import {BreadCrumbs, CrowdfundingCard, HTag, PlatformCard, PTag, ReviewCard, Tag} from "@/components";
import styles from './Platform.module.css';
import Image from 'next/image';
import {PlatformDataValue} from "@/consts";
import {CrowdfundingCardProps} from "@/components/CrowdfundingCard/CrowdfundingCard.props";
import cn from 'classnames';

type Props = {
    params: { name: string }
}

export function generateMetadata({params}: Props): Metadata {
    return {
        title: `${params.name} | | Crowd Place`,
        description: `${params.name} | | Crowd Place`
    }
}

interface PlatformProps {
    name: string;
    pathLogo: string;
    country?: string[];
    type?: string[];
    industry: string[];
    year?: string;
    license?: string;
    language?: string[];
    reviewLink?: string;
    website?: string;
    minimumInvestment?: string;
    advertisedReturn?: string;
    investors?: string;
    paymentOptions?: string[];
    totalFundingVolume?: string;
    averageLoanDuration?: string;
    description: string;
    regulated?: boolean;
    buyBack?: boolean;
    publicStatistics?: boolean;
    signupBonus?: boolean;
    secondaryMarket?: boolean;
    autoInvest?: boolean;
    whoCanInvest?: string;
    slug?: string;
}

const Platform = ({params}: Props) => {
    const {
        whoCanInvest,
        autoInvest,
        advertisedReturn,
        buyBack,
        averageLoanDuration,
        type,
        year,
        description,
        industry,
        language,
        license,
        minimumInvestment,
        name,
        paymentOptions,
        publicStatistics,
        regulated,
        secondaryMarket,
        reviewLink,
        totalFundingVolume,
        website,
        signupBonus,
        investors,
        slug,
        pathLogo,
        country
    } = PlatformDataValue.find((item) => item.name === params.name) as PlatformProps;

    const overviewData: CrowdfundingCardProps[] = [
        {
            title: 'Minimum Investment',
            iconPath: '/icons/hand-coin.svg',
            value: minimumInvestment
        },
        {
            title: 'Advertised return',
            iconPath: '/icons/graphic.svg',
            value: advertisedReturn
        },
        {
            title: 'Year founded',
            iconPath: '/icons/calendar.svg',
            value: year
        },
        {
            title: 'Languages',
            iconPath: '/icons/earth.svg',
            value: language
        },
        {
            title: 'License Number',
            iconPath: '/icons/frame.svg',
            value: license
        }
    ];

    const checkListData = [
        {
            title: 'Regulated',
            value: regulated,
        },
        {
            title: 'Buyback guarantee',
            value: buyBack,
        },
        {
            title: 'Public statistics',
            value: publicStatistics,
        },
        {
            title: 'Signup bonus',
            value: signupBonus,
        },
        {
            title: 'Secondary market',
            value: secondaryMarket,
        },
        {
            title: 'Auto-invest',
            value: autoInvest
        }
    ]

    const relatedPlatforms = PlatformDataValue
        .filter((item) => item.name !== name)
        .slice(0, 4);


    return (
        <>
            <section className={styles.head}>
                <div className={'container'}>
                    <BreadCrumbs/>
                    <HTag className={styles.head__title} tag={'h1'}>
                        {name}
                    </HTag>
                    <div className={styles.head__content}>
                        <Image
                            src={pathLogo}
                            alt={'platform logo'}
                            width={80}
                            height={80}
                            className={styles.head__logo}
                        />
                        <div className={styles.head__description}>
                            <p className={styles.description__title}>Description</p>
                            <PTag
                                className={cn(styles.description__text,
                                    {
                                        [styles.decription__fullText]: ''
                                    })}
                                fontSize={'20px'}>
                                {description}
                                <span className={styles.description__full}>Read full</span>
                            </PTag>
                        </div>
                        <div className={styles.head__tags}>
                            {industry?.map((tagName) => <Tag title={tagName}/>)}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.overview}>
                <div className={'container'}>
                    <HTag className={styles.overview__title} tag={'h2'}>
                        Overview
                    </HTag>
                    <div className={styles.overview__content}>
                        <div className={styles.overview__list}>
                            {overviewData.map((card) => (
                                <CrowdfundingCard
                                    iconPath={card.iconPath}
                                    title={card.title}
                                    value={card.value}
                                />
                            ))}
                        </div>
                        <div className={styles.overview__checkList}>
                            {checkListData.map((item) => (
                                <div className={styles.checkList__item}>
                                    <Image
                                        src={item.value ? '/icons/yes.svg' : '/icons/no.svg'}
                                        alt={'checkbox'}
                                        width={20}
                                        height={20}
                                        className={styles.chekList__image}
                                    />
                                    <p className={styles.checkList__text}>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.whoCan}>
                <div className={'container'}>
                    <HTag className={styles.whoCan__title} tag={'h2'}>
                        Who can invest
                    </HTag>
                    <PTag className={styles.whoCan__text} fontSize={'20px'}>
                        Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s
                        becoming increasingly widespread for investors to be interested not only in the possible returns
                        but the collateral social or environmental impact. In other words people want their investment
                        choices to be aligned with their values.
                    </PTag>
                </div>
            </section>
            <section className={styles.review}>
                <div className={'container'}>
                    <HTag className={styles.review__title} tag={'h2'}>
                        Reviews
                    </HTag>
                    <div className={styles.review__list}>
                        {reviewLink &&
                            <ReviewCard
                                title={'Trustpilot'}
                                href={reviewLink}
                                pathImg={'/icons/trustpilot-icon.svg'}
                            />
                        }
                        {website &&
                            <ReviewCard
                                title={name}
                                pathImg={pathLogo}
                                href={website}
                            />
                        }
                    </div>
                </div>
            </section>
            <section className={styles.relatedPlatforms}>
                <div className={'container'}>
                    <div className={styles.reviews__list}>
                        {relatedPlatforms.map((platform) => (
                            <PlatformCard
                                key={platform.name}
                                pathLogo={platform.pathLogo}
                                title={platform.name}
                                countries={platform.country}
                                description={platform.description}
                                href={`/platforms/${platform.name}`}
                                type={platform.type}
                                industry={platform.industry}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Platform;
