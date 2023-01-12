const nodemailer = require('nodemailer')

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
            attachments:[
                {filename:'b.png', path:'./b.png'}
            ]
        });
        console.log('email sent successfully')
    } catch (error) {
        console.log(`error ${error}... email not sent`)
    }
}