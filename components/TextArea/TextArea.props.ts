import {DetailedHTMLProps, HTMLAttributes} from "react";
import {Control, FieldErrors, Path, UseFormRegister} from "react-hook-form";

export interface TextAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label: Path<{ [key:string]: string }>;
    register: UseFormRegister<{ [key:string]: string }>
    placeholder?: string;
    required?: boolean;
    errors: FieldErrors;
    maxLength: number;
    control?: Control<{ [key:string]: string }>
}
