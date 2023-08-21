import Platform from "../models/platform.js";
export const getPlatformHandler = async (req, res) => {
    try {
        const platform = await Platform.findOne({
            where: {
                slug: req.params.platform
            }
        });
        res.status(200).json(platform);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
//# sourceMappingURL=get-platform.js.map