import {Op} from "sequelize";
import {Request, Response} from "express";
import Post from "../models/post.js";

const getInterestingPostsHandler = async (req: Request, res: Response) => {
    const slugPost = req.query.post as string;
    const slugCategory = req.query.category as string;

    try {
        const response = await Post.findAll({
            limit: 3,
            order: [['id', 'DESC']],
            where: {
                slugHref: {
                    [Op.ne]: slugPost,
                },
                slugCategory: {
                    [Op.regexp]: slugCategory,
                },
            },
        });

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default getInterestingPostsHandler;
