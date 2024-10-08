var typed = new Typed(".text", {
  strings: ["Python Developer", "Data Scientist", "Web Developer"],
  typeSpeed: 10,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function sendEmail(){
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));

}

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'govardhancse905@gmail.com',
    pass: 'Govardhan@89'  // Sensitive info should be stored in environment variables in production
  }
});

function sendUserEmail(userEmail, subject, message) {
  const mailOptions = {
    from: userEmail,  // User's email
    to: 'govardhancse905@gmail.com',  // Your email to receive the message
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = { sendUserEmail };
