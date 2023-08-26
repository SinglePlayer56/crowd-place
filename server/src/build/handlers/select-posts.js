import Post from "../models/post.js";
import { Op } from "sequelize";
export const selectPostsHandler = async (req, res) => {
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
        });
        res.status(200).json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
function generateWhereClauses(category) {
    if (category !== '') {
        return {
            slugCategory: {
                [Op.regexp]: category
            }
        };
    }
    else {
        return {};
    }
}
//# sourceMappingURL=select-posts.js.map