import '../globals.css'
import type {Metadata} from 'next';
import {ContextRedux} from "@/components";

export const metadata: Metadata = {
    title: 'Crowdfunding Platforms for Investors and Startups | Crowd-Place.com',
    description: 'Discover a comprehensive compilation of diverse crowdfunding platforms for Investors and Startups at Crowd-Place.com.',
    manifest: '/manifest.json',
    icons: {apple: '/icon.png'},
    themeColor: '#009dee',
    alternates: {
        canonical: `${process.env.DOMAIN}/`
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={'full-height'}>
            <ContextRedux>
                {children}
            </ContextRedux>
        </body>
        </html>
    )
}
