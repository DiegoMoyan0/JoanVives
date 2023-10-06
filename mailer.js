const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'joanvivesy@gmail.com',
        pass: 'klprxxphienawjot',
    },
});

module.exports = transporter;