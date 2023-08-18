import db from "@/utils";
import Platform from "@/models/platform";
import {Op} from "sequelize";
import {NextRequest} from "next/server";
import {
    acceptSelectFilterType,
    addMiddleFilter,
    addServerOptions,
    FilterType,
    ICheckboxValues
} from "@/store/slices/filters";
import {store} from "@/store";

export const GET = async (req: NextRequest, {params}: any) => {
    const currentPage = Number(req.nextUrl.searchParams.get('page'));
    const perPage = Number(req.nextUrl.searchParams.get('perPage'));
    const offset = (currentPage - 1) * perPage;
    const typeFilters = req.nextUrl.searchParams.get('typeFilter')!.split('-');

    const queryParams = new URLSearchParams(req.nextUrl.toString());
    let currentValues: string[] = [];

    for (const value of queryParams.values()) {
        currentValues.push(value)
    }

    currentValues = currentValues.slice(0, currentValues.length - 3);

    // Находим индексы пустых строк
    let emptyIndices = currentValues.reduce((indices, item, index) => {
        if (item === "") { // @ts-ignore
            indices.push(index);
        }
        return indices;
    }, []);

// Добавляем начальный и конечный индексы для разделения
    // @ts-ignore
    emptyIndices.unshift(-1);
    // @ts-ignore
    emptyIndices.push(currentValues.length);

// Разделяем массив на части
    const parts = emptyIndices.map((value, index, array) => currentValues.slice(array[index] + 1, array[index + 1]));

    const whereClauses = typeFilters.map((filterType, index) => generateDynamicFilter(filterType as FilterType, parts[index]));
    typeFilters.forEach((filterType: string, index: number) => {
        store.dispatch(addMiddleFilter({type: filterType as FilterType, valueArray: parts[index]}));
        store.dispatch(acceptSelectFilterType(filterType as FilterType));
    })

    const filtersState = store.getState().filters;

    const updatedOptions = typeFilters.map((filterType, index) => {
        const currentFilter = filtersState.filtersFields.find((filter) => filter.type === filterType);
        if (!currentFilter) {
            return null;
        }

        const valuesFilter = parts[index];
        const updatedOptions = currentFilter.options.map((option) => {
            const checked = valuesFilter.includes(option.title);
            return {...option, checked};
        });

        return {type: filterType, options: updatedOptions};
    });

    updatedOptions.forEach((options) => {
        store.dispatch(addServerOptions(options as { type: FilterType, options: ICheckboxValues[] }))
    })

    function generateDynamicFilter(type: FilterType, currentValues: string[]) {
        if (type === 'yearFounded') {
            const currentYear = new Date().getFullYear();
            const filters: any = [];

            currentValues.forEach(value => {
                if (value === '1 year') {
                    filters.push({
                        [type]: {
                            [Op.gte]: currentYear - 1,
                        },
                    });
                } else if (value === '2-3 years') {
                    filters.push({
                        [type]: {
                            [Op.between]: [currentYear - 3, currentYear - 2],
                        },
                    });
                } else if (value === '4-5 years') {
                    filters.push({
                        [type]: {
                            [Op.between]: [currentYear - 5, currentYear - 4],
                        },
                    });
                } else if (value === 'more than 5') {
                    filters.push({
                        [type]: {
                            [Op.lt]: currentYear - 5,
                        },
                    });
                }
            });

            return {
                [Op.or]: filters,
            };
        } else if (type === 'licenseNumber') {
            return {
                [Op.and]: [
                    {
                        [type]: {
                            [Op.ne]: 'N/A',
                        },
                    },
                    {
                        [type]: {
                            [Op.ne]: null,
                        },
                    },
                ]
            }
        } else {
            return {
                [Op.and]: currentValues.map(value => ({
                    [type]: {
                        [Op.regexp]: value,
                    },
                })),
            };
        }
    }

    const updateState = store.getState().filters;

    const response = await Platform.findAndCountAll({
        order: [
            ['id', 'DESC']
        ],
        limit: perPage ? perPage : 4,
        offset,
        where: {
            [Op.and]: whereClauses
        }
    });

    return new Response(JSON.stringify({platformsData: response, serverState: updateState}), {status: 200});
}
