import {Sequelize} from "sequelize";
import mysql2 from 'mysql2';

const sequelize = new Sequelize('crowdplace', 'root', 'singleplayer56', {
    dialect: 'mysql',
    host: '134.122.77.191',
    dialectModule: mysql2
});

export default sequelize;
