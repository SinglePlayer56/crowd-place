import {IPost} from "../types/index.js";
import sequelize from "../utils/index.js";
import Post from "../models/post.js";


const postTemplates: IPost[] = [
    {
        title: 'Advantages and Disadvantages of Crowdfunding',
        description: 'Pros and Cons of Crowdfunding in 2023 for investors and startups.',
        imagePath: '/img/blog_card_1.png',
        category: 'P2P Lending',
        slugHref: 'advantages-and-disadvantages-of-crowdfunding',
        slugCategory: 'p2p-lending',
        date: '24.08.2023'
    },
    {
        title: 'Alternative property investments',
        description: 'Investors who want to diversify their portfolio, or invest in real estate in a more passive way, can take alternatives to property investments. Each sector has unique advantages and risks, so investing in various alternatives can be a good move.',
        imagePath: '/img/blog_card_2.png',
        category: 'P2P Lending',
        slugHref: 'alternative-property-investments',
        slugCategory: 'p2p-lending',
        date: '25.08.2023'
    },
    {
        title: 'Best P2P (peer-to-peer) Lending in The UK 2023',
        description: 'There are a large number of P2P lending platforms in the UK, where you can earn returns as an individual. Our research has shown that the highest return on P2P lending is 71%.',
        imagePath: '/img/blog_card_3.png',
        category: 'P2P Lending',
        slugHref: 'best-peer-to-peer-lending',
        slugCategory: 'p2p-lending',
        date: '26.08.2023'
    },
    {
        title: 'Best Crowdfunding Property Platforms',
        description: 'Crowdfunding for Real Estate: Is it possible to purchase a property using crowdfunding platforms for real estate?',
        imagePath: '/img/blog_card_1.png',
        category: 'P2P Lending',
        slugHref: 'crowdfunding-property',
        slugCategory: 'p2p-lending',
        date: '27.08.2023'
    },
    {
        title: 'Best Crowdlending Platforms in Europe 2023',
        description: 'Crowdlending platforms offer a great opportunity for individuals to extend loans to those in need of financial assistance.',
        imagePath: '/img/blog_card_2.png',
        category: 'P2P Lending',
        slugHref: 'crowdlending',
        slugCategory: 'p2p-lending',
        date: '28.08.2023'
    },
    {
        title: 'Advantages and Disadvantages of Peer-to-Peer (P2P) Lending',
        description: ' Pros and Cons of Peer-to-Peer (P2P) lending in 2023 for investors and individuals who want to borrow.',
        imagePath: '/img/blog_card_3.png',
        category: 'P2P Lending',
        slugHref: 'advantages-and-disadvantages-of-p2p',
        slugCategory: 'p2p-lending',
        date: '29.08.2023'
    },
]


const createPost = async (posts: IPost[]) => {

    // await sequelize.sync({force: true});

    for (const post of posts) {
        await Post.create(post);
    }

    await sequelize.close();
}

createPost(postTemplates);
