import express from 'express';
import {getAllPlatformHandler} from "./handlers/get-all-platform.js";
import {getPlatformHandler} from "./handlers/get-platform.js";
import {selectPlatformHandler} from "./handlers/select-platform.js";
import {getRelatedHandler} from "./handlers/get-related.js";
import {sendMailHandler} from "./handlers/send-mail.js";
import cors from 'cors';
import {envVariable} from "./envLoader.js";


const app = express();
const port = envVariable.PORT || 3001;

app.use(express.json());

app.use(cors({
    origin: 'http://1864875-cn27374.twc1.net:3000', // Разрешить запросы с этого домена
    methods: ['GET', 'POST'], // Разрешенные HTTP-методы
    allowedHeaders: ['Content-Type'], // Разрешенные заголовки
}));

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

app.post('/api/send-mail', sendMailHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
