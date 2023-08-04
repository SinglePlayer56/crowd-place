import {DetailedHTMLProps, HTMLAttributes} from "react";
import {Control, FieldErrors, Path, UseFormRegister} from "react-hook-form";
import {AddFormData} from "@/types";

export interface TextAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label: Path<AddFormData>;
    register: UseFormRegister<AddFormData>
    placeholder?: string;
    required?: boolean;
    errors: FieldErrors;
    maxLength: number;
    control?: Control<AddFormData>
}
