import {generateEmailContent, mailOptions, transporter} from "@/nodemailerConfig";
import {AddFormData} from "@/types";

export const POST = async (req: any) => {
    const data: AddFormData = await req.json();

    if (!data || !data['Platform name'] || !data['Website'] || !data['E-mail'] || !data['Message']) {
        return new Response(JSON.stringify({message: 'Bad request'}), {status: 400});
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            ...generateEmailContent(data),
            subject: data['Platform name'],
        });

        return new Response(JSON.stringify({success: true}), {status: 200});
    } catch (err) {
        if (err instanceof Error) {
            return new Response(JSON.stringify(err.message), {status: 400});
        }
    }

};
