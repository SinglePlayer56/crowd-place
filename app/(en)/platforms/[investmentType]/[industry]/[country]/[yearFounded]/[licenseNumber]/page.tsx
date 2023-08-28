import {BreadCrumbs, HTag, ListingPlatforms, PTag, SelectFilters} from "@/components";
import {FilterPageParams, IPlatform} from "@/types";
import {getMetadataValues, getType} from "@/helpers";
import {Metadata} from "next";
import styles from '../../../../platforms.module.css';
import {redirect} from "next/navigation";

export async function generateMetadata({params, searchParams}: PageProps): Promise<Metadata> {
    return getMetadataValues(params, searchParams.page);
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

        </>
    );
};

export default Platforms;
