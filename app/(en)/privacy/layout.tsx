import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'Privacy Policy | Crowd-Place.com',
    description: 'Crowd-Place.com Privacy Policy.',
    alternates: {
        canonical: `${process.env.DOMAIN}/privacy/`
    }
}

export default function PrivacyLayout({
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
