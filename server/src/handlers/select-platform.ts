import {Op} from "sequelize";
import Platform from "../models/platform.js";
import {Request, Response} from "express";
import {FilterType} from "../types/index.js";

const selectPlatformHandler = async (req: Request, res: Response) => {
    const currentPage = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    const offset = (currentPage - 1) * perPage;
    const typeFilters = (req.query.typeFilter as string).split('-');

    const queryParams = new URLSearchParams(req.url);
    let currentValues: string[] = [];

    for (const value of queryParams.values()) {
        currentValues.push(value);
    }

    currentValues = currentValues.slice(0, currentValues.length - 3);

    let emptyIndices = currentValues.reduce((indices, item, index) => {
        if (item === '') {
            // @ts-ignore
            indices.push(index);
        }
        return indices;
    }, []);

    // @ts-ignore
    emptyIndices.unshift(-1);
    // @ts-ignore
    emptyIndices.push(currentValues.length);

    const parts = emptyIndices.map((value, index, array) =>
        currentValues.slice(array[index] + 1, array[index + 1])
    );

    const whereClauses = typeFilters.map((filterType, index) =>
        generateDynamicFilter(filterType as FilterType, parts[index])
    );

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
                } else if (value === 'More than 5') {
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
            const filters: any = [];

            currentValues.forEach((value) => {
                if (value === 'Yes' && !currentValues.includes('No')) {
                    filters.push({
                        regulated: {
                            [Op.ne]: false,
                        },
                    })
                } else if (value === 'No' && !currentValues.includes('Yes')) {
                    filters.push({
                        regulated: {
                            [Op.ne]: true,
                        },
                    })
                } else if ((value === 'No' && currentValues.includes('Yes')) || (value === 'Yes' && currentValues.includes('No'))) {
                    filters.push({
                        regulated: {[Op.like]: '%%'},
                    })
                }
            })

            return {
                [Op.and]: filters
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

    const response = await Platform.findAndCountAll({
        order: [['id', 'DESC']],
        limit: perPage ? perPage : 4,
        offset,
        where: {
            [Op.and]: whereClauses
        }
    });

    res.status(200).json(response);
}

export default selectPlatformHandler;
