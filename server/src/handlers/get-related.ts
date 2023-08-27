import Platform from "../models/platform.js";
import {Op} from "sequelize";
import {Request, Response} from "express";

const getRelatedHandler = async (req: Request, res: Response) => {
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
}

export default getRelatedHandler;
