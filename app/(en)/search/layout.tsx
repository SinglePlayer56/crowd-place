import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'Search | Crowd Place',
    description: 'Search | Crowd Place',
    alternates: {
        canonical: `${process.env.DOMAIN}/search/`,
    },
    robots: 'noindex, follow'
}

export default function SearchLayout({
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
