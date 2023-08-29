import {AddFormData, ContactsFormData, FilterPageParams, IPost, IPostResponse} from "@/types";
import clientEnv from "@/consts/clientEnv";
import {convertToObjectValue, generateQueryParams, searchTypeFilter} from "@/helpers/index";

export async function getPosts(category: string = '', currentPage: number = 1, perPage: number = 3) {
    const response: Response = await fetch(`${process.env.SERVER}/api/select-posts/?category=${category}&page=${currentPage}&perPage=${perPage}`);

    const posts: Promise<IPostResponse> = response.json();

    return posts;
}

export async function getPost(postLink: string) {
    const response = await fetch(`${process.env.SERVER}/api/get-post/${postLink}`);

    const post: IPost = await response.json();

    return post;
}

export async function getInterestingPosts(excludePostSlug: string, postCategory: string) {
    const response = await fetch(`${process.env.SERVER}/api/get-interesting-posts?post=${excludePostSlug}&category=${postCategory}`);

    const posts: IPost[] = await response.json();

    return posts;
}

export async function sendMail(data: AddFormData | ContactsFormData) {
    const response = await fetch(`${clientEnv.localServer}/api/send-mail/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },

    });

    if (response.status === 400) {
        const errorMessage = await response.json();
        throw new Error(errorMessage);
    }

    return await response.json();
}

export async function getType(params: FilterPageParams, page: number, perPage: number) {
    const paramsValues = Object.values(params).map(param => decodeURIComponent(param).split('+'));
    const investObjects = paramsValues.map(convertToObjectValue);
    const filters = paramsValues.map(searchTypeFilter);
    const queryParams = investObjects
        .map((object) => {
            if (object) {
                return generateQueryParams(object);
            }
        })
        .join('&and&');
    const allFilters = filters.join('-');

    const res = await fetch(`${process.env.SERVER}/api/select-platforms?${queryParams}&page=${page}&perPage=${perPage}&typeFilter=${allFilters}`);

    return await res.json();
}
