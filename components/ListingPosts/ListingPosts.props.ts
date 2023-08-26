import {IPost, PaginatorType, SearchPageSearchParams} from "@/types";

export interface ListingPostsProps {
    typePaginator: PaginatorType;
    posts: IPost[];
    totalCount: number;
    page: number;
    perPage: number;
    searchParams?: SearchPageSearchParams;
    title: string;
}
