'use server'

import { z } from 'zod';

//import { sendMail } from "@/lib/sendgrid";
import { sendMail } from '@/lib/nodemailer';
import { redirect } from 'next/navigation';
import { RedirectType } from 'next/dist/client/components/redirect';

const schema = z.object({
    email: z.string({
        invalid_type_error: 'Invalid Email',
    }).email().min(3).max(255),
    name: z.string({
        invalid_type_error: 'Invalid Name',
    }).min(2).max(255),
    message: z.string({
        invalid_type_error: 'Invalid Message',
    }).min(2).max(1500)
});

export async function sendContactEmail(formData: FormData){
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    const rawFormData = {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        message: validatedFields.data.message,
    };
    const msg = {
        to: 'truff@blazed.work, contact@blazed.space',
        from: '"Blazed Labs LLC" <hello@blazed.space>',
        subject: 'New Contact Message',
        text: `
    Name: ${rawFormData.name} \n
    Reply Email: ${rawFormData.email} \n
    Message: \n 
    ${rawFormData.message} \n
        `,
    };
    const result = await sendMail(msg);
    return redirect('/success', RedirectType.push);
}