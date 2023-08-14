import styles from './blog.module.css'
import {BlogCard, BreadCrumbs, HTag, PTag, SelectFilters} from "@/components";
import {BlogCardsValues} from "@/consts";
import {searchParams} from "@/types";
import Pagination from "@/components/Pagination/Pagination";
import {redirect} from "next/navigation";

const BlogListing = ({searchParams}: searchParams) => {
    const totalCount = BlogCardsValues.length;
    const perPage = 6;
    let currentPage = 1;

    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }

    if (searchParams.page === '1') {
        redirect('/blog/')
    }

    let offset = (currentPage - 1) * perPage;

    const blogCardData = BlogCardsValues.slice(offset, offset + perPage);

    return (
        <>
            <> </>
            <section className={styles.head}>
                <div className={'container'}>
                    <BreadCrumbs/>
                    <HTag className={styles.head__title} tag={'h1'}>
                        Blog Listing
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
            <section className={styles.reviews}>
                <div className={'container'}>
                    <HTag className={styles.reviews__title} tag={'h2'}>
                        News
                    </HTag>
                    <div className={styles.reviews__list}>
                        {blogCardData.map((article) => (
                            <BlogCard
                                key={article.title}
                                pathImage={article.pathImage}
                                title={article.title}
                                text={article.text}
                                tag={article.tag}
                                date={article.date}
                            />
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
        </>
    );
};

export default BlogListing;
