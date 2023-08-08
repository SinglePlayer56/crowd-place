import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'Platforms | Crowd Place',
    description: 'Platforms | Crowd Place',
    alternates: {
        canonical: `${process.env.DOMAIN}/platforms/`
    }
}

export default function PlatformsLayout({
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
