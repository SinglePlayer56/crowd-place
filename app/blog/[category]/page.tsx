import styles from '../blog.module.css'
import {BreadCrumbs, FilterPosts, HTag, ListingPosts, PTag} from "@/components";
import {redirect} from "next/navigation";
import {SearchParams} from "@/types";
import {getPosts} from "@/helpers";

interface PageProps {
    category: string;
}

const CategoryListing = async ({searchParams, params}: SearchParams<PageProps>) => {
    if (searchParams.page === '1') {
        redirect(`/blog/${params.category}/`)
    }

    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Blog', href: 'blog'},
    ];

    const perPage = 6;
    let currentPage = 1;

    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }


    const {count: totalCount, rows: postsList} = await getPosts(params.category, currentPage, perPage);

    return (
        <>
            <> </>
            <section className={styles.head}>
                <div className={'container'}>
                    <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
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
                    <FilterPosts/>
                </div>
            </section>
            <ListingPosts
                title={'News'}
                posts={postsList}
                perPage={perPage}
                page={currentPage}
                totalCount={totalCount}
                typePaginator={'posts'}
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

export default CategoryListing;
