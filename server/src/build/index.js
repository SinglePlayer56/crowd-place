import express from 'express';
import { Op } from 'sequelize';
import Platform from "./models/platform.js";
const app = express();
const port = 3001;
app.get('/api/get-related/:industry', async (req, res) => {
    const slugPlatform = req.query.name;
    try {
        const response = await Platform.findAll({
            limit: 4,
            order: [['id', 'DESC']],
            where: {
                name: {
                    [Op.ne]: slugPlatform,
                },
                industry: {
                    [Op.regexp]: `${req.params.industry}`,
                },
            },
        });
        return res.status(200).json(response);
    }
    catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.get('/api/get-all', async (req, res) => {
    const currentPage = Number(req.query.page);
    const perPage = Number(req.query.perPage);
    const offset = (currentPage - 1) * perPage;
    try {
        const { count, rows } = await Platform.findAndCountAll({
            limit: perPage || 4,
            offset,
            order: [['id', 'DESC']],
        });
        return res.status(200).json({ count, rows });
    }
    catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.get('/api/add-platform', async (req, res) => {
    try {
        const allPlatform = await Platform.findAll({
            order: [
                ['id', 'DESC']
            ]
        });
        res.status(200).json(allPlatform);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.get('/api/add-platform/:platform', async (req, res) => {
    try {
        const count = await Platform.findOne({
            where: {
                slug: req.params.platform
            }
        });
        res.status(200).json(count);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.get('/api/get-type/investment/', async (req, res) => {
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
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map