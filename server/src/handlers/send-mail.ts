import { Request, Response } from 'express';
import {isMailDataType} from "../helpers/index.js";
import {generateEmailContent, mailOptions, transporter} from "../nodemailerConfig/index.js";
import {AddFormData, ContactsFormData} from "../types/index.js";

export const sendMailHandler = async (req: Request, res: Response) => {
    try {
        const data: AddFormData | ContactsFormData  = req.body;

        if (isMailDataType(data)) {
            if (!data || !data['Platform name'] || !data['Website'] || !data['E-mail'] || !data['Message']) {
                return res.status(400).json({message: 'Bad request'});
            }
        } else {
            if (!data || !data['Name'] || !data['E-mail'] || !data['Message']) {
                return res.status(400).json({message: 'Bad request'});
            }
        }

        const subject = isMailDataType(data) ? data['Platform name'] : data['Name'];

        await transporter.sendMail({
            ...mailOptions,
            ...generateEmailContent(data),
            subject: subject,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message });
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
