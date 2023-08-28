import express, {Request, Response} from 'express';
import cors from 'cors';
import {envVariable} from "./envLoader.js";
import bodyParser from "body-parser";
import {
    getAllPlatformHandler,
    getPlatformHandler, getPostHandler,
    getRelatedHandler, searchHandler,
    selectPlatformHandler,
    selectPostsHandler, sendMailHandler
} from "./handlers/index.js";
import getInterestingPostsHandler from "./handlers/get-interesting-posts.js";
import Platform from "./models/platform.js";
import {Op} from "sequelize";


const app = express();
const port = envVariable.PORT || 3003;

app.set('trust proxy', true);
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({limit: '10mb'}));

app.use(cors({
    origin: [
        'https://crowd-place.com',
        'https://crowd-place.com:3001',
        'https://crowd-place.com:3002',
        'http://1864875-cn27374.twc1.net:3002',
        'http://localhost:3000',
        'http://1864875-cn27374.twc1.net'
    ], // Разрешить запросы с этого домена
    methods: ['GET', 'POST'], // Разрешенные HTTP-методы
    allowedHeaders: ['Content-Type'], // Разрешенные заголовки
}));

app.get('/api/test-get/', async (req: Request, res: Response) => {
    try {
        return res.status(200).json({message: 'Success'});
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.get('/api/get-related/:industry/', getRelatedHandler);

app.get('/api/get-all-platforms/', getAllPlatformHandler);

app.get('/api/get-platform/:platform/', getPlatformHandler);

app.get('/api/select-platforms/', selectPlatformHandler);

app.get('/api/select-posts/', selectPostsHandler);

app.get('/api/get-post/:postSlug/', getPostHandler);

app.get('/api/get-interesting-posts/', getInterestingPostsHandler);

app.get('/api/search/', searchHandler);

app.post('/api/send-mail/', sendMailHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
