import styles from '../../../(en)/blog/blog.module.css';
import {BreadCrumbs, FilterPosts, HTag, ListingPosts} from "@/components";
import {redirect} from "next/navigation";
import {getPosts} from "@/helpers/fetch";
import {Metadata} from "next";

export async function generateMetadata({searchParams}: {searchParams: {page: string}}): Promise<Metadata> {
    const currentPage = searchParams.page ? `- page ${searchParams.page}` : '';
    const canonicalSearchParams = `${process.env.DOMAIN}/de/blog/?page=${searchParams.page}`

    return {
        title: `Blog ${currentPage} | Crowd Place`,
        description: `Blog ${currentPage} | Crowd Place`,
        alternates: {
            canonical: !searchParams.page ? `${process.env.DOMAIN}/de/blog/` : canonicalSearchParams
        }
    };
}

export const dynamic = "force-dynamic";

const BlogListing = async ({searchParams, params}: any) => {
    const perPage = 6;
    let currentPage = 1;

    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Blog', href: 'blog'},
    ];

    if (searchParams.page === '1') {
        redirect('/blog/')
    }

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

export default BlogListing;
