import Platform from "../models/platform.js";
export const getAllPlatformHandler = async (_, res) => {
    try {
        const allPlatform = await Platform.findAll({
            order: [
                ['id', 'DESC']
            ]
        });
        res.status(200).json(allPlatform);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
//# sourceMappingURL=get-all-platform.js.map