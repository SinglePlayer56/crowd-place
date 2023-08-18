import {CrowdfundingCardProps} from "@/components/CrowdfundingCard/CrowdfundingCard.props";
import {FilterProps} from "@/components/Filter/Filter.props";
import {BlogCardProps} from "@/components/BlogCard/BlogCard.props";
import {CountryListProps} from "@/components/CountryList/CountryList.props";
import {PlatformData} from "@/types";

export const CrowdfundingCardValues: CrowdfundingCardProps[] = [
    {
        title: 'P2P lending platforms',
        iconPath: '/icons/people.svg'
    },
    {
        title: 'Equity crowdfunding platforms',
        iconPath: '/icons/money.svg'
    },
    {
        title: 'Property crowdfunding platforms',
        iconPath: '/icons/home.svg'
    },
    {
        title: 'Startup crowdfunding platforms',
        iconPath: '/icons/rocket.svg'
    },
    {
        title: 'Personal loans crowdfunding platforms',
        iconPath: '/icons/coins.svg'
    },
    {
        title: 'Green energy crowdfunding platforms',
        iconPath: '/icons/leaf.svg'
    },
    {
        title: 'Crowdfunding platform for education',
        iconPath: '/icons/book.svg'
    },
    {
        title: 'Debt crowdfunding platform',
        iconPath: '/icons/hand-coins.svg'
    }
]

