import styles from './InterestingPosts.module.css'
import {HTag, RelatedSwiperPost} from "@/components";
import {getPosts} from "@/helpers";
import {InterestingPostsProps} from "./InterestingPosts.props";

const InterestingPosts = async ({postsCategory}: InterestingPostsProps) => {
    const {rows: relatedPosts} = await getPosts(postsCategory);

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
