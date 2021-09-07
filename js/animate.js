const introBackground = document.querySelector(".intro");
introBackground.classList.add("animate__animated", "animate__fadeIn");

const introBrand = document.querySelector(".intro .brand");
introBrand.classList.add("animate__animated", "animate__fadeInDown");
introBrand.style.setProperty("--animate-duration", "2s");

const introJunior = document.querySelector(".intro .title .jun");
introJunior.classList.add("animate__animated", "animate__fadeInLeftBig");
introJunior.style.setProperty("--animate-duration", "2s");

const introDeveloper = document.querySelector(".intro .title .dev");
introDeveloper.classList.add("animate__animated", "animate__fadeInRight");
introDeveloper.style.setProperty("--animate-duration", "2s");

const navside = document.querySelector(".navside");
navside.classList.add("animate__animated", "animate__fadeInLeft");
navside.style.setProperty("--animate-duration", "2s");

const flowerVector = document.querySelector(".flower");
const progLanguage = document.querySelector(".ability-content .programming-language-content");
const database = document.querySelector(".ability-content .database-content");
const editing = document.querySelector(".ability-content .editing-content");

// SCROLL DOWN
window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 650) {
    flowerVector.classList.add("animate__animated", "animate__zoomIn");
    flowerVector.style.opacity = "1";
  }
  if (currentScrollPos > 900) {
    progLanguage.classList.add("animate__animated", "animate__fadeInBottomRight");
    database.classList.add("animate__animated", "animate__fadeInBottomLeft");
    progLanguage.style.opacity = "1";
    database.style.opacity = "1";
  }
  if (currentScrollPos > 1000) {
    editing.classList.add("animate__animated", "animate__fadeInRightBig");
    editing.style.opacity = "1";
  }
});
