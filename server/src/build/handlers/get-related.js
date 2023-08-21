import Platform from "../models/platform.js";
import { Op } from "sequelize";
export const getRelatedHandler = async (req, res) => {
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
};
//# sourceMappingURL=get-related.js.map