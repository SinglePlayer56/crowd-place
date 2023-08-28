import {PropsWithChildren} from "react";

export interface HeaderLink {
    name: string;
    href: string;
}

export interface IPostResponse {
    count: number;
    rows: IPost[]
}

export interface IPost {
    title: string;
    description: string;
    imagePath: string;
    category: string;
    slugCategory: string;
    slugHref: string;
    date: string;
}

export interface SearchParams<T> {
    params: T,
    searchParams: {
        page: string;
    }
}

export type formData<T> = {
    [K in keyof T]: T[K]
}

export type FormField<T> = {
    tag: 'input' | 'textArea';
    label: keyof T;
    type?: 'text' | 'email';
    required: boolean;
}

export type PaginatorType = 'main' | 'posts' | 'platforms';

export interface ISearchResult {
    platformResult: IPlatform[];
    postResult: IPost[];
    totalPlatform: number;
    totalPosts: number;
}

export interface IPlatform {
    name: string,
    logo: string,
    country: string[],
    investmentType: string[],
    industry: string[],
    yearFounded: string,
    licenseNumber: string,
    languages: string[],
    reviews: string,
    website: string,
    minimumInvestment: string,
    advertisedReturn: string,
    investors: string,
    paymentOptions: string[],
    totalFundingVolume: string,
    averageLoanDuration: string,
    description: string,
    regulated: boolean,
    buybackGuarantee: boolean,
    publicStatistics: boolean,
    signupBonus: boolean,
    secondaryMarket: boolean,
    autoInvest: boolean,
    whoCanInvest: string,
    slug: string
}

export interface AddFormData {
    'Platform name': string;
    'Website': string;
    'E-mail': string;
    'Message': string;
}

export interface ContactsFormData {
    'Name': string;
    'E-mail': string;
    'Message': string;
}


export interface FilterPageParams {
    country?: string;
    industry?: string;
    investmentType?: string;
    yearFounded?: string;
    licenseNumber?: string;
}

export interface SearchPageSearchParams {
    limitPlatforms: string;
    limitPosts: string;
    platformPage: string;
    postPage: string;
    content: string;
}

export type PaginationLinkProps = {
    page?: number | string;
    active?: boolean;
    disabled?: boolean;
    platformPage?: number | string;
    postPage?: number | string;
    type: PaginatorType;
    currentPage: string;
    linkHref: string;
    rel: string;
} & PropsWithChildren;
