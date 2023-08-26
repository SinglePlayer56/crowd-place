import Platform from "../models/platform.js";
import {Op} from "sequelize";
import {Request, Response} from "express";
import Post from "../models/post.js";

export const searchHandler = async (req: Request, res: Response) => {
    const slugPlatform = req.query.searchParams as string;
    const currentPlatformsPage = req.query.platformsPage ? Number(req.query.platformsPage as string) : 1;
    const currentPostsPage = req.query.postsPage ? Number(req.query.postsPage as string) : 1;
    const limitPlatforms = req.query.limitPlatforms ? Number(req.query.limitPlatforms as string) : 5;
    const limitPosts = req.query.limitPosts ? Number(req.query.limitPosts as string) : 5;
    const offsetPlatforms = (currentPlatformsPage - 1) * limitPlatforms;
    const offsetPosts = (currentPostsPage - 1) * limitPosts;

    try {
        const platformResult = await Platform.findAndCountAll({
            //literal('RAND()') // для рандомного вывода
            order: [['id', 'DESC']],
            limit: limitPlatforms,
            offset: offsetPlatforms,
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${slugPlatform}%` } }
                ]
            },
        });

        const postResult = await Post.findAndCountAll({
            //literal('RAND()') // для рандомного вывода
            order: [['id', 'DESC']],
            limit: limitPosts,
            offset: offsetPosts,
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${slugPlatform}%` } }
                ]
            },
        });

        return res.status(200).json({
            platformResult: platformResult.rows,
            postResult: postResult.rows,
            totalPlatform: platformResult.count,
            totalPosts: postResult.count
        });
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
