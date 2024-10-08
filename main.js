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
