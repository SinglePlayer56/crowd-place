import {Sequelize} from "sequelize";
import mysql2 from 'mysql2';

const sequelize = new Sequelize('crowdplace', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    dialectModule: mysql2,
    dialectOptions: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    }
});

export default sequelize;
