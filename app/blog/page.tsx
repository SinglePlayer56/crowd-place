import {HTag, Date, Tag, PTag, BlogCard} from "@/components";
import styles from './blog.module.css';
import {BlogCardsValues} from "@/consts";

const Blog = () => {
    const tags = ['Netherlands', 'Mutual fund', 'Agriculture'];
    const blogListValue = [...BlogCardsValues, ...BlogCardsValues];

    return (
        <>
            <section className={styles.startSection__start}>
                <div className='container'>
                    <HTag className={styles.startSection__title} tag={"h1"}>
                        Blog H1
                    </HTag>
                    <div className={styles.startSection__dateTags}>
                        <Date date={'23.05.2023'}/>
                        <div className={styles.startSection__tags}>
                            {tags.map((tag) => <Tag title={tag}/>)}
                        </div>
                    </div>
                    <PTag className={styles.startSection__text} fontSize={'20px'}>
                        Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s
                        becoming increasingly widespread for investors to be interested not only in the possible
                        returns but the collateral social or environmental impact. In other words people want their
                        investment choices to be aligned with their values. There are many real estate crowdfunding
                        platforms in Europe which you can explore and start investing in property. However, do your
                        own due dilligence when it comes to property investing. Investors register on crowdfunding
                        websites and choose a project or a campaign to invest in. Depending on the platform’s
                        business model, if it’s equity, P2P, or even donation-based crowdfunding, investors receive
                        either some regular returns or partial ownership of the companies.
                    </PTag>
                    <PTag className={styles.startSection__text} fontSize={'20px'}>
                        The crowdfunding market in Switzerland is developing rapidly, and funding rates are growing
                        exponentially. With the average income level of the population and the number of private
                        investors, this is not surprising. Moreover, the existing regulation contributes to such
                        growth. The Swiss crowdfunding market is an important part of the global crowdfunding
                        market, crowd-investing in Switzerland is worth a closer look.
                    </PTag>
                </div>
            </section>
            <section className={styles.blogList}>
                <div className={'container'}>
                    <HTag className={styles.blogList__title} tag={'h2'}>
                        You might be interested
                    </HTag>
                    <div className={styles.blogList__list}>
                        {blogListValue.map((blogCardValue) => (
                            <BlogCard
                                pathImage={blogCardValue.pathImage}
                                title={blogCardValue.title}
                                text={blogCardValue.text}
                                tag={blogCardValue.tag}
                                date={blogCardValue.date}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
