import path from 'path';
import url from 'url';
import dotenv from "dotenv";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });
export const envVariable = process.env;
//# sourceMappingURL=envLoader.js.map