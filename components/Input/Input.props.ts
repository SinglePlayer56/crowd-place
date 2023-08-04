import {DetailedHTMLProps, HTMLAttributes} from "react";
import {FieldErrors, Path, UseFormRegister} from "react-hook-form";
import {AddFormData, ContactsFormData, formData} from "@/types";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label: Path<formData<AddFormData | ContactsFormData>>;
    register: UseFormRegister<formData<AddFormData | ContactsFormData>>
    type?: string;
    placeholder?: string;
    required?: boolean;
    errors: FieldErrors;
}
