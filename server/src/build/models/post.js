import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/index.js";
class Post extends Model {
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
//# sourceMappingURL=post.js.map