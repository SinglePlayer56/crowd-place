import db from "@/utils";
import Platform from "@/models/platform";
import {Op} from "sequelize";
import {NextRequest} from "next/server";
import {FilterType} from "@/store/slices/filters";

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


    function generateDynamicFilter(type: FilterType, currentValues: string[]) {
        return {
            [Op.and]: currentValues.map(value => ({
                [type]: {
                    [Op.regexp]: value,
                },
            })),
        };
    }

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

    return new Response(JSON.stringify(response), {status: 200});
}
