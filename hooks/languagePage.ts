import {useMemo} from "react";
import {usePathname} from "next/navigation";

export const useLanguagePage =() => {
    const pathName = usePathname();
    return useMemo(() => {
        const parts = pathName.split('/');
        if (parts.length > 1 && (parts[1] === 'de' || parts[1] === 'fr')) {
            return `/${parts[1]}`;
        }
        return '';
    }, [pathName]);
}
