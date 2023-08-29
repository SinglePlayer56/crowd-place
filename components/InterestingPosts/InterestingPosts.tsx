import styles from './InterestingPosts.module.css'
import {HTag, RelatedSwiperPost} from "@/components";
import {getInterestingPosts} from "@/helpers/fetch";
import {InterestingPostsProps} from "./InterestingPosts.props";

const InterestingPosts = async ({postsCategory, excludeSlugPost}: InterestingPostsProps) => {
    // для вывода похожих категорий, добавить в функцию postsCategory
    const relatedPosts = await getInterestingPosts(excludeSlugPost, '');

    return (
        <section className={styles.interesting}>
            <div className={'container'}>
                <HTag className={styles.interesting__title} tag={'h2'}>
                    You might be interested
                </HTag>
                <RelatedSwiperPost posts={relatedPosts}/>
            </div>
        </section>
    );
};

export default InterestingPosts;
