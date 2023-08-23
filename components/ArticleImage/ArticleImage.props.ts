import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ArticleImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    src: string;
}
