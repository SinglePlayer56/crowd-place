import {ListingPlatforms, ListingPosts, PlatformCard} from "@/components";
import styles from './SearchPage.module.css';
import {ISearchResult, SearchPageSearchParams} from "@/types";

async function fetchSearchHandler(value: string, platformsPage: number = 1, postsPage: number = 1, limitPlatforms: string = '0', limitPosts: string = '0'): Promise<ISearchResult> {
    const response = await fetch(`http://localhost:3001/api/search?searchParams=${value}&platformsPage=${platformsPage}&postsPage=${postsPage}&limitPlatforms=${limitPlatforms}&limitPosts=${limitPosts}`);

    const data = await response.json();

    return data;
}

const SearchPage = async ({searchParams}: { searchParams: SearchPageSearchParams }) => {
    const {
        content,
        limitPlatforms,
        limitPosts,
        postPage,
        platformPage
    } = searchParams;

    let currentPlatformPage = 1;
    let currentPostsPage = 1;

    if (Number(platformPage) >= 1) {
        currentPlatformPage = Number(platformPage);
    }

    if (Number(postPage) >= 1) {
        currentPostsPage = Number(postPage);
    }


    const {
        postResult,
        platformResult,
        totalPosts,
        totalPlatform
    } = await fetchSearchHandler(content, currentPlatformPage, currentPostsPage, limitPlatforms, limitPosts);

    return (
        <>
            {platformResult.length > 0 &&
                <ListingPlatforms
                    title={'Platforms'}
                    type={'platforms'}
                    platforms={platformResult}
                    totalCount={totalPlatform}
                    page={currentPlatformPage}
                    perPage={Number(limitPlatforms)}
                    searchParams={searchParams}
                />
            }
            {postResult.length > 0 &&
                <ListingPosts
                    title={'Posts'}
                    typePaginator={'posts'}
                    posts={postResult}
                    totalCount={totalPosts}
                    page={currentPostsPage}
                    perPage={Number(limitPosts)}
                    searchParams={searchParams}
                />
            }
        </>
    );
};

export default SearchPage;
