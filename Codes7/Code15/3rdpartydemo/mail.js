function sendEmail(recEmail, message,response){
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service:'gmail',
    //host: 'smtp.ethereal.email',
    //port: 587,
    //secure: false, // true for 465, false for other ports
    auth: {
        user: 'mail.xyz@gmail.com', // generated ethereal user
        pass: 'xyz'  // generated ethereal password
    }
});

let mailOptions = {
from: 'mail.xyz@gmail.com', // sender address
    to: recEmail, // list of receivers
    subject: message, // Subject line
    text: message, // plain text body
    html: '<h1>'+message+'</h1>' // html body
};


transporter.sendMail(mailOptions, (error, info) => {
    console.log("Inside Send Mail .....");
    if (error) {
        response.send("Can't Send Email");
    }
    else{
        response.send('Mail Has Been Sended to '+recEmail);
    }
  

    
});


}
module.exports = sendEmail;