const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async(email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,

            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })

        const info = transporter.sendMail({
            from: "LNCT Campus",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })

        console.log("Info", info);
        return info
    } catch (error) {
        console.log("Error occurred while sending mail");
        console.log(error)
    }
}

module.exports = mailSender