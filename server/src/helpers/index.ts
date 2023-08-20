import {AddFormData, ContactsFormData} from "../types/index.js";

export function isMailDataType(data: AddFormData | ContactsFormData): data is AddFormData {
    return (data as AddFormData)['Platform name'] !== undefined;
}
