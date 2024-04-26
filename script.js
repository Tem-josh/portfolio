(function(){
  emailjs.init("yaaJLsSp1xnF01PN8");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Get form values
  var form = this;
  var userEmail = form.user_email.value;
  var userMessage = form.message.value;

  console.log(userEmail, userMessage);

  // Send email using EmailJS
  emailjs.send("service_w5np09k", "template_port", {
      to_email: userEmail,
      message_html: userMessage
  }).then(function(response) {
      console.log("Email sent successfully", response);
      // Optionally, show a success message to the user
  }, function(error) {
      console.error("Email send failed", error);
      // Optionally, show an error message to the user
  });

  // Clear form fields
  form.reset();
});

