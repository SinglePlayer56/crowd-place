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

export function mailDataType(data: AddFormData | ContactsFormData): data is AddFormData {
    return (data as AddFormData)['Platform name'] !== undefined;
}
