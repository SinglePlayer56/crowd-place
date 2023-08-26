import {IPlatform, PaginatorType, SearchPageSearchParams} from "@/types";

export interface ListingPlatformsProps {
    type: PaginatorType;
    platforms: IPlatform[];
    totalCount: number;
    page: number;
    perPage: number;
    searchParams?: SearchPageSearchParams;
    title: string;
}
