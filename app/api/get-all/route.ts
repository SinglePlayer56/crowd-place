import Platform from "@/models/platform";
import {NextApiRequest} from "next";
import {NextRequest} from "next/server";

export const GET = async (req: NextRequest, res: any) => {
    const currentPage = Number(req.nextUrl.searchParams.get('page'));
    const perPage = Number(req.nextUrl.searchParams.get('perPage'));
    const offset = (currentPage - 1) * perPage;


    const {count, rows} = await Platform.findAndCountAll(
        {
            limit: perPage ? perPage : 4,
            offset,
            order: [
                ['id', 'DESC']
            ]
        });

    return new Response(JSON.stringify({count, rows}), {status: 200});

}
