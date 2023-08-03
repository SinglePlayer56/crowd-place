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

export const SelectFiltersValues: FilterProps[] = [
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

export const PlatformDataValue: PlatformData[] = [
    {
        name: 'Crowd2Fund1',
        pathLogo: '/platformLogo/Crowd2Fund.png',
        country: [' United Kingdom ', 'USA'],
        type: ['Equity', 'Debt', 'P2P lending', 'Reward'],
        industry: [' SME '],
        year: '2014',
        license: '08472687',
        language: ['English'],
        reviewLink: 'https://www.trustpilot.com/review/www.crowd2fund.com',
        website: 'https://www.crowd2fund.com/register?rc=npvzn9',
        minimumInvestment: '100 GBP',
        advertisedReturn: '6-18%',
        investors: 'N/A',
        paymentOptions: ['N/A'],
        totalFundingVolume: 'N/A',
        averageLoanDuration: 'N/A',
        description: 'The only investment platform in the UK where investors choose the British entrepreneurs they back. Over £6m in interest paid out to investors from more than 617 unique opportunities.Crowd2Fund is an alternative solution to an out-of-date f... Read more',
        regulated: false,
        buyBack: false,
        publicStatistics: false,
        signupBonus: false,
        secondaryMarket: true,
        autoInvest: false,
        slug: 'Crowd2Fund1',
        whoCanInvest: 'Retail Investors, Accredited Investors'
    },
    {
        name: 'Crowd2Fund2',
        pathLogo: '/platformLogo/Crowd2Fund.png',
        country: [' United Kingdom '],
        type: ['Equity', 'Debt', 'P2P lending', 'Reward'],
        industry: [' SME '],
        year: '2014',
        license: '08472687',
        language: ['English'],
        reviewLink: 'https://www.trustpilot.com/review/www.crowd2fund.com',
        website: 'https://www.crowd2fund.com/register?rc=npvzn9',
        minimumInvestment: '100 GBP',
        advertisedReturn: '6-18%',
        investors: 'N/A',
        paymentOptions: ['N/A'],
        totalFundingVolume: 'N/A',
        averageLoanDuration: 'N/A',
        description: 'The only investment platform in the UK where investors choose the British entrepreneurs they back. Over £6m in interest paid out to investors from more than 617 unique opportunities.Crowd2Fund is an alternative solution to an out-of-date f... Read more',
        regulated: false,
        buyBack: false,
        publicStatistics: false,
        signupBonus: false,
        secondaryMarket: true,
        autoInvest: false,
        slug: 'Crowd2Fund2',
        whoCanInvest: 'Retail Investors, Accredited Investors'
    },
    {
        name: 'Crowd2Fund3',
        pathLogo: '/platformLogo/Crowd2Fund.png',
        country: [' United Kingdom '],
        type: ['Equity', 'Debt', 'P2P lending', 'Reward'],
        industry: [' SME '],
        year: '2014',
        license: '08472687',
        language: ['English'],
        reviewLink: 'https://www.trustpilot.com/review/www.crowd2fund.com',
        website: 'https://www.crowd2fund.com/register?rc=npvzn9',
        minimumInvestment: '100 GBP',
        advertisedReturn: '6-18%',
        investors: 'N/A',
        paymentOptions: ['N/A'],
        totalFundingVolume: 'N/A',
        averageLoanDuration: 'N/A',
        description: 'The only investment platform in the UK where investors choose the British entrepreneurs they back. Over £6m in interest paid out to investors from more than 617 unique opportunities.Crowd2Fund is an alternative solution to an out-of-date f... Read more',
        regulated: false,
        buyBack: false,
        publicStatistics: false,
        signupBonus: false,
        secondaryMarket: true,
        autoInvest: false,
        slug: 'crowd3',
        whoCanInvest: 'Retail Investors, Accredited Investors'
    },
    {
        name: 'Crowd2Fund4',
        pathLogo: '/platformLogo/Crowd2Fund.png',
        country: [' United Kingdom '],
        type: ['Equity', 'Debt', 'P2P lending', 'Reward'],
        industry: [' SME '],
        year: '2014',
        license: '08472687',
        language: ['English'],
        reviewLink: 'https://www.trustpilot.com/review/www.crowd2fund.com',
        website: 'https://www.crowd2fund.com/register?rc=npvzn9',
        minimumInvestment: '100 GBP',
        advertisedReturn: '6-18%',
        investors: 'N/A',
        paymentOptions: ['N/A'],
        totalFundingVolume: 'N/A',
        averageLoanDuration: 'N/A',
        description: 'The only investment platform in the UK where investors choose the British entrepreneurs they back. Over £6m in interest paid out to investors from more than 617 unique opportunities.Crowd2Fund is an alternative solution to an out-of-date f... Read more',
        regulated: false,
        buyBack: false,
        publicStatistics: false,
        signupBonus: false,
        secondaryMarket: true,
        autoInvest: false,
        slug: 'crowd4',
        whoCanInvest: 'Retail Investors, Accredited Investors'
    },
    {
        name: 'Crowd2Fund5',
        pathLogo: '/platformLogo/Crowd2Fund.png',
        country: [' United Kingdom '],
        type: ['Equity', 'Debt', 'P2P lending', 'Reward'],
        industry: [' SME '],
        year: '2014',
        license: '08472687',
        language: ['English'],
        reviewLink: 'https://www.trustpilot.com/review/www.crowd2fund.com',
        website: 'https://www.crowd2fund.com/register?rc=npvzn9',
        minimumInvestment: '100 GBP',
        advertisedReturn: '6-18%',
        investors: 'N/A',
        paymentOptions: ['N/A'],
        totalFundingVolume: 'N/A',
        averageLoanDuration: 'N/A',
        description: 'The only investment platform in the UK where investors choose the British entrepreneurs they back. Over £6m in interest paid out to investors from more than 617 unique opportunities.Crowd2Fund is an alternative solution to an out-of-date f... Read more',
        regulated: false,
        buyBack: false,
        publicStatistics: false,
        signupBonus: false,
        secondaryMarket: true,
        autoInvest: false,
        slug: 'crowd5',
        whoCanInvest: 'Retail Investors, Accredited Investors'
    },
    {
        name: 'Crowd2Fund6',
        pathLogo: '/platformLogo/Crowd2Fund.png',
        country: [' United Kingdom'],
        type: ['Equity', 'Debt', 'P2P lending', 'Reward'],
        industry: [' SME '],
        year: '2014',
        license: '08472687',
        language: ['English'],
        reviewLink: 'https://www.trustpilot.com/review/www.crowd2fund.com',
        website: 'https://www.crowd2fund.com/register?rc=npvzn9',
        minimumInvestment: '100 GBP',
        advertisedReturn: '6-18%',
        investors: 'N/A',
        paymentOptions: ['N/A'],
        totalFundingVolume: 'N/A',
        averageLoanDuration: 'N/A',
        description: 'The only investment platform in the UK where investors choose the British entrepreneurs they back. Over £6m in interest paid out to investors from more than 617 unique opportunities.Crowd2Fund is an alternative solution to an out-of-date f... Read more',
        regulated: false,
        buyBack: false,
        publicStatistics: false,
        signupBonus: false,
        secondaryMarket: true,
        autoInvest: false,
        slug: 'crowd6',
        whoCanInvest: 'Retail Investors, Accredited Investors'
    },
    {
        name: 'Crowd2Fund7',
        pathLogo: '/platformLogo/Crowd2Fund.png',
        country: [' United Kingdom '],
        type: ['Equity', 'Debt', 'P2P lending', 'Reward'],
        industry: [' SME '],
        year: '2014',
        license: '08472687',
        language: ['English'],
        reviewLink: 'https://www.trustpilot.com/review/www.crowd2fund.com',
        website: 'https://www.crowd2fund.com/register?rc=npvzn9',
        minimumInvestment: '100 GBP',
        advertisedReturn: '6-18%',
        investors: 'N/A',
        paymentOptions: ['N/A'],
        totalFundingVolume: 'N/A',
        averageLoanDuration: 'N/A',
        description: 'The only investment platform in the UK where investors choose the British entrepreneurs they back. Over £6m in interest paid out to investors from more than 617 unique opportunities.Crowd2Fund is an alternative solution to an out-of-date f... Read more',
        regulated: false,
        buyBack: false,
        publicStatistics: false,
        signupBonus: false,
        secondaryMarket: true,
        autoInvest: false,
        slug: 'crowd7',
        whoCanInvest: 'Retail Investors, Accredited Investors'
    }
];
