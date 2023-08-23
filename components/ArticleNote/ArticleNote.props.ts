import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ArticleNoteProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}
