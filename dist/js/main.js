const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("navbar-scrolled");
  }
});

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_tqhglud", "template_o0jc0z1", this).then(
        function () {
          console.log("SUCCESS!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
