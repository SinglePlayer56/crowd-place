import styles from './platforms.module.css'
import {BreadCrumbs, CustomButton, HTag, PlatformCard, PTag, SelectFilters} from "@/components";
import {PlatformDataValue, SelectFiltersValues} from "@/consts";
import {IPlatform, searchParams} from "@/types";
import Pagination from "@/components/Pagination/Pagination";
import {redirect} from "next/navigation";


async function getPlatformsAll() {
    const res = await fetch('http://localhost:3000/api/add-platform', {
        method: 'GET'
    });

    const platforms = res.json();

    return platforms;
}

const Platforms = async ({searchParams}: searchParams) => {
    const totalCount = PlatformDataValue.length;
    const perPage = 4;
    let currentPage = 1;

    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }

    if (searchParams.page === '1') {
        redirect('/platforms/')
    }

    let offset = (currentPage - 1) * perPage;

    const platformData = PlatformDataValue.slice(offset, offset + perPage);

    const users: IPlatform[] = await getPlatformsAll();

    return (
        <>
            <> </>
            <section className={styles.head}>
                <div className={'container'}>
                    <BreadCrumbs/>
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
                        filters={SelectFiltersValues}
                        resetButton
                    />
                </div>
            </section>
            <section className={styles.reviews}>
                <div className={'container'}>
                    <HTag className={styles.reviews__title} tag={'h2'}>
                        Reviews
                    </HTag>
                    <div className={styles.reviews__list}>
                        {users?.map((platform) => (
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
                        Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values. CrowdPlace is probably one of the best crowdfunding aggregators in Europe.
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
                    <CustomButton className={styles.links__button} text={'See all'} color={'transparent'} />
                </div>
            </section>
        </>
    );
};

export default Platforms;
