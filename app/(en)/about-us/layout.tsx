import type {Metadata} from 'next'
import {PageLayout} from "@/components";

export const metadata: Metadata = {
    title: ' About Us | Crowd-Place.com',
    description: 'About Crowd Place Platform.',
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
