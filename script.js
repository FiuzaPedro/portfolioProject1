
/*setInterval(function () {
    let dataActual = new Date();
    console.log(dataActual.getSeconds())
}, 1000);*/

// percentage progress bar on top
let body = document.body,
    html = document.documentElement;

let height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
document.addEventListener("scroll", () => {

    let scrolledPx = window.pageYOffset;
    let percent = Math.floor((scrolledPx / height) * 100 + 14) + "%";
    if (percent === "14%") {
        percent = "0%";
    }
    let currPos = document.getElementById("currentPos");
    currPos.style.width = percent;
})

//hover sobre os works para mostrar a imagem de cada um
let containerWorks = document.getElementById("workContainer").children;
for (let i = 0; i < containerWorks.length; i++) {
    containerWorks[i].addEventListener('mouseover', function (e) {
        let currentVal = e.target.id;
        let element = document.getElementById(currentVal);
        if (element) {
            element.previousElementSibling.style.height = "280px";
            element.style.top = "100px";
        } else {
            return false;
        }
    });
};


























/*
let skillsContainer = document.getElementById("skillsContainer").children;
let skillDescription = document.getElementById("skillDescription").children;
for (let j = 0; j < skillsContainer.length; j++) {
    skillsContainer[j].addEventListener("click", function (e) {
        skillsContainer[j].classList.remove("iActive")
        let currentSkill = e.target.id;
        let elementSkill = document.getElementById(currentSkill);
        let otherSkills = document.querySelectorAll("i");
        console.log(otherSkills)

        elementSkill.classList.add("iActive");
        switch (currentSkill) {
            case "iHtml":

                break;
            case "iHtml":

                break;
            case "iCss":

                break;
            case "iJs":

                break;
            case "iTerminal":

                break;
            case "iGit":

                break;
            case "iGithub":

                break;
            case "iBootstrap":

                break;

            default:
                break;
        }
    })

}*/
