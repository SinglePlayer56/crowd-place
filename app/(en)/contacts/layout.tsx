import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'Contacts | Crowd-Place.com',
    description: 'Crowd Place contacts.',
    alternates: {
        canonical: `${process.env.DOMAIN}/contacts/`
    }
}

export default function ContactsLayout({
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
