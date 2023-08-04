import {NextRequest, NextResponse} from "next/server";

const legacyPrefixes = ['/contacts', '/blog']

export default async function middleware(req: NextRequest) {
    // const { pathname } = req.nextUrl;
    //
    // if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    //     return NextResponse.next()
    // }
    //
    // // apply trailing slash handling
    // if (
    //     !pathname.endsWith('/') &&
    //     !pathname.match(/((?!(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
    // ) {
    //     req.nextUrl.pathname += '/'
    //     return NextResponse.redirect(req.nextUrl)
    // }

    // if (req.nextUrl.pathname === '/platforms?page=1') {
    //
    //     return NextResponse.redirect(new URL('/platforms/', req.url), 308)
    // }
}
