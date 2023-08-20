import express from 'express';
import { Op } from 'sequelize';
import Platform from "./models/platform.js";
import { createProxyMiddleware } from 'http-proxy-middleware';

type FilterType = 'investmentType' | 'industry' | 'country' | 'yearFounded' | 'licenseNumber';


const app = express();
const port = 3001;

// app.use(
//     '/api2/',
//     createProxyMiddleware({
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         onProxyReq: (proxyReq, req, res) => {
//             if (req.url.startsWith('/get-type/investment/')) {
//                 // Преобразуем запрос к вашему серверу Next.js, убирая '/api' из пути
//                 proxyReq.path = req.url.replace('/api2', '');
//             }
//         },
//     })
// );
app.get('/api/get-related/:industry', async (req: any, res: any) => {
    const slugPlatform = req.query.name as string;

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
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.get('/api/get-all', async (req: any, res: any) => {
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
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/api/add-platform', async (req: any, res: any) => {
    try {
        const allPlatform = await Platform.findAll({
            order: [
                ['id', 'DESC']
            ]
        });

        res.status(200).json(allPlatform);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/api/add-platform/:platform', async (req: any, res: any) => {
    try {
        const count = await Platform.findOne({
            where: {
                slug: req.params.platform
            }
        });

        res.status(200).json(count);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/api/get-type/investment/', async (req, res) => {
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
