export type FilterType = 'investmentType' | 'industry' | 'country' | 'yearFounded' | 'licenseNumber';

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
