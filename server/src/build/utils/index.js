import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';
const sequelize = new Sequelize('crowdplace_platform', 'crowdplace', '24Uqh8I$pLJK', {
    dialect: 'mysql',
    host: '82.202.167.53',
    dialectModule: mysql2,
    port: 3306
});
export default sequelize;
//# sourceMappingURL=index.js.map