import styles from './platforms.module.css'
import {BreadCrumbs, CustomButton, HTag, PlatformCard, PTag, SelectFilters} from "@/components";
import {IPlatform} from "@/types";
import Pagination from "@/components/Pagination/Pagination";
import {notFound, redirect} from "next/navigation";
import {convertToObjectValue, extractValuesByKeyArray, generateQueryParams, searchTypeFilter} from "@/helpers";
import {Metadata} from "next";

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    const paramsValueFirst = decodeURIComponent(params.investmentType).split('+');
    const paramsValueSecond = decodeURIComponent(params.industry).split('+');
    const paramsValueThird = decodeURIComponent(params.country).split('+');
    const paramsValueFour = decodeURIComponent(params.yearFounded).split('+');
    const investObjFirst = convertToObjectValue(paramsValueFirst);
    const investObjSecond = convertToObjectValue(paramsValueSecond);
    const investObjThird = convertToObjectValue(paramsValueThird);
    const investObjFour = convertToObjectValue(paramsValueFour);
    const valueSecondFirst = Object.values(investObjFirst!).sort().join(' ');
    const valueSecondSecond = Object.values(investObjSecond!).sort().join(' ');
    const valueSecondThird = Object.values(investObjThird!).sort().join(' ');
    const valueSecondFour = Object.values(investObjFour!).sort().join(' ');

    const allValue = `${valueSecondFirst} + ${valueSecondSecond} + ${valueSecondThird} + ${valueSecondFour}`

    return {
        title: `${allValue} | Crowd Place`,
        description: `${allValue} | Crowd Place`,
        alternates: {
            canonical: `${process.env.DOMAIN}/platform/${params.investmentType}/${params.industry}/`
        }
    }
}

async function getType(params: PageParams, page: number, perPage: number) {
    const paramsValueFirst = decodeURIComponent(params.investmentType).split('+');
    const paramsValueSecond = decodeURIComponent(params.industry).split('+');
    const paramsValueThird = decodeURIComponent(params.country).split('+');
    const paramsValueFour = decodeURIComponent(params.yearFounded).split('+');

    const investObjFirst = convertToObjectValue(paramsValueFirst);
    const investObjSecond = convertToObjectValue(paramsValueSecond);
    const investObjThird = convertToObjectValue(paramsValueThird);
    const investObjFour = convertToObjectValue(paramsValueFour);

    const filterFirst = searchTypeFilter(paramsValueFirst);
    const filterSecond = searchTypeFilter(paramsValueSecond);
    const filterThird = searchTypeFilter(paramsValueThird);
    const filterFour = searchTypeFilter(paramsValueFour);
    const allFilters = `${filterFirst}-${filterSecond}-${filterThird}-${filterFour}`;

    if (investObjFirst && investObjSecond && investObjThird && investObjFour) {
        const firstQueryParams = generateQueryParams(investObjFirst);
        const secondQueryParams = generateQueryParams(investObjSecond)
        const thirdQueryParams = generateQueryParams(investObjThird)
        const fourQueryParams = generateQueryParams(investObjFour)

        const queryParams = `${firstQueryParams}&and&${secondQueryParams}&and&${thirdQueryParams}&and&${fourQueryParams}`;

        const res = await fetch(`${process.env.DOMAIN}/api/get-type/investment/?${queryParams}&page=${page}&perPage=${perPage}&typeFilter=${allFilters}`);

        return await res.json();
    }
}

interface PageProps {
    searchParams: {
        page: string
    },
    params: PageParams
}

interface PageParams {
    country: string;
    industry: string;
    investmentType: string;
    yearFounded: string;
}


const Platforms = async ({searchParams, params}: PageProps) => {
    // if (!yearFoundedCombinationPaths.includes(params.yearFounded)) notFound();
    // if (!licenseNumberCombinationPaths.includes(params.yearFounded)) notFound();

    const perPage = 12;
    let currentPage = 1;

    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }

    if (searchParams.page === '1') {
        redirect(`/platforms/${params.investmentType}/${params.industry}/${params.country}/${params.yearFounded}/`)
    }

    const {platformsData, serverState} = await getType(params, currentPage, perPage);
    const {count: totalCount, rows: platforms}: { count: number, rows: IPlatform[] } = platformsData;


    return (
        <>
            <> </>
            <BreadCrumbs/>
            <section className={styles.head}>
                <div className={'container'}>
                    <HTag className={styles.head__title} tag={'h1'}>
                        Environmental impact H1
                    </HTag>
                    <PTag className={styles.head__text} fontSize={'20px'}>
                        Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s
                        becoming
                        increasingly widespread for investors to be interested not only in the possible returns but the
                        collateral social or environmental impact. In other words people want their investment choices
                        to be
                        aligned with their values. There are many real estate crowdfunding platforms in Europe which you
                        can
                        explore and start investing in property. However, do your own due dilligence when it comes to
                        property investing. Investors register on crowdfunding websites and choose a project or a
                        campaign
                        to invest in. Depending on the platform’s business model, if it’s equity, P2P, or even
                        donation-based crowdfunding, investors receive either some regular returns or partial ownership
                        of the companies.
                    </PTag>
                    <SelectFilters
                        serverState={serverState}
                        className={styles.start__filters}
                        resetButton
                    />
                </div>
            </section>
            <section className={styles.reviews}>
                <div className={'container'}>
                    <HTag className={styles.reviews__title} tag={'h2'}>
                        Reviews
                    </HTag>
                    <div>
                        {params.yearFounded}
                    </div>
                    <div className={styles.reviews__list}>
                        {platforms.map((platform) => (
                            <PlatformCard
                                key={platform.name}
                                pathLogo={platform.logo}
                                title={platform.name}
                                countries={platform.country}
                                description={platform.description}
                                type={platform.investmentType}
                                industry={platform.industry}
                                href={`/platforms/${platform.name.split(' ').join('').toLowerCase()}`}/>
                        ))}
                    </div>
                    <Pagination
                        itemCount={totalCount}
                        page={currentPage}
                        perPage={perPage}
                    />
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
                        choices to be aligned with their values. CrowdPlace is probably one of the best crowdfunding
                        aggregators in Europe.
                    </PTag>
                </div>
            </section>
            <section className={styles.links}>
                <div className={'container'}>
                    <HTag className={styles.links__title} tag={'h2'}>
                        Links
                    </HTag>
                    <div className={styles.links__list}>

                    </div>
                    <CustomButton className={styles.links__button} text={'See all'} color={'transparent'}/>
                </div>
            </section>
        </>
    );
};

export default Platforms;
