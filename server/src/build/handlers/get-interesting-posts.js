import { Op } from "sequelize";
import Post from "../models/post.js";
export const getInterestingPostsHandler = async (req, res) => {
    const slugPost = req.query.post;
    const slugCategory = req.query.category;
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
    }
    catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
//# sourceMappingURL=get-interesting-posts.js.map