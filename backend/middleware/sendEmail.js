const nodeMailer = require('nodemailer');


exports.sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "af2e9c882f7ca5",
          pass: "7679b0f6fcdb27"
        }
      });

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,

    }

    await transporter.sendMail(mailOptions);

}