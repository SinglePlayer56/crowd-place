import {BreadCrumbs, HTag, ListingPlatforms, PTag, SelectFilters} from "@/components";
import {FilterPageParams, IPlatform} from "@/types";
import {getMetadataValues, getType} from "@/helpers";
import {Metadata} from "next";
import styles from '../platforms.module.css';
import {redirect} from "next/navigation";

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    return getMetadataValues(params);
}

interface PageProps {
    searchParams: {
        page: string
    },
    params: FilterPageParams
}


const Platforms = async ({searchParams, params}: PageProps) => {
    const perPage = 12;
    let currentPage = 1;

    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Platforms', href: 'platforms'}
    ];

    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }

    const {count: totalCount, rows: platforms}: { count: number, rows: IPlatform[] } = await getType(params, currentPage, perPage);

    const paramsPath = Object.values(params).map((value) => decodeURIComponent(value)).join('/');

    if (searchParams.page === '1') {
        redirect(`/platforms/${paramsPath}/`)
    }

    return (
        <>
            <> </>
            <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
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
                        className={styles.start__filters}
                        resetButton
                    />
                </div>
            </section>
            <ListingPlatforms
                title={'Reviews'}
                type={'main'}
                platforms={platforms}
                page={currentPage}
                totalCount={totalCount}
                perPage={perPage}
            />
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
        </>
    );
};

export default Platforms;
