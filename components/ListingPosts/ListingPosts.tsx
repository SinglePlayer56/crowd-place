import styles from "./ListingPosts.module.css";
import {BlogCard, HTag} from "@/components";
import Pagination from "@/components/Pagination/Pagination";
import {ListingPostsProps} from "@/components/ListingPosts/ListingPosts.props";

const ListingPosts = async ({typePaginator, perPage, page, totalCount, posts, searchParams, title}: ListingPostsProps) => {

    return (
        <section className={styles.reviews}>
            <div className={'container'}>
                <HTag className={styles.reviews__title} tag={'h2'}>
                    {title}
                </HTag>
                <div className={styles.reviews__list}>
                    {posts.length > 0 && posts.map((article) => (
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
                {totalCount > perPage &&
                    <Pagination
                        itemCount={totalCount}
                        page={page}
                        perPage={perPage}
                        type={typePaginator}
                        searchParams={searchParams}
                    />
                }
            </div>
        </section>
    );
};

export default ListingPosts;
