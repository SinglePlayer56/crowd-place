import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: 'AboutUs | Crowd Place',
    description: 'AboutUs | Crowd Place',
    alternates: {
        canonical: `${process.env.DOMAIN}/about-us/`
    }
}

export default function AboutUsLayout({
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
