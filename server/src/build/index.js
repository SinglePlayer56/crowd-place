import express from 'express';
import { getAllPlatformHandler } from "./handlers/get-all-platform.js";
import { getPlatformHandler } from "./handlers/get-platform.js";
import { selectPlatformHandler } from "./handlers/select-platform.js";
import { getRelatedHandler } from "./handlers/get-related.js";
import cors from 'cors';
import { envVariable } from "./envLoader.js";
import { selectPostsHandler } from "./handlers/select-posts.js";
import { getPostHandler } from "./handlers/get-post.js";
import { getInterestingPostsHandler } from "./handlers/get-interesting-posts.js";
import { searchHandler } from "./handlers/search.js";
const app = express();
const port = envVariable.PORT || 3001;
app.use(express.json());
app.use(cors({
    origin: 'http://1864875-cn27374.twc1.net',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.get('/api/get-related/:industry', getRelatedHandler);
app.get('/api/get-all-platforms', getAllPlatformHandler);
app.get('/api/get-platform/:platform', getPlatformHandler);
app.get('/api/select-platforms', selectPlatformHandler);
app.get('/api/select-posts', selectPostsHandler);
app.get('/api/get-post/:postSlug', getPostHandler);
app.get('/api/get-interesting-posts', getInterestingPostsHandler);
app.get('/api/search', searchHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map