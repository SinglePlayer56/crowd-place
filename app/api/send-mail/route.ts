import {generateEmailContent, mailOptions, transporter} from "@/nodemailerConfig";
import {AddFormData, ContactsFormData} from "@/types";
import {mailDataType} from "@/helpers";

export const POST = async (req: any) => {
    const data: AddFormData | ContactsFormData = await req.json();

    if (mailDataType(data)) {
        if (!data || !data['Platform name'] || !data['Website'] || !data['E-mail'] || !data['Message']) {
            return new Response(JSON.stringify({message: 'Bad request'}), {status: 400});
        }
    } else {
        if (!data || !data['Name'] || !data['E-mail'] || !data['Message']) {
            return new Response(JSON.stringify({message: 'Bad request'}), {status: 400});
        }
    }


    try {
        const subject = mailDataType(data) ? data['Platform name'] : data["Name"];

        await transporter.sendMail({
            ...mailOptions,
            ...generateEmailContent(data),
            subject: subject,
        });

        return new Response(JSON.stringify({success: true}), {status: 200});
    } catch (err) {
        if (err instanceof Error) {
            return new Response(JSON.stringify(err.message), {status: 400});
        }
    }

};
