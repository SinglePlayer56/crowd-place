import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import sequelize from "../utils/connectDB.js";

class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
    declare id: CreationOptional<number>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare title: string;
    declare description: string;
    declare imagePath: string;
    declare category: string;
    declare slugHref: string;
    declare slugCategory: string;
    declare date: string;

}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imagePath: DataTypes.STRING,
    category: DataTypes.STRING,
    slugHref: DataTypes.STRING,
    slugCategory: DataTypes.STRING,
    date: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Post'
});

export default Post;
