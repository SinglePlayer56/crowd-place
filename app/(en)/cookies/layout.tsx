import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'Cookies | Crowd Place',
    description: 'Cookies | Crowd Place',
    alternates: {
        canonical: `${process.env.DOMAIN}/cookies/`
    }
}

export default function CookiesLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <PageLayout>
            {children}
        </PageLayout>

    )
}
