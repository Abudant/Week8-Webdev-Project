document.addEventListener('DOMContentLoaded', function() {
  // Image Slider Functionality (on index.html)
  const carSlider = document.querySelector('.car-slider');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev-slide');
  const nextButton = document.querySelector('.next-slide');
  let currentIndex = 0;

  if (carSlider && slides && prevButton && nextButton) {
      function showSlide(index) {
          const translateX = -index * slides[0].offsetWidth;
          carSlider.style.transform = `translateX(${translateX}px)`;
      }

      function nextSlide() {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
      }

      function prevSlide() {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(currentIndex);
      }

      nextButton.addEventListener('click', nextSlide);
      prevButton.addEventListener('click', prevSlide);

      // Optional: Auto-advance slider
      // setInterval(nextSlide, 3000);
  }

  // Contact Form Validation (on contact.html)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      const formMessage = document.getElementById('formMessage');

      contactForm.addEventListener('submit', function(event) {
          let isValid = true;

          if (nameInput.value.trim() === '') {
              nameError.textContent = 'Please enter your name.';
              isValid = false;
          } else {
              nameError.textContent = '';
          }

          if (emailInput.value.trim() === '') {
              emailError.textContent = 'Please enter your email address.';
              isValid = false;
          } else if (!isValidEmail(emailInput.value.trim())) {
              emailError.textContent = 'Please enter a valid email address.';
              isValid = false;
          } else {
              emailError.textContent = '';
          }

          if (messageInput.value.trim() === '') {
              messageError.textContent = 'Please enter your message.';
              isValid = false;
          } else {
              messageError.textContent = '';
          }

          if (!isValid) {
              event.preventDefault(); // Prevent form submission if there are errors
          } else {
              // Simulate form submission success
              event.preventDefault();
              formMessage.textContent = 'Message sent successfully!';
              contactForm.reset();
              setTimeout(() => {
                  formMessage.textContent = '';
              }, 3000);
          }
      });

      function isValidEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
      }
  }
});
  