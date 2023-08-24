export type FilterType = 'investmentType' | 'industry' | 'country' | 'yearFounded' | 'licenseNumber';

export interface IPost {
    title: string;
    description: string;
    imagePath: string;
    category: string;
    slugCategory: string;
    slugHref: string;
    date: string;
}
