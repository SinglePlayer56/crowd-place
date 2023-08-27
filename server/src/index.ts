import express, {Response} from 'express';
import {getAllPlatformHandler} from "./handlers/get-all-platform.js";
import {getPlatformHandler} from "./handlers/get-platform.js";
import {selectPlatformHandler} from "./handlers/select-platform.js";
import {getRelatedHandler} from "./handlers/get-related.js";
import cors from 'cors';
import {envVariable} from "./envLoader.js";
import {selectPostsHandler} from "./handlers/select-posts.js";
import {getPostHandler} from "./handlers/get-post.js";
import {getInterestingPostsHandler} from "./handlers/get-interesting-posts.js";
import {searchHandler} from "./handlers/search.js";


const app = express();
const port = envVariable.PORT || 3001;

app.use(express.json());

app.use(cors({
    origin: 'http://1864875-cn27374.twc1.net:3002', // Разрешить запросы с этого домена
    methods: ['GET', 'POST'], // Разрешенные HTTP-методы
    allowedHeaders: ['Content-Type'], // Разрешенные заголовки
}));

app.use((req: any, res: Response, next) => {
    // Перенаправляем запросы с порта 3002 на порт 3001
    if (req.hostname === envVariable.DOMAIN && req.port === '3002') {
        const redirectUrl = `http://${req.hostname}:3001${req.url}`;
        return res.redirect(redirectUrl);
    }
    next();
});

// app.use(
//     '/api2/',
//     createProxyMiddleware({
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         onProxyReq: (proxyReq, req, res) => {
//             if (req.url.startsWith('/get-type/investment/')) {
//                 // Преобразуем запрос к вашему серверу Next.js, убирая '/api' из пути
//                 proxyReq.path = req.url.replace('/api2', '');
//             }
//         },
//     })
// );
app.get('/api/get-related/:industry', getRelatedHandler);

app.get('/api/get-all-platforms', getAllPlatformHandler);

app.get('/api/get-platform/:platform', getPlatformHandler);

app.get('/api/select-platforms', selectPlatformHandler);

app.get('/api/select-posts', selectPostsHandler);

app.get('/api/get-post/:postSlug', getPostHandler);

app.get('/api/get-interesting-posts', getInterestingPostsHandler);

app.get('/api/search', searchHandler);

// app.post('/api/send-mail', sendMailHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
