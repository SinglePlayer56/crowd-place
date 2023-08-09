import db from "@/utils";
import Platform from "@/models/platform";
import {Op} from "sequelize";
import {NextRequest} from "next/server";

export const GET = async (req: NextRequest, {params}: any) => {
    const slugPlatform = req.nextUrl.searchParams.get('name')!;

    console.log(params,)

    const response = await Platform.findAll({
        limit: 4,
        order: [
            ['id', 'DESC']
        ],
        where: {
            name: {
                [Op.ne]: slugPlatform
            },
            industry: {
                [Op.regexp]: `${params.industry}`
            }
        }
    });



    return new Response(JSON.stringify(response), {status: 200});
}
