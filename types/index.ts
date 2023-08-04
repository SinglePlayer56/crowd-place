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

export type formData<T> = {
    [K in keyof T]: T[K]
}

export type FormField<T> = {
    tag: 'input' | 'textArea';
    label: keyof T;
    type?: 'text' | 'email';
    required: boolean;
}

export interface AddFormData {
    'Platform name': string;
    'Website': string;
    'E-mail': string;
    'Message': string;
}

export interface ContactsFormData {
    'Name': string;
    'E-mail': string;
    'Message': string;
}
