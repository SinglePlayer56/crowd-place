import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: ' Cookies | Crowd-Place.com',
    description: 'Crowd-Place.com Cookies.',
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