export const SelectFiltersValues: { options: string[], placeholder: string }[] = [
    {
        options: ['Equity', 'Debt', 'P2P lending', 'Reward', 'Donation', 'Buy-to-let', 'Mini-bonds'],
        placeholder: 'Select investment type'
    },
    {
        options: ['Real estate', 'Startups', 'SME', 'Sustainability', 'Litigation', 'Green energy', 'Health & Science', 'Logistics', 'Personal loans', 'Art', 'Mortgages', 'Social cause', 'Education', 'Farming', 'Sport', 'Maritime'],
        placeholder: 'Select industry'
    },
    {
        options: ['Andorra', 'Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Israel', 'Italy', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Monaco', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Turkey', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom', 'Ukraine'],
        placeholder: 'Select country of operation'
    },
    {
        options: ['1 year', '2-3 years', '4-5 years', 'more than 5'],
        placeholder: 'Years on market'
    },
    {
        options: ['Yes'],
        placeholder: 'ECSP license'
    },
]

export const BlogCardsValues: BlogCardProps[] = [
    {
        pathImage: '/img/blog_card_1.png',
        title: 'Making a difference: the power and potential of impact investing1',
        text: 'Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values.',
        tag: 'Investing',
        date: 'June 12, 2023'
    },
    {
        pathImage: '/img/blog_card_2.png',
        title: 'P2P mortgage loans: unlocking opportunities in the accommodation market',
        text: 'The demand for accommodation and prices are growing, so many people worldwide opt for mortgage loans. Getting a mortgage loan from a bank is a long and demanding procedure that’s why peer-to-peer lending alternatives is increasing in popularity.',
        tag: 'P2P lending',
        date: 'June 12, 2023'
    },
    {
        pathImage: '/img/blog_card_3.png',
        title: 'Most common equity crowdfunding mistakes: unveiling the pitfalls',
        text: 'Crowdfunding, particularly equity crowdfunding, has already shown that it’s a viable alternative for startups and early-stage businesses to raise funding. As straightforward as it may seem, there are quite a few intricacies that, when overlooked, can damage your campaign.',
        tag: 'Crowdfunding business',
        date: 'June 12, 2023'
    },
    {
        pathImage: '/img/blog_card_1.png',
        title: 'Making a difference: the power and potential of impact investing2',
        text: 'Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values.',
        tag: 'Investing',
        date: 'June 12, 2023'
    },
    {
        pathImage: '/img/blog_card_2.png',
        title: 'P2P mortgage loans: unlocking opportunities in the accommodation market',
        text: 'The demand for accommodation and prices are growing, so many people worldwide opt for mortgage loans. Getting a mortgage loan from a bank is a long and demanding procedure that’s why peer-to-peer lending alternatives is increasing in popularity.',
        tag: 'P2P lending',
        date: 'June 12, 2023'
    },
    {
        pathImage: '/img/blog_card_3.png',
        title: 'Most common equity crowdfunding mistakes: unveiling the pitfalls',
        text: 'Crowdfunding, particularly equity crowdfunding, has already shown that it’s a viable alternative for startups and early-stage businesses to raise funding. As straightforward as it may seem, there are quite a few intricacies that, when overlooked, can damage your campaign.',
        tag: 'Crowdfunding business',
        date: 'June 12, 2023'
    },
    {
        pathImage: '/img/blog_card_1.png',
        title: 'Making a difference: the power and potential of impact investing3',
        text: 'Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values.',
        tag: 'Investing',
        date: 'June 12, 2023'
    },
    {
        pathImage: '/img/blog_card_2.png',
        title: 'P2P mortgage loans: unlocking opportunities in the accommodation market',
        text: 'The demand for accommodation and prices are growing, so many people worldwide opt for mortgage loans. Getting a mortgage loan from a bank is a long and demanding procedure that’s why peer-to-peer lending alternatives is increasing in popularity.',
        tag: 'P2P lending',
        date: 'June 12, 2023'
    },
    {
        pathImage: '/img/blog_card_3.png',
        title: 'Most common equity crowdfunding mistakes: unveiling the pitfalls',
        text: 'Crowdfunding, particularly equity crowdfunding, has already shown that it’s a viable alternative for startups and early-stage businesses to raise funding. As straightforward as it may seem, there are quite a few intricacies that, when overlooked, can damage your campaign.',
        tag: 'Crowdfunding business',
        date: 'June 12, 2023'
    },
]

export const CountryListValue: CountryListProps[] = [
    {country: 'Austria', pathFlag: '/flags/Austria.svg'},
    {country: 'Belgium', pathFlag: '/flags/Belgium.svg'},
    {country: 'Croatia', pathFlag: '/flags/Croatia.svg'},
    {country: 'Cyprus', pathFlag: '/flags/Cyprus.svg'},
    {country: 'Czech Republic', pathFlag: '/flags/Czech_Republic.svg'},
    {country: 'Denmark', pathFlag: '/flags/Denmark.svg'},
    {country: 'Estonia', pathFlag: '/flags/Estonia.svg'},
    {country: 'Finland', pathFlag: '/flags/Finland.svg'},
    {country: 'France', pathFlag: '/flags/France.svg'},
    {country: 'Germany', pathFlag: '/flags/Germany.svg'},
    {country: 'Greece', pathFlag: '/flags/Greece.svg'},
    {country: 'Ireland', pathFlag: '/flags/Ireland.svg'},
    {country: 'Italy', pathFlag: '/flags/Italy.svg'},
    {country: 'Latvia', pathFlag: '/flags/Latvia.svg'},
    {country: 'Lithuania', pathFlag: '/flags/Lithuania.svg'},
    {country: 'Luxembourg', pathFlag: '/flags/Luxembourg.svg'},
    {country: 'Malta', pathFlag: '/flags/Malta.svg'},
    {country: 'Netherlands', pathFlag: '/flags/Netherlands.svg'},
    {country: 'Norway', pathFlag: '/flags/Norway.svg'},
    {country: 'Poland', pathFlag: '/flags/Poland.svg'},
    {country: 'Portugal', pathFlag: '/flags/Portugal.svg'},
    {country: 'Romania', pathFlag: '/flags/Romania.svg'},
    {country: 'Slovakia', pathFlag: '/flags/Slovakia.svg'},
    {country: 'Spain', pathFlag: '/flags/Spain.svg'},
    {country: 'Sweden', pathFlag: '/flags/Sweden.svg'},
    {country: 'Switzerland', pathFlag: '/flags/Switzerland.svg'},
    {country: 'Ukraine', pathFlag: '/flags/Ukraine.svg'},
    {country: 'United Kingdom', pathFlag: '/flags/United_Kingdom.svg'}
]

// const investmentTypeSlugs = ['buy-to-let', 'debt', 'donation', 'equity', 'mini-bonds', 'p2p-lending', 'reward'];
// const industrySlugs = ['real-estate', 'startups', 'sme', 'sustainability', 'litigation', 'green-energy', 'health-science', 'logistics', 'personal-loans', 'art', 'mortgages', 'social-cause', 'education', 'farming', 'sport', 'maritime'];
// const countrySlugs = ['andorra', 'albania', 'austria', 'belgium', 'bulgaria', 'croatia', 'cyprus', 'czech-republic', 'denmark', 'estonia', 'finland', 'france', 'germany', 'greece', 'hungary', 'iceland', 'ireland', 'israel', 'italy', 'latvia', 'liechtenstein', 'lithuania', 'luxembourg', 'macedonia', 'malta', 'moldova', 'monaco', 'netherlands', 'norway', 'poland', 'portugal', 'romania', 'turkey', 'serbia', 'slovakia', 'slovenia', 'spain', 'sweden', 'switzerland', 'united-kingdom', 'ukraine'];
// const yearFoundedSlugs = ['1-year', '2-3-years', '4-5-years', 'more-than-5'];
// const licenseNumberSlugs = ['yes'];


// export const industryCombinationPaths = generateCombinations(industrySlugs).slice(1);
// export const countryCombinationPaths = generateCombinations(countrySlugs).slice(1);
// export const yearFoundedCombinationPaths = generateCombinations(yearFoundedSlugs).slice(1);
// export const licenseNumberCombinationPaths = generateCombinations(licenseNumberSlugs).slice(1);
