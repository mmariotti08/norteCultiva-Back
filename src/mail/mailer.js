const nodemailer = require("nodemailer");
const { USER_MAIL, PASS_MAIL } = process.env;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: USER_MAIL,
        pass: PASS_MAIL
    }
})

transporter.verify()
.then(() => {
    console.log("ready for send emails")
})

module.exports = { transporter };