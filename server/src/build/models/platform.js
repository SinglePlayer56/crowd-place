import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/index.js";
class Platform extends Model {
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
                const trimValue = arr.map((item) => item.trim());
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
                const trimValue = arr.map((item) => item.trim());
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
                const trimValue = arr.map((item) => item.trim());
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
                const trimValue = arr.map((item) => item.trim());
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
                const trimValue = arr.map((item) => item.trim());
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
//# sourceMappingURL=platform.js.map