export interface HeaderLink {
    name: string;
    href: string;
}

export interface searchParams {
    params?: {page: string},
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export interface PlatformData {
    name: string;
    pathLogo: string;
    country: string[];
    type: string[];
    industry: string[];
    year: string;
    license: string;
    language: string[];
    reviewLink: string;
    website: string;
    minimumInvestment: string;
    advertisedReturn: string;
    investors: string;
    paymentOptions: string[];
    totalFundingVolume: string;
    averageLoanDuration: string;
    description: string;
    regulated: boolean;
    buyBack: boolean;
    publicStatistics: boolean;
    signupBonus: boolean;
    secondaryMarket: boolean;
    autoInvest: boolean;
    whoCanInvest: string;
    slug: string;
}

export interface AddFormData {
    'Platform name': string;
    'Website': string;
    'E-mail': string;
    'Message': string;
}
