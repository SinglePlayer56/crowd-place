import {Request, Response} from "express";
import Post from "../models/platform.js";

export const getAllPostHandler = async (_: Request, res: Response) => {
    try {
        const allPlatform = await Post.findAll({
            order: [
                ['id', 'DESC']
            ]
        });

        res.status(200).json(allPlatform);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
