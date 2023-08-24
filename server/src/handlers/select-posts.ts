import {Request, Response} from "express";
import Post from "../models/post.js";
import {Op} from "sequelize";

export const selectPostsHandler = async (req: Request, res: Response) => {
    try {
        const currentPage = req.query.page ? Number(req.query.page) : 1;
        const perPage = Number(req.query.perPage);
        const offset = (currentPage - 1) * perPage;
        const category = String(req.query.category);

        const whereClauses = generateWhereClauses(category);

        const response = await Post.findAndCountAll({
            order: [['id', 'DESC']],
            limit: perPage ? perPage : 3,
            offset,
            where: whereClauses
        })

        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

function generateWhereClauses (category: string | undefined) {
    if (category !== 'undefined') {
        return {
            slugCategory: {
                [Op.regexp]: category
            }
        }
    } else {
        return {}
    }
}
