const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
module.exports = async (email,subject,text)=>{
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure:Boolean(process.env.SECURE),
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }
        })

        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:subject,
            text:text,
        });
    } catch (error) {
        console.log(`error ${error}... email not sent`)
    }
}