import {CrowdfundingCardProps} from "@/components/CrowdfundingCard/CrowdfundingCard.props";
import {CountryListProps} from "@/components/CountryList/CountryList.props";

export const categoryPostsTags = ['All posts', 'P2P Lending', 'Fundraising', 'Property Crowdfunding'];

export const CrowdfundingCardValues: CrowdfundingCardProps[] = [
    {
        title: 'P2P lending platforms',
        iconPath: '/icons/people.svg',
        href: '/platforms/p2p-lending/'
    },
    {
        title: 'Equity crowdfunding platforms',
        iconPath: '/icons/money.svg',
        href: '/platforms/equity/'
    },
    {
        title: 'Property crowdfunding platforms',
        iconPath: '/icons/home.svg',
        href: '/platforms/property/'
    },
    {
        title: 'Startup crowdfunding platforms',
        iconPath: '/icons/rocket.svg',
        href: '/platforms/startups/'
    },
    {
        title: 'Personal loans crowdfunding platforms',
        iconPath: '/icons/coins.svg',
        href: '/platforms/personal-loans/'
    },
    {
        title: 'Green energy crowdfunding platforms',
        iconPath: '/icons/leaf.svg',
        href: '/platforms/green-energy/'
    },
    {
        title: 'Crowdfunding platform for education',
        iconPath: '/icons/book.svg',
        href: '/platforms/education/'
    },
    {
        title: 'Debt crowdfunding platform',
        iconPath: '/icons/hand-coins.svg',
        href: '/platforms/debt/'
    }
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
