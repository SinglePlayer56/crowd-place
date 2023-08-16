import {usePathname} from "next/navigation";
import {AddFormData, ContactsFormData} from "@/types";
import {store} from "@/store";

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

export function searchTypeFilters(arrayParams: string[]) {
    let filterType: string[] = [];

    arrayParams.forEach((value) => {
        store.getState().filters.filtersFields.forEach((filter, index) => {
            filter.options.forEach((option) => {
                if (option.slug.includes(value)) {
                    const type = store.getState().filters.filtersFields[index].type;
                    if (!filterType.includes(type)) {
                        filterType.push();
                    }
                }
            })
        })
    })

    return filterType;
}

export function convertToObjectValue(arrayValue: string[]) {
    const filterType = searchTypeFilter(arrayValue);

    const filtersOption = store.getState().filters.filtersFields.find((type) => type.type === filterType);

    if (filtersOption) {
        const slugTitleObject = filtersOption.options.reduce((acc: Record<string, string>, item) => {
            acc[item.slug] = item.title;
            return acc;
        }, {});

        return  createFilterObject(slugTitleObject, arrayValue);
    }

}

export function isActiveLink(href: string) {
    const pathName = usePathname();

    return pathName === href;
}

export function mailDataType(data: AddFormData | ContactsFormData): data is AddFormData {
    return (data as AddFormData)['Platform name'] !== undefined;
}


export async function sendMail(route: string, data: AddFormData | ContactsFormData) {
    const response = await fetch(`/api${route}`, {
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

export function generateCombinations(arr: string[]): string[] {
    const result: string[] = [];

    function backtrack(start: number, current: string) {
        result.push(current);
        for (let i = start; i < arr.length; i++) {
            backtrack(i + 1, current === '' ? arr[i] : current + '+' + arr[i]);
        }
    }

    backtrack(0, '');

    return result;
}

