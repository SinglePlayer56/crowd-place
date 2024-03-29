import {notFound, usePathname} from "next/navigation";
import {FilterPageParams} from "@/types";
import {store} from "@/store";
import {linkGc} from "next/dist/client/app-link-gc";

export function createFilterObject(obj: Record<string, string>, keysArray: string[]) {
    return keysArray.reduce((filteredObject: Record<any, any>, key) => {
        if (obj.hasOwnProperty(key)) {
            filteredObject[key] = obj[key];
        }
        return filteredObject;
    }, {});
}

export function searchTypeFilter(arrayParams: string[]) {
    let filterType: string = '';

    arrayParams.forEach((value) => {
        store.getState().filters.filtersFields.forEach((filter, index) => {
            filter.options.forEach((option) => {
                if (option.slug === value) {
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


// Filter params validation
function filterParamsValidation(params: FilterPageParams, typesFilters: string[], sortedValue: (string | undefined)[]) {
    const filters = store.getState().filters.filtersFields;
    let notCount = 0;
    let index = 0;

    for (const type of typesFilters) {
        const filterIndex = filters.findIndex((filter) => filter.type === type);
        const currentKeyParams = Object.keys(params)[index];
        let count = 0;
        filters[filterIndex].options.forEach((option) => {
            // @ts-ignore
            if (sortedValue.join(' + ').includes(option.title)) {
                count++;
            }
        });
        // @ts-ignore
        if (count !== decodeURIComponent(params[currentKeyParams]).split('+').length) {
            // notFound();
            notCount++;
        }

        index++;
    }

    return !notCount;
}

function generateParamsData(params: FilterPageParams) {
    const paramsValues = Object.values(params).map((param) => decodeURIComponent(param).split('+'))
    const valueObjects = paramsValues.map(convertToObjectValue);
    const sortedValues = valueObjects.map((obj) => {
        if (obj) {
            return Object.values(obj).sort().join(', ');
        }
    })

    const typesArray = paramsValues.map(searchTypeFilter);

    if (filterParamsValidation(params, typesArray, sortedValues)) {
        return {sortedValues, typesArray}
    } else {
        return notFound();
    }
}

export function getMetadataValues(params: FilterPageParams, currentPage: string) {
    const paramsData = generateParamsData(params);

    if (paramsData) {
        const {sortedValues, typesArray} = paramsData;
        let allValue = sortedValues.join(' - ').replace('Yes', 'Regulated').replace('No', 'No regulated');
        const allPath = Object.values(params).map((value) => decodeURIComponent(value)).join('/')
        const currentPageNumber = currentPage ? ` | page ${currentPage} ` : '';
        const canonicalSearchParams = `${process.env.DOMAIN}/platforms/${allPath}/?page=${currentPage}`


        if (typesArray.length === 1 && !typesArray.includes('country') && sortedValues[0]) {

            const type = sortedValues[0];
            if (type === 'P2P lending') {
                return {
                    title: `Peer-to-Peer (P2P) Lending platforms${currentPageNumber}`,
                    description: `List of the best Peer-to-Peer lending platforms. Compare P2P lending platforms and choose the best one for you.`,
                    alternates: {
                        canonical: !currentPage ? `${process.env.DOMAIN}/platforms/${allPath}/` : canonicalSearchParams
                    }
                }
            } else {
                return {
                    title: `${type} Crowdfunding platforms${currentPageNumber}`,
                    description: `List of the best ${type} crowdfunding platforms. Compare ${type} crowdfunding platforms and choose the best one for you.`,
                    alternates: {
                        canonical: !currentPage ? `${process.env.DOMAIN}/platforms/${allPath}/` : canonicalSearchParams
                    }
                }
            }
        } else if (typesArray.length === 1 && typesArray.includes('country') && sortedValues[0]) {
            const country = sortedValues[0];

            return {
                title: `Crowdfunding platforms in ${country}${currentPageNumber}`,
                description: ` List of the best crowdfunding platforms in ${country}. Compare crowdfunding platforms in ${country} and choose the best one for you.`,
                alternates: {
                    canonical: !currentPage ? `${process.env.DOMAIN}/platforms/${allPath}/` : canonicalSearchParams
                }
            }
        } else if (typesArray.length === 2 && typesArray.includes('country') && sortedValues[0] && sortedValues[1]) {
            const type = sortedValues[0];
            const country = sortedValues[1];

            if (sortedValues[0] === 'P2P lending') {
                return {
                    title: `Peer-to-Peer (P2P) Lending platforms in ${country}${currentPageNumber}`,
                    description: ` List of the best Peer-to-Peer lending platforms in ${country}. Compare P2P lending platforms in ${country} and choose the best one for you.`,
                    alternates: {
                        canonical: !currentPage ? `${process.env.DOMAIN}/platforms/${allPath}/` : canonicalSearchParams
                    }
                }
            } else {
                return {
                    title: `${type} Crowdfunding platforms in ${country}${currentPageNumber}`,
                    description: `List of the best ${type} Crowdfunding platforms in ${country}. Compare ${type} Crowdfunding platforms in ${country} and choose the best one for you.`,
                    alternates: {
                        canonical: !currentPage ? `${process.env.DOMAIN}/platforms/${allPath}/` : canonicalSearchParams
                    }
                }
            }

        } else if (typesArray.length > 2 && typesArray.includes('country')) {
            const countryIndex = typesArray.findIndex((type) => type === 'country');
            const country = sortedValues[countryIndex];
            let valueNotCountry = sortedValues
                .filter((_, index) => index !== countryIndex)
                .join(' - ').replace('Yes', 'Regulated').replace('No', 'No regulated');
            const isAllRegulated = (valueNotCountry.includes('Regulated') && valueNotCountry.includes('No regulated')) && 'Regulated and no regulated';

            if (isAllRegulated) {
                valueNotCountry = valueNotCountry.replace('No regulated, Regulated', isAllRegulated);
            }

            return {
                title: `${valueNotCountry} Crowdfunding platforms in ${country}${currentPageNumber}`,
                description: `${valueNotCountry} Crowdfunding platforms in ${country}${currentPageNumber}`,
                alternates: {
                    canonical: !currentPage ? `${process.env.DOMAIN}/platforms/${allPath}/` : canonicalSearchParams
                }
            }
        } else {
            const isAllRegulated = (allValue.includes('Regulated') && allValue.includes('No regulated')) && 'Regulated and no regulated';

            if (isAllRegulated) {
                allValue = allValue.replace('No regulated, Regulated', isAllRegulated);
            }

            return {
                title: `${allValue} Crowdfunding platforms ${currentPageNumber}`,
                description: `${allValue} Crowdfunding platforms ${currentPageNumber}`,
                alternates: {
                    canonical: !currentPage ? `${process.env.DOMAIN}/platforms/${allPath}/` : canonicalSearchParams
                }
            }
        }
    }
}

export function getTitleForPage(params: FilterPageParams) {
    const paramsData = generateParamsData(params);

    if (paramsData) {
        const {sortedValues, typesArray} = paramsData;

        if (typesArray.length === 1 && !typesArray.includes('country') && sortedValues[0]) {
            const type = sortedValues[0];
            if (type === 'P2P lending') {
                return `Peer-to-Peer (P2P) Lending platforms`
            } else {
                return `${type} Crowdfunding platforms`
            }
        } else if (typesArray.length === 1 && typesArray.includes('country') && sortedValues[0]) {
            const country = sortedValues[0];
            return `Crowdfunding platforms in ${country}`
        } else if (typesArray.length === 2 && typesArray.includes('country') && sortedValues[0] && sortedValues[1]) {
            const type = sortedValues[0];
            const country = sortedValues[1];

            if (sortedValues[0] === 'P2P lending') {
                return `Peer-to-Peer (P2P) Lending platforms in ${country}`
            } else {
                return `${type} Crowdfunding platforms in ${country}`
            }

        } else if (typesArray.length > 2 && typesArray.includes('country')) {
            const countryIndex = typesArray.findIndex((type) => type === 'country');
            const country = sortedValues[countryIndex];
            let valueNotCountry = sortedValues
                .filter((_, index) => index !== countryIndex)
                .join(' and ').replace('Yes', 'Regulated').replace('No', 'No regulated');
            const isAllRegulated = (valueNotCountry.includes('Regulated') && valueNotCountry.includes('No regulated')) && 'Regulated and no regulated';

            if (isAllRegulated) {
                valueNotCountry = valueNotCountry.replace('No regulated, Regulated', isAllRegulated);
            }

            return `${valueNotCountry} Crowdfunding platforms in ${country}`
        } else {
            let allValue = sortedValues.join(' and ').replace('Yes', 'Regulated').replace('No', 'No regulated');
            const isAllRegulated = (allValue.includes('Regulated') && allValue.includes('No regulated')) && 'Regulated and no regulated';

            if (isAllRegulated) {
                allValue = allValue.replace('No regulated, Regulated', isAllRegulated);
            }
            return `${allValue} Crowdfunding platforms`
        }
    }
}


export function replacedSearchParam(url: string, paramName: string, newValue: string) {
    const [, queryParamsStr] = url.split("?");
    if (queryParamsStr) {
        const queryParams: string[] = queryParamsStr.split("&");

        const paramsObj: { [key: string]: string } = {};
        queryParams.forEach(param => {
            const [key, value] = param.split("=");
            paramsObj[key] = value;
        });

        if (paramsObj.hasOwnProperty(paramName)) {
            paramsObj[paramName] = newValue;
        }

        const newParams: string[] = Object.entries(paramsObj).map(([key, value]) => `${key}=${value}`);

        return newParams.join("&");
    }
}

export function generateLink(path: string, param: string) {
    return `${path}${param.toLowerCase().split(' ').join('-')}`
}
