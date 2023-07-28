import {usePathname} from "next/navigation";

export function isActiveLink(href: string) {
    const pathName = usePathname();

    return pathName === href;
}
