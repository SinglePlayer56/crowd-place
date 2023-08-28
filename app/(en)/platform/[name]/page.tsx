import {Metadata} from "next";
import {
    BreadCrumbs,
    CrowdfundingCard,
    HiddenDescription,
    HTag, PlatformCardTags,
    PTag,
    RelatedSwiperPlatform,
    ReviewCard
} from "@/components";
import styles from './Platform.module.css';
import Image from 'next/image';
import {CrowdfundingCardProps} from "@/components/CrowdfundingCard/CrowdfundingCard.props";
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
            canonical: `${process.env.DOMAIN}/platform/${params.name}/`
        }
    }
}

export const dynamic = 'force-static';


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
        slug,
        whoCanInvest
    }: IPlatform = await getPlatform(params.name);

    const relatedPlatforms: IPlatform[] = await getRelatedPlatform(industry[0], params.name);


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
    ];

    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Platforms', href: 'platforms'},
        {name: name, href: slug},
    ];

    return (
        <>
            <section className={styles.head}>
                <div className={'container'}>
                    <BreadCrumbs paramsPath={paramsBreadCrumbs}/>

                    <div className={styles.head__content}>
                        <Image
                            src={logo}
                            alt={'platform logo'}
                            width={80}
                            height={80}
                            className={styles.head__logo}
                        />
                        <HTag className={styles.head__title} tag={'h1'}>
                            {name}
                        </HTag>
                        <HiddenDescription
                            className={styles.head__description}
                            description={description}
                        />
                        <PlatformCardTags className={styles.head__tags} tags={industry}/>
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
                                    value={card.value ? card.value : 'N/A'}
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
            {whoCanInvest &&
                <section className={styles.whoCan}>
                    <div className={'container'}>
                        <HTag className={styles.whoCan__title} tag={'h2'}>
                            Who can invest
                        </HTag>
                        <PTag className={styles.whoCan__text} fontSize={'20px'}>
                            {whoCanInvest}
                        </PTag>
                    </div>
                </section>
            }
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
                        <RelatedSwiperPlatform platforms={relatedPlatforms}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Platform;

export async function generateStaticParams() {
    const response = await fetch(`${process.env.SERVER}/api/get-all-platforms`);

    const platforms: IPlatform[] = await response.json();

    return platforms.map((platform) => ({
        name: platform.slug,
    }))
}

async function getPlatform(name: string): Promise<IPlatform> {
    const response = await fetch(`${process.env.SERVER}/api/get-platform/${name}`,
        {
            method: 'GET',

        })


    return await response.json() as Promise<IPlatform>;
}

async function getRelatedPlatform(industry: string, name?: string): Promise<IPlatform[]> {
    const response = await fetch(`${process.env.SERVER}/api/get-related/${industry}/?name=${name}`, {
        method: 'GET',

    });

    return await response.json() as Promise<IPlatform[]>;
}
