import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import sequelize from "../utils/index.js";

class Platform extends Model<InferAttributes<Platform>, InferCreationAttributes<Platform>> {
    declare id: CreationOptional<number>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare name: string;
    declare logo: string;
    declare country: string;
    declare investmentType: string;
    declare industry: string;
    declare yearFounded: string;
    declare licenseNumber: string;
    declare languages: string;
    declare reviews: string;
    declare website: string;
    declare minimumInvestment: string;
    declare advertisedReturn: string;
    declare investors: string;
    declare paymentOptions: string;
    declare totalFundingVolume: string;
    declare averageLoanDuration: string;
    declare description: string;
    declare regulated: boolean;
    declare buybackGuarantee: boolean;
    declare publicStatistics: boolean;
    declare signupBonus: boolean;
    declare secondaryMarket: boolean;
    declare autoInvest: boolean;
    declare whoCanInvest: string;
    declare slug: string;
}

Platform.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    country: {
        type: DataTypes.TEXT,
        get() {
            const value = this.getDataValue('country');
            return value ? JSON.parse(value) : [];
        },
        set(value) {
            if (typeof value === 'string') {
                const arr = value.split(',');
                const trimValue = arr.map((item: string) => item.trim());
                this.setDataValue('country', JSON.stringify(trimValue));
            }
        },
    },
    investmentType: {
        type: DataTypes.STRING,
        get() {
            const value = this.getDataValue('investmentType');
            return value ? JSON.parse(value) : [];
        },
        set(value) {
            if (typeof value === 'string') {
                const arr = value.split(',');
                const trimValue = arr.map((item: string) => item.trim());
                this.setDataValue('investmentType', JSON.stringify(trimValue));
            }
        },
    },
    industry: {
        type: DataTypes.STRING,
        get() {
            const value = this.getDataValue('industry');
            return value ? JSON.parse(value) : [];
        },
        set(value) {
            if (typeof value === 'string') {
                const arr = value.split(',');
                const trimValue = arr.map((item: string) => item.trim());
                this.setDataValue('industry', JSON.stringify(trimValue));
            }
        },
    },
    yearFounded: DataTypes.STRING,
    licenseNumber: DataTypes.STRING,
    languages: {
        type: DataTypes.STRING,
        get() {
            const value = this.getDataValue('languages');
            return value ? JSON.parse(value) : [];
        },
        set(value) {
            if (typeof value === 'string') {
                const arr = value.split(',');
                const trimValue = arr.map((item: string) => item.trim());
                this.setDataValue('languages', JSON.stringify(trimValue));
            }
        },
    },
    reviews: DataTypes.STRING,
    website: DataTypes.TEXT,
    minimumInvestment: DataTypes.STRING,
    advertisedReturn: DataTypes.STRING,
    investors: DataTypes.STRING,
    paymentOptions: {
        type: DataTypes.STRING,
        get() {
            const value = this.getDataValue('paymentOptions');
            return value ? JSON.parse(value) : [];
        },
        set(value) {
            if (typeof value === 'string') {
                const arr = value.split(',');
                const trimValue = arr.map((item: string) => item.trim());
                this.setDataValue('paymentOptions', JSON.stringify(trimValue));
            }
        },
    },
    totalFundingVolume: DataTypes.STRING,
    averageLoanDuration: DataTypes.STRING,
    description: DataTypes.TEXT,
    regulated: DataTypes.BOOLEAN,
    buybackGuarantee: DataTypes.BOOLEAN,
    publicStatistics: DataTypes.BOOLEAN,
    signupBonus: DataTypes.BOOLEAN,
    secondaryMarket: DataTypes.BOOLEAN,
    autoInvest: DataTypes.BOOLEAN,
    whoCanInvest: DataTypes.TEXT,
    slug: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Platform'
});

export default Platform;
