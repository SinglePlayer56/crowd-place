import {IPost} from "../types/index.js";
import sequelize from "../utils/connectDB.js";
import Post from "../models/post.js";


const postTemplates: IPost[] = [
    {
        title: 'Property development investment',
        description: 'In the article we take you through some examples of property development investments where you can get started with little money.',
        imagePath: '/img/blog_card_1.png',
        category: 'Property Crowdfunding',
        slugHref: 'property-development-investment',
        slugCategory: 'property-crowdfunding',
        date: '31.08.2023'
    },
    {
        title: 'Peer-to-peer (P2P) ISA Lending',
        description: 'More and more people are starting to invest and looking for alternative ways to grow their wealth. A P2P ISA can be a suitable solution here, to achieve high returns in a tax-free way.',
        imagePath: '/img/blog_card_2.png',
        category: 'P2P Lending',
        slugHref: 'p2p-isa',
        slugCategory: 'p2p-lending',
        date: '31.08.2023'
    }
]


const createPost = async (posts: IPost[]) => {

    // await sequelize.sync({force: true});

    for (const post of posts) {
        await Post.create(post);
    }

    await sequelize.close();
}

createPost(postTemplates);
