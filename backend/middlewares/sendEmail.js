const nodemailer = require("nodemailer");

exports.sendEmail = async(options) => {


    // const transporter = nodemailer.createTransport({
    //     host: process.env.SMPT_HOST,
    //     port: process.env.SMPT_PORT,
    //     auth: {
    //         user:process.env.SMPT_MAIL,
    //         Pass: process.env.SMPT_PASSWORD
    //     },
    //     service: process.env.SMPT_SERVICE
    // });

    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "83a21406f3acb7",
          pass: "520feeac534fe4"
        }
      });

    const mailOptions = {
        from : process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,

    }

    await transporter.sendMail(mailOptions);
};