import {usePathname} from "next/navigation";
import {AddFormData} from "@/types";

export function isActiveLink(href: string) {
    const pathName = usePathname();

    return pathName === href;
}


export async function sendMail(route: string, data: AddFormData) {
    const response = await fetch(`/api${route}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    });

    if (response.status === 400) {
        const errorMessage = await response.json();
        throw new Error(errorMessage);
    }

    return await response.json();
}
