import {AddFormData, ContactsFormData, formData, FormField} from "@/types";

export interface FormProps {
    defaultState: formData<AddFormData | ContactsFormData>;
    inputFields: FormField[]
}
