import {Sequelize} from "sequelize";


const sequelize = new Sequelize('crowdplace_platform', 'crowdplace', '24Uqh8I$pLJK', {
    dialect: 'mysql',
    host: '82.202.167.53',
    dialectModule: require('mysql2'),
    port: 3306
});

export default sequelize;
