'use server'

import '@/config/envConfig.ts';

import sgMail from '@sendgrid/mail';

export async function sendMail(data: any){
    try{
        sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
        sgMail.send(data);
    } catch (error: any) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
        return false;
    } finally{
        return true;
    }
}


