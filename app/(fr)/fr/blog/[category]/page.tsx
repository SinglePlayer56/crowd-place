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
                    {/*<PTag className={styles.head__text} fontSize={'20px'}>*/}
                    {/*    */}
                    {/*</PTag>*/}
                    <FilterPosts/>
                </div>
            </section>
            <ListingPosts
                title={'News'}
                posts={postsList}
                perPage={perPage}
                page={currentPage}
                totalCount={totalCount}
                typePaginator={'main'}
            />

        </>
    );
};

export default CategoryListing;
