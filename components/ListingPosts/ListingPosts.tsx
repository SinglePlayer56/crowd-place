import styles from "./ListingPosts.module.css";
import {BlogCard, HTag} from "@/components";
import Pagination from "@/components/Pagination/Pagination";
import {ListingPostsProps} from "@/components/ListingPosts/ListingPosts.props";
import {getPosts} from "@/helpers";

const ListingPosts = async ({searchParams, params}: ListingPostsProps) => {
    const perPage = 6;
    let currentPage = 1;

    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }


    const {count: totalCount, rows: postsList} = await getPosts(params.category, currentPage, perPage);

    return (
        <section className={styles.reviews}>
            <div className={'container'}>
                <HTag className={styles.reviews__title} tag={'h2'}>
                    News
                </HTag>
                <div className={styles.reviews__list}>
                    {postsList.map((article) => (
                        <BlogCard
                            key={article.title}
                            pathImage={article.imagePath}
                            title={article.title}
                            text={article.description}
                            tag={article.category}
                            date={article.date}
                            href={`/blog/${article.slugHref}/`}
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
    );
};

export default ListingPosts;
