import db from "@/utils";
import Platform from "@/models/platform";
import {Op} from "sequelize";

export const GET = async (req: any, {params}: any) => {

    await db.sync();

    const response = await Platform.findAll({
        limit: 4,
        where: {
            industry: {
                [Op.like]: `%${params.industry}%`
            }
        }
    });



    return new Response(JSON.stringify(response), {status: 200});
}
