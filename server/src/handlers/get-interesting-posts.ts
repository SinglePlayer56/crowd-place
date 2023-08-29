import {literal, Op} from "sequelize";
import {Request, Response} from "express";
import Post from "../models/post.js";

const getInterestingPostsHandler = async (req: Request, res: Response) => {
    const slugPost = req.query.post as string;
    const slugCategory = req.query.category as string;

    const relatedCategory = slugCategory !== '' ? {[Op.regexp]: slugCategory} : {[Op.like]: `%${slugCategory}%`};

    try {
        const response = await Post.findAll({
            limit: 3,
            // order: [['id', 'DESC']], //разкомментировать для вывода последних добавленных в категории
            order: [literal('RAND()')],
            where: {
                slugHref: {
                    [Op.ne]: slugPost,
                },
                slugCategory: relatedCategory,
            },
        });

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default getInterestingPostsHandler;
