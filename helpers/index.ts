import {redirect, usePathname} from "next/navigation";
import {AddFormData, ContactsFormData, FilterPageParams} from "@/types";
import {store} from "@/store";
import {FilterType} from "@/store/slices/filters";
import {Op} from "sequelize";

export function extractValuesByKeyArray(obj: Record<string, string>, keysArray: string[]) {
    const result = [];

    for (let i = 0; i < keysArray.length; i++) {
        const key = keysArray[i];
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }

    return result;
}

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

// export function searchTypeFilters(arrayParams: string[]) {
//     let filterType: string[] = [];
//
//     arrayParams.forEach((value) => {
//         store.getState().filters.filtersFields.forEach((filter, index) => {
//             filter.options.forEach((option) => {
//                 if (option.slug.includes(value)) {
//                     const type = store.getState().filters.filtersFields[index].type;
//                     if (!filterType.includes(type)) {
//                         filterType.push();
//                     }
//                 }
//             })
//         })
//     })
//
//     return filterType;
// }

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
    const response = await fetch(`http://1864875-cn27374.twc1.net:3001/api/send-mail`, {
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

