import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'Best Crowdfunding Platforms 2023 | Crowd-Place.com',
    description: 'List of the Best Crowdfunding Platforms in Europe with reviews.',
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
