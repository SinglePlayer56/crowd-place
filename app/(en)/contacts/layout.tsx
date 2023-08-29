import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'Contacts | Crowd Place',
    description: 'Contacts | Crowd Place',
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
