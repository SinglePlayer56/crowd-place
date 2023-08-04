import {NextResponse} from "next/server";

const legacyPrefixes = ['/contacts', '/blog']

export default async function middleware(req:any) {
    const { pathname } = req.nextUrl;

    if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
        return NextResponse.next()
    }

    // apply trailing slash handling
    if (
        !pathname.endsWith('/') &&
        !pathname.match(/((?!(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
    ) {
        req.nextUrl.pathname += '/'
        return NextResponse.redirect(req.nextUrl)
    }
}
