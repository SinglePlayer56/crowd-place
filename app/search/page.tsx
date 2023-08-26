import {BlogCard, HTag, PlatformCard} from "@/components";
import styles from './SearchPage.module.css';
import {IPlatform, IPost} from "@/types";

interface ISearchResult {
    platformResult: IPlatform[];
    postResult: IPost[]
}

async function fetchSearchHandler(value: string, limitPlatforms: string = '0', limitPosts: string = '0'): Promise<ISearchResult | undefined> {
    try {
        const response = await fetch(`http://localhost:3001/api/search?searchParams=${value}&limitPlatforms=${limitPlatforms}&limitPosts=${limitPosts}`);

        const data = await response.json();

        return data;
    } catch (e) {
        console.log({message: 'Bad request'})
    }
}

interface SearchParams {
    limitPlatforms: string;
    limitPosts: string;
    content: string;
}

const SearchPage = async ({searchParams}: {searchParams: SearchParams}) => {
    const {content, limitPlatforms, limitPosts} = searchParams;
    const data = await fetchSearchHandler(content, limitPlatforms, limitPosts);

    return (
        <>
            {data && data.platformResult &&
                <section className={styles.platforms}>
                    <div className={'container'}>
                        <HTag className={styles.category__title} tag={'h2'}>
                            Platforms
                        </HTag>
                        <div className={styles.platforms__list}>
                            {data.platformResult.map((platform) => (
                                <PlatformCard
                                    pathLogo={platform.logo}
                                    title={platform.name}
                                    countries={platform.country}
                                    description={platform.description}
                                    href={platform.slug}
                                    key={platform.slug}
                                    type={platform.investmentType}
                                    industry={platform.industry}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            }
            {data && data.postResult &&
                <section className={styles.platforms}>
                    <div className={'container'}>
                        <HTag className={styles.category__title} tag={'h2'}>
                            Posts
                        </HTag>
                        <div className={styles.posts__list}>
                            {data && data.postResult.map((post) => (
                                <BlogCard
                                    pathImage={post.imagePath}
                                    title={post.title}
                                    text={post.description}
                                    tag={post.category}
                                    date={post.date}
                                    href={post.slugHref}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default SearchPage;
