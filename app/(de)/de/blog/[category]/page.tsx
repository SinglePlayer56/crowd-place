import styles from '../../../../(en)/blog/blog.module.css';
import {BreadCrumbs, FilterPosts, HTag, ListingPosts} from "@/components";
import {redirect} from "next/navigation";
import {SearchParams} from "@/types";
import {getPosts} from "@/helpers/fetch";
import {Metadata} from "next";
import {categoryPostsTags} from "@/consts";

export async function generateMetadata({searchParams, params}: SearchParams<PageProps>): Promise<Metadata> {
    const currentPage = searchParams.page ? `- page ${searchParams.page}` : '';
    const canonicalSearchParams = `${process.env.DOMAIN}/de/blog/${params.category}/?page=${searchParams.page}`

    let currentCategory = '';
    const slugTags = categoryPostsTags.map((tag) => tag.toLowerCase().split(' ').join('-'));
    slugTags.forEach((slugTag, index) => {
        if (slugTag === params.category) {
            currentCategory = categoryPostsTags[index];
        }
    });

    return {
        title: `Posts ${currentCategory} ${currentPage} | Crowd Place`,
        description: `Posts ${currentCategory} ${currentPage} | Crowd Place`,
        alternates: {
            canonical: !searchParams.page ? `${process.env.DOMAIN}/de/blog/${params.category}/` : canonicalSearchParams
        }
    };
}

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
