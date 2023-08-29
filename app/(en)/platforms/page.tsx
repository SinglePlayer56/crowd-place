import styles from './platforms.module.css'
import {
    BreadCrumbs,
    ListingPlatforms,
    PlatformsListingLinks,
    SelectFilters
} from "@/components";
import {FilterPageParams, IPlatform, SearchParams} from "@/types";
import {getType} from "@/helpers";
import {redirect} from "next/navigation";
import {Metadata} from "next";

export async function generateMetadata({searchParams}: {searchParams: {page: string}}): Promise<Metadata> {
    const currentPage = searchParams.page ? `- page ${searchParams.page}` : '';
    const canonicalSearchParams = `${process.env.DOMAIN}/platforms/?page=${searchParams.page}`

    return {
        title: `Best Crowdfunding ${currentPage} | Crowd Place`,
        description: `Best Crowdfunding ${currentPage} | Crowd Place`,
        alternates: {
            canonical: !searchParams.page ? `${process.env.DOMAIN}/platforms/` : canonicalSearchParams
        }
    };
}

export const dynamic = "force-dynamic";

const Platforms = async ({searchParams, params}: SearchParams<FilterPageParams>) => {
    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Platforms', href: 'platforms'}
    ];

    const perPage = 12;
    let currentPage = 1;

    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }

    const {count: totalCount, rows: platforms}: { count: number, rows: IPlatform[] } = await getType(params, currentPage, perPage);

    if (searchParams.page === '1') {
        redirect(`/platforms/`)
    }

    return (
        <>
            <> </>
            <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
            <section className={styles.head}>
                <div className={'container'}>
                    {/*<HTag className={styles.head__title} tag={'h1'}>*/}
                    {/*    */}
                    {/*</HTag>*/}
                    {/*<PTag className={styles.head__text} fontSize={'20px'}>*/}
                    {/*    */}
                    {/*</PTag>*/}
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
            <PlatformsListingLinks/>
        </>
    );
};

export default Platforms;
