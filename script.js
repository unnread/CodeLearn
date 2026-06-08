let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let msg = document.getElementById("msg");

let projects = document.getElementById("projects");
let course = document.getElementById("course");

let steps = document.querySelectorAll(".step");
let nextBtn = document.getElementById("nextBtn");

let index = 0;

/* OUI */
yesBtn.addEventListener("click", () => {
    msg.textContent = "Parfait  On commence !";

    projects.style.display = "block";
    course.style.display = "block";

    projects.classList.add("show");
    course.classList.add("show");
});

/* NON */
noBtn.addEventListener("click", () => {
    msg.textContent = "Pas grave... reviens quand tu veux !";
});

/* PROGRESSION */
nextBtn.addEventListener("click", () => {
    if (index < steps.length) {
        steps[index].style.opacity = "1";
        steps[index].style.color = "#a5b4fc";
        index++;
    }

    if (index === steps.length) {
        msg.textContent = " Bravo ! Tu connais les bases du dev";
    }
});