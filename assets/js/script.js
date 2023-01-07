function showHint(str){str.style.visibility = "visible";}
function hideHint(str){str.style.visibility = "hidden";}

var strProfileHint = "after clicking this will display a short profile of me";
var strSkillHint = "will display all the abilities that I have in detail, including the rating of each object";
var strExperienceHint = "will display some of the experiences that I have lived when I first entered college until now";

var hint = document.querySelector(".container .hint");
var contentProfile = document.querySelector(".content-profile");
var contentSkill = document.querySelector(".content-skill");
var contentExperience = document.querySelector(".content-experience");
var bgContent = document.querySelector(".bg-content");

function showProfileHint(){hint.innerHTML = strProfileHint; showHint(hint);}
function hideProfileHint(){hideHint(hint);}

function showSkillHint(){hint.innerHTML = strSkillHint; showHint(hint);}
function hideSkillHint(){hideHint(hint);}

function showExperienceHint(){hint.innerHTML = strExperienceHint; showHint(hint);}
function hideExperienceHint(){hideHint(hint);}

function resetContent(){
    contentProfile.style.display = "none";
    contentSkill.style.display = "none";
    contentExperience.style.display = "none";
    bgContent.style.display = "none";
}

function clickProfile(){
    contentProfile.classList.add('animate__animated', 'animate__zoomIn');
    bgContent.style.display = "block";
    contentProfile.style.display = "block";
}

function clickSkill(){
    contentSkill.classList.add('animate__animated', 'animate__zoomIn');
    bgContent.style.display = "block";
    contentSkill.style.display = "block";
}

function clickExperience(){
    contentExperience.classList.add('animate__animated', 'animate__zoomIn');
    bgContent.style.display = "block";
    contentExperience.style.display = "block";
}
