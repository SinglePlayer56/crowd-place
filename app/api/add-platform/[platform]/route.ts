import db from "@/utils";
import Platform from "@/models/platform";

export const GET = async (req: any, {params}: any) => {

    await db.sync();

    const count = await Platform.findOne({
        where: {
            slug: params.platform
        }
    });

    return new Response(JSON.stringify(count), {status: 200});
}
