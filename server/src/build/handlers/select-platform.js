import { Op } from "sequelize";
import Platform from "../models/platform.js";
export const selectPlatformHandler = async (req, res) => {
    const currentPage = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    const offset = (currentPage - 1) * perPage;
    const typeFilters = req.query.typeFilter.split('-');
    const queryParams = new URLSearchParams(req.url);
    let currentValues = [];
    for (const value of queryParams.values()) {
        currentValues.push(value);
    }
    currentValues = currentValues.slice(0, currentValues.length - 3);
    let emptyIndices = currentValues.reduce((indices, item, index) => {
        if (item === '') {
            indices.push(index);
        }
        return indices;
    }, []);
    emptyIndices.unshift(-1);
    emptyIndices.push(currentValues.length);
    const parts = emptyIndices.map((value, index, array) => currentValues.slice(array[index] + 1, array[index + 1]));
    const whereClauses = typeFilters.map((filterType, index) => generateDynamicFilter(filterType, parts[index]));
    function generateDynamicFilter(type, currentValues) {
        if (type === 'yearFounded') {
            const currentYear = new Date().getFullYear();
            const filters = [];
            currentValues.forEach(value => {
                if (value === '1 year') {
                    filters.push({
                        [type]: {
                            [Op.gte]: currentYear - 1,
                        },
                    });
                }
                else if (value === '2-3 years') {
                    filters.push({
                        [type]: {
                            [Op.between]: [currentYear - 3, currentYear - 2],
                        },
                    });
                }
                else if (value === '4-5 years') {
                    filters.push({
                        [type]: {
                            [Op.between]: [currentYear - 5, currentYear - 4],
                        },
                    });
                }
                else if (value === 'more than 5') {
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
        }
        else if (type === 'licenseNumber') {
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
            };
        }
        else {
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
};
//# sourceMappingURL=select-platform.js.map