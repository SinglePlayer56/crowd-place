import {Request, Response} from "express";
import Platform from "../models/platform.js";

const getPlatformHandler = async (req: Request, res: Response) => {
    try {
        const platform = await Platform.findOne({
            where: {
                slug: req.params.platform
            }
        });

        res.status(200).json(platform);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default getPlatformHandler;
