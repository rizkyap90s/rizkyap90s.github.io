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
const progLanguage = document.querySelector(".ability-container .programming-language-content");
const database = document.querySelector(".ability-container .database-content");
const editing = document.querySelector(".ability-container .editing-content");
const tools = document.querySelector(".ability-container .tools-content");
const flowerVector2 = document.querySelector(".flower-2");

// SCROLL DOWN
window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 600) {
    flowerVector.classList.add("animate__animated", "animate__zoomIn");
    flowerVector.style.opacity = "1";
  }
  if (currentScrollPos > 900) {
    progLanguage.classList.add("animate__animated", "animate__fadeInLeftBig");
    database.classList.add("animate__animated", "animate__fadeInRightBig");
    progLanguage.style.opacity = "1";
    database.style.opacity = "1";
  }
  if (currentScrollPos > 1100) {
    editing.classList.add("animate__animated", "animate__fadeInLeftBig");
    tools.classList.add("animate__animated", "animate__fadeInRightBig");
    editing.style.opacity = "1";
    tools.style.opacity = "1";
  }
  if (currentScrollPos > 1500) {
    flowerVector2.classList.add("animate__animated", "animate__zoomIn");
    flowerVector2.style.opacity = "1";
  }
});
