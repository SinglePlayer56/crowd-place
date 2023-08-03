export const POST = async (req: any, res: any) => {
    try {

        const data = await req.json();

        return new Response(JSON.stringify(data), {status: 200});

    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        }
    }
}

export const GET = async (req:any, res:any) => {
    return new Response(JSON.stringify({name: 'John Doe'}), {status: 200})
}
