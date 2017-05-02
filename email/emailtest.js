var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://herbtea30%40gmail.com:dhkang0113@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <herbtea30@gmail.com>', // sender address
    to: 'herbtea30@gmail.com, herbtea@gpin.co.kr', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ? HTML</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
