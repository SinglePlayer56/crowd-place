import {DetailedHTMLProps, HTMLAttributes} from "react";
import {FieldErrors, Path, UseFormRegister} from "react-hook-form";
import {AddFormData} from "@/types";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label: Path<AddFormData>;
    register: UseFormRegister<AddFormData>
    type?: string;
    placeholder?: string;
    required?: boolean;
    errors: FieldErrors;
}
