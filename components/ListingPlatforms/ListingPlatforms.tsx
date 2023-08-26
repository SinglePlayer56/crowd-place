import {HTag, PlatformCard} from "@/components";
import styles
    from "./ListingPlatforms.module.css";
import Pagination from "@/components/Pagination/Pagination";
import {redirect} from "next/navigation";
import {IPlatform} from "@/types";
import {getType} from "@/helpers";
import {ListingPlatformsProps} from "@/components/ListingPlatforms/ListingPlatforms.props";

const ListingPlatforms = async ({params, searchParams}: ListingPlatformsProps) => {
    const perPage = 12;
    let currentPage = 1;

    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }

    const paramsPath = Object.values(params).map((value) => decodeURIComponent(value)).join('/');

    if (searchParams.page === '1') {
        redirect(`/platforms/${paramsPath}/`)
    }


    const {count: totalCount, rows: platforms}: { count: number, rows: IPlatform[] } = await getType(params, currentPage, perPage);

    return (

            <section className={styles.reviews}>
                <div className={'container'}>
                    <HTag className={styles.reviews__title} tag={'h2'}>
                        Reviews
                    </HTag>
                    <div className={styles.reviews__list}>
                        {platforms.length > 0 && platforms.map((platform) => (
                            <PlatformCard
                                key={platform.name}
                                pathLogo={platform.logo}
                                title={platform.name}
                                countries={platform.country}
                                description={platform.description}
                                type={platform.investmentType}
                                industry={platform.industry}
                                href={`/platform/${platform.slug}`}/>
                        ))}
                    </div>
                    <Pagination
                        itemCount={totalCount}
                        page={currentPage}
                        perPage={perPage}
                    />
                </div>
            </section>

    );
};

export default ListingPlatforms;
