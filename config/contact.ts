export const configOptions = {
    host: process.env.SMTP_DOMAIN,
    port: 587,
    tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
    }
}