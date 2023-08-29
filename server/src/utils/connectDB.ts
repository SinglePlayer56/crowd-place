import {Sequelize} from "sequelize";
import mysql2 from 'mysql2';
import {envVariable} from "../envLoader.js";

const env = envVariable;

const sequelize = new Sequelize(`${env.DB_NAME}`, `${env.DB_USER}`, `${env.DB_PASSWORD}`, {
    dialect: 'mysql',
    host: env.DB_HOST,
    dialectModule: mysql2
});

export default sequelize;
