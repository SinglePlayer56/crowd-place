import {HTag, PlatformCard} from "@/components";
import styles
    from "./ListingPlatforms.module.css";
import Pagination from "@/components/Pagination/Pagination";
import {ListingPlatformsProps} from "@/components/ListingPlatforms/ListingPlatforms.props";

const ListingPlatforms = async ({type, platforms, totalCount, page, perPage, searchParams, title}: ListingPlatformsProps) => {


    return (

            <section className={styles.reviews}>
                <div className={'container'}>
                    <HTag className={styles.reviews__title} tag={'h2'}>
                        {title}
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
                        type={type}
                        itemCount={totalCount}
                        page={page}
                        perPage={perPage}
                        searchParams={searchParams}
                    />
                </div>
            </section>

    );
};

export default ListingPlatforms;
