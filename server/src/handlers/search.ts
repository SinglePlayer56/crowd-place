import Platform from "../models/platform.js";
import {Op} from "sequelize";
import {Request, Response} from "express";
import Post from "../models/post.js";

export const searchHandler = async (req: Request, res: Response) => {
    const slugPlatform = req.query.searchParams as string;
    const limitPlatforms = Number(req.query.limitPlatforms as string);
    const limitPosts = Number(req.query.limitPosts as string);

    try {
        const platformResult = await Platform.findAll({
            //literal('RAND()') // для рандомного вывода
            order: [['id', 'DESC']],
            limit: limitPlatforms ? limitPlatforms : 0,
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${slugPlatform}%` } }
                ]
            },
        });

        const postResult = await Post.findAll({
            //literal('RAND()') // для рандомного вывода
            order: [['id', 'DESC']],
            limit: limitPosts ? limitPosts : 0,
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${slugPlatform}%` } }
                ]
            },
        });

        return res.status(200).json({platformResult, postResult});
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
