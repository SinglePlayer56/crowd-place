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

    const typeOne = typeFilters[0];

    const queryParams  = new URLSearchParams(req.nextUrl.toString());
    const currentValues: string[] = [];

    for (const value of queryParams.values()) {
        currentValues.push(value)
    }

    const whereClauses = typeFilters.map((filterType) => generateDynamicFilter(filterType as FilterType, currentValues));

    // const where = {
    //     [Op.and]: currentValues.slice(0, currentValues.length - 3).map(value => ({
    //         [typeOne!]: {
    //             [Op.regexp]: value,
    //         }
    //     })),
    // }

    function generateDynamicFilter(type: FilterType, currentValues: string[]) {
        return {
            [Op.and]: currentValues.slice(0, currentValues.length - 3).map(value => ({
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
        limit: perPage ? perPage: 4,
        offset,
        where: {
            [Op.and]: whereClauses
        }
    });

    return new Response(JSON.stringify(response), {status: 200});
}
