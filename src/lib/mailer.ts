import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const transporter = nodemailer.createTransport
(
    {
        host : process.env.EMAIL_HOST,
        port : process.env.EMAIL_PORT ,
        secure : true,
        auth : {
            user : process.env.EMAIL_USER,
            pass : process.env.EMAIL_PASS,
        },
    } as SMTPTransport.Options
);