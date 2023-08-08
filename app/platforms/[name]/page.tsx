import {Metadata} from "next";
import {BreadCrumbs, CrowdfundingCard, HTag, PlatformCard, PTag, ReviewCard, Tag} from "@/components";
import styles from './Platform.module.css';
import Image from 'next/image';
import {PlatformDataValue} from "@/consts";
import {CrowdfundingCardProps} from "@/components/CrowdfundingCard/CrowdfundingCard.props";
import cn from 'classnames';
import {IPlatform} from "@/types";

type Props = {
    params: { name: string, slug: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {

    const data: IPlatform = await getPlatform(params.name);


    return {
        title: `${data.name} | Crowd Place`,
        description: `${data.description}`,
        alternates: {
            canonical: `${process.env.DOMAIN}/platforms/${params.name}/`
        }
    }
}


const Platform = async ({params}: Props) => {

    const {
        autoInvest,
        advertisedReturn,
        buybackGuarantee,
        yearFounded,
        description,
        industry,
        languages,
        licenseNumber,
        minimumInvestment,
        name,
        publicStatistics,
        regulated,
        secondaryMarket,
        reviews,
        website,
        signupBonus,
        logo,
    }: IPlatform = await getPlatform(params.name);

    const relatedPlatforms: IPlatform[] | IPlatform = await getRelatedPlatform(industry[0], params.name);


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
            value: yearFounded
        },
        {
            title: 'Languages',
            iconPath: '/icons/earth.svg',
            value: languages
        },
        {
            title: 'License Number',
            iconPath: '/icons/frame.svg',
            value: licenseNumber
        }
    ];

    const checkListData = [
        {
            title: 'Regulated',
            value: regulated,
        },
        {
            title: 'Buyback guarantee',
            value: buybackGuarantee,
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
            value: autoInvest ? autoInvest : ''
        }
    ]

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
                            src={logo}
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
                            {industry?.map((tagName) => <Tag key={tagName} title={tagName}/>)}
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
                                    key={card.title}
                                    iconPath={card.iconPath}
                                    title={card.title}
                                    value={card.value}
                                />
                            ))}
                        </div>
                        <div className={styles.overview__checkList}>
                            {checkListData.map((item) => (
                                <div key={item.title} className={styles.checkList__item}>
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
                        {reviews &&
                            <ReviewCard
                                title={'Trustpilot'}
                                href={reviews}
                                pathImg={'/icons/trustpilot-icon.svg'}
                            />
                        }
                        {website &&
                            <ReviewCard
                                title={name}
                                pathImg={logo}
                                href={website}
                            />
                        }
                    </div>
                </div>
            </section>
            <section className={styles.relatedPlatforms}>
                <div className={'container'}>
                    <div className={styles.reviews__list}>
                        {Array.isArray(relatedPlatforms) ? relatedPlatforms.map((platform: IPlatform) => (
                            <PlatformCard
                                key={platform.name}
                                pathLogo={platform.logo}
                                title={platform.name}
                                countries={platform.country}
                                description={platform.description}
                                href={`/platforms/${platform.slug}`}
                                type={platform.investmentType}
                                industry={platform.industry}
                            />
                        ))
                        :
                            <PlatformCard
                                key={relatedPlatforms.name}
                                pathLogo={relatedPlatforms.logo}
                                title={relatedPlatforms.name}
                                countries={relatedPlatforms.country}
                                description={relatedPlatforms.description}
                                href={`/platforms/${relatedPlatforms.slug}`}
                                type={relatedPlatforms.investmentType}
                                industry={relatedPlatforms.industry}
                            />
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Platform;

export async function generateStaticParams() {
    const response = await fetch(`${process.env.DOMAIN}/api/add-platform`);

    const platforms: IPlatform[] = await response.json();

    return platforms.map((platform) => ({
        slug: platform.slug,
    }))
}

async function getPlatform(slug: string): Promise<IPlatform> {
    const response = await fetch(`${process.env.DOMAIN}/api/add-platform/${slug}`,
        {
            method: 'GET'
        })

    const platform: Promise<IPlatform> = response.json();

    return platform;
}

async function getRelatedPlatform(industry: string, name?: string): Promise<IPlatform[] | IPlatform> {
    const response = await fetch(`${process.env.DOMAIN}/api/get-related/${industry}/?name=${name}`, {
        method: 'GET'
    });

    const platforms: Promise<IPlatform[] | IPlatform> = response.json();

    return platforms;
}
