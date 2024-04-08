document.addEventListener("DOMContentLoaded", function () {
  var currentIndex = 0;
  var slides = document.querySelectorAll(".slide");
  // Assume each slide is shown for 8 seconds total
  var slideInterval = 8000;

  function showSlide(index) {
    slides.forEach(function (slide) {
      slide.style.opacity = "0";
    });

    var currentSlide = slides[index];
    currentSlide.style.opacity = "1";

    // Reapply the animation to ensure it starts from the beginning for each slide
    var img = currentSlide.querySelector("img");
    img.style.animation = "none"; // Reset the animation
    // Trigger reflow to apply the reset
    void img.offsetWidth;
    // Re-apply the correct animation based on the slide index
    switch (index % 4) {
      case 0:
        img.style.animation = "panRight 10s ease-in-out infinite";
        break;
      case 1:
        img.style.animation = "panDown 10s ease-in-out infinite";
        break;
      case 2:
        img.style.animation = "panLeft 10s ease-in-out infinite";
        break;
      case 3:
        img.style.animation = "panUp 10s ease-in-out infinite";
        break;
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initially display the first slide
  showSlide(currentIndex);
  // Set the interval for changing slides, adjusted to match the CSS transition
  setInterval(nextSlide, slideInterval);
});

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
