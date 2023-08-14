import './globals.css';
import type {Metadata} from 'next';
import {ContextRedux} from "@/components";

export const metadata: Metadata = {
    title: 'Crowd Place',
    description: 'Crowd Place',
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
