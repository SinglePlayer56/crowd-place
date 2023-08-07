import {Sequelize} from "sequelize";


const sequelize = new Sequelize('crowd-platform', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    dialectModule: require('mysql2')
});

export default sequelize;
