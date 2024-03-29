import {Request, Response} from "express";
import Post from "../models/post.js";

const getPostHandler = async (req: Request, res: Response) => {
    try {
        const platform = await Post.findOne({
            where: {
                slugHref: req.params.postSlug
            }
        });

        res.status(200).json(platform);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default getPostHandler;
