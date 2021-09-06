const introBrand = document.querySelector(".intro .brand");
introBrand.classList.add("animate__animated", "animate__fadeInDown");

const introJunior = document.querySelector(".intro .title .jun");
introJunior.classList.add("animate__animated", "animate__fadeInDown");
introJunior.style.setProperty("--animate-duration", "2s");

const introDeveloper = document.querySelector(".intro .title .dev");
introDeveloper.classList.add("animate__animated", "animate__fadeInRight");

const navside = document.querySelector(".navside");
navside.classList.add("animate__animated", "animate__fadeInLeft");

const progLanguage = document.querySelector(".ability-content .programming-language-content");
const database = document.querySelector(".ability-content .database-content");

// SCROLL DOWN
window.addEventListener("scroll", function () {
  //do stuff
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 700) {
    progLanguage.classList.add("animate__animated", "animate__fadeInBottomRight");
    database.classList.add("animate__animated", "animate__fadeInBottomLeft");
    // progLanguage.style.setProperty("--animate-duration", "1.5s");
    progLanguage.style.opacity = "1";
    database.style.opacity = "1";
  }
});
