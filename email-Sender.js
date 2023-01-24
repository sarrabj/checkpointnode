const nodemailer = require('nodemailer');
require('dotenv').config();


// Gmail account info
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'sarrabenjdida92@gmail.com',

        pass: 'xwhgjjoguotwmozk'

    }
});
// Email info
const mailOptions = {
    from: 'sarrabenjdida92@gmail.com',
    to: 'educatifshop@gmail.com',
    subject: 'How to send emails using NodeJS',
    text: '<strong>Follow the instructions and you will be fine</strong>',
    html: "<strong>Hello world?</strong>",
};

// Send email 📧  and retrieve server response
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log (error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
