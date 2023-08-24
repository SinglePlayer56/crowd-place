import Post from "../models/post.js";
export const getPostHandler = async (req, res) => {
    try {
        const platform = await Post.findOne({
            where: {
                slugHref: req.params.postSlug
            }
        });
        res.status(200).json(platform);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
//# sourceMappingURL=get-post.js.map