import type {Metadata} from 'next'
import {PageLayout} from "@/components";

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
