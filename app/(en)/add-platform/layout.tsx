import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'Add platform | Crowd Place',
    description: 'Add platform | Crowd Place',
    alternates: {
        canonical: `${process.env.DOMAIN}/add-platform/`
    }
}

export default function AddPlatformLayout({
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
