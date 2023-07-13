require('dotenv').config()
const fs = require('fs');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

let mailOptions = {
    to: process.env.TO,
    subject: `test`,
};

fs.readFile('./index.html', null, function (error, data) {
    if (error) throw error;
    mailOptions.html = data;
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) throw err;
    });
});