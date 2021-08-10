const introBrand = document.querySelector(".intro .brand");
introBrand.classList.add("animate__animated", "animate__fadeInDown");

const introJunior = document.querySelector(".intro .title .jun");
introJunior.classList.add("animate__animated", "animate__fadeInDown");

const introDeveloper = document.querySelector(".intro .title .dev");
introDeveloper.classList.add("animate__animated", "animate__fadeInRight");

const navside = document.querySelector(".navside");
navside.classList.add("animate__animated", "animate__fadeInLeft");

// SCROLL DOWN
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  introJunior.style.color = "blue";
  introDeveloper.style.transform = `translate(0px, ${currentScrollPos * 2}%)`;
};
