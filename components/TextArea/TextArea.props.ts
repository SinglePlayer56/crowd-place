import {DetailedHTMLProps, HTMLAttributes} from "react";
import {Control, FieldErrors, Path, UseFormRegister} from "react-hook-form";
import {AddFormData, ContactsFormData, formData} from "@/types";

export interface TextAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label: Path<string>;
    register: UseFormRegister<formData<AddFormData | ContactsFormData>>
    placeholder?: string;
    required?: boolean;
    errors: FieldErrors;
    maxLength: number;
    control?: Control<formData<AddFormData | ContactsFormData>>
}
