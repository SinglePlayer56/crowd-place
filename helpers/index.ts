import {usePathname} from "next/navigation";
import {AddFormData, ContactsFormData, FilterPageParams, IPost, IPostResponse} from "@/types";
import {store} from "@/store";

export function createFilterObject(obj: Record<string, string>, keysArray: string[]) {
    const filteredObject: Record<string, string> = {};

    keysArray.forEach((key) => {
        if (obj.hasOwnProperty(key)) {
            filteredObject[key] = obj[key]
        }
    })

    return filteredObject;
}

export function searchTypeFilter(arrayParams: string[]) {
    let filterType: string = '';

    arrayParams.forEach((value) => {
        store.getState().filters.filtersFields.forEach((filter, index) => {
            filter.options.forEach((option) => {
                if (option.slug.includes(value)) {
                    filterType = store.getState().filters.filtersFields[index].type
                }
            })
        })
    })

    return filterType;
}

export function generateQueryParams(object: Record<string, string>) {
    return Object.entries(object)
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

export function convertToObjectValue(arrayValue: string[]) {
    const filterType = searchTypeFilter(arrayValue);

    const filtersOption = store.getState().filters.filtersFields.find((type) => type.type === filterType);

    if (filtersOption) {
        const slugTitleObject = filtersOption.options.reduce((acc: Record<string, string>, item) => {
            acc[item.slug] = item.title;
            return acc;
        }, {});

        return createFilterObject(slugTitleObject, arrayValue);
    }
}

export function isActiveLink(href: string) {
    const pathName = usePathname();

    return pathName === href;
}

export async function sendMail(data: AddFormData | ContactsFormData) {
    const response = await fetch(`http://1864875-cn27374.twc1.net/api/send-mail/`, {
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

// Filter params validation
// function filterParamsValidation(params: Record<FilterType, string>) {
//     const filters = store.getState().filters.filtersFields;
//
//     for (const key in params) {
//         const filterIndex = filters.findIndex((filter) => filter.type === key);
//         let count = 0;
//         filters[filterIndex].options.forEach((option) => {
//             if (decodeURIComponent(params[key] as string).split('+').includes(option.slug)) {
//                 count++;
//             }
//         });
//         if (count !==  decodeURIComponent(params[key] as string).split('+').length) {
//             redirect('/platforms/')
//         }
//     }
// }

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

export function getMetadataValues(params: FilterPageParams) {
    const paramsValues = Object.values(params).map((param) => decodeURIComponent(param).split('+'))
    const valueObjects = paramsValues.map(convertToObjectValue);
    const sortedValues = valueObjects.map((obj) => {
        if (obj) {
            return Object.values(obj).sort().join(' ');
        }
    })

    const allValue = sortedValues.join('+');
    const allPath = Object.values(params).map((value) => decodeURIComponent(value)).join('/')

    return {
        title: `${allValue} | Crowd Place`,
        description: `${allValue} | Crowd Place`,
        alternates: {
            canonical: `${process.env.DOMAIN}/platform/${allPath}/`
        }
    }
}

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

export function replacedSearchParam(url: string, paramName: string, newValue: string) {
    const [, queryParamsStr] = url.split("?");
    if (queryParamsStr) {
        const queryParams: string[] = queryParamsStr.split("&");

        // Создаем объект для хранения параметров
        const paramsObj: { [key: string]: string } = {};
        queryParams.forEach(param => {
            const [key, value] = param.split("=");
            paramsObj[key] = value;
        });

        // Изменяем значение указанного параметра
        if (paramsObj.hasOwnProperty(paramName)) {
            paramsObj[paramName] = newValue;
        }

        // Собираем обратно только квери-параметры с измененными параметрами
        const newParams: string[] = Object.entries(paramsObj).map(([key, value]) => `${key}=${value}`);
        const newQueryParams: string = newParams.join("&");

        return newQueryParams;
    }
}
