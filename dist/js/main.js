const navEl = document.querySelector(".navbar");
const arrowUp = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navEl.classList.add("navbar-scrolled");
    arrowUp.style.display = "block";
  } else if (window.scrollY < 56) {
    navEl.classList.remove("navbar-scrolled");
    arrowUp.style.display = "none";
  }
});

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_1orfmqc", "template_o0jc0z1", this).then(
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

/* Shows the Cookie banner */
function showCookieBanner() {
  let cookieBanner = document.getElementById("cb-cookie-banner");
  cookieBanner.style.display = "block";
}

/* Hides the Cookie banner and saves the value to localstorage */
function hideCookieBanner() {
  localStorage.setItem("cb_isCookieAccepted", "yes");
  let cookieBanner = document.getElementById("cb-cookie-banner");
  cookieBanner.style.display = "none";
}

/* Checks the localstorage and shows Cookie banner based on it. */
function initializeCookieBanner() {
  let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
  if (isCookieAccepted === null) {
    localStorage.setItem("cb_isCookieAccepted", "no");
    showCookieBanner();
  }
  if (isCookieAccepted === "no") {
    showCookieBanner();
  }
}
// Assigning values to window object
window.onload = initializeCookieBanner();
window.cb_hideCookieBanner = hideCookieBanner;
