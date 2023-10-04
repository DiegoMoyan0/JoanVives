const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'diegomoyano02@gmail.com',
        pass: 'elyfjffytcdzuvlw',
    },
});

module.exports = transporter;