'use server'

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_DOMAIN,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export interface IMailData{
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
};

export async function sendMail(data: IMailData){
    try {
    const info = await transporter.sendMail(data);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail", err);
  }
}

/*
    {
      from: '"Blazed Labs LLC" <hello@blazed.space>', // sender address
      to: "truff@blazed.work, contact@blazed.space", // list of receivers
      subject: "Hello", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    }
*/