import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'Terms | Crowd Place',
    description: 'Terms | Crowd Place',
    alternates: {
        canonical: `${process.env.DOMAIN}/terms/`
    }
}

export default function TermsLayout({
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
