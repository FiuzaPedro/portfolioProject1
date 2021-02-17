
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




let skillsContainer = document.getElementById("skillsContainer").children;
let skillDescription = document.getElementById("skillDescription").children;
let pDesc = document.getElementById("pDescription");
for (let j = 0; j < skillsContainer.length; j++) {
    skillsContainer[j].addEventListener("click", function (e) {
        let currentSkill = e.target.id;
        let elementSkill = document.getElementById(currentSkill);
        let otherSkills = document.querySelectorAll("i");

        //elementSkill.classList.add("iActive");
        switch (currentSkill) {
            case "iHtml":
                pDesc.style.opacity = "0";
                setTimeout(() => {
                    pDesc.innerHTML = "<i class='fab fa-html5 innerI' aria-hidden='true'></i><br>";
                    pDesc.innerHTML += "Started on my own to learn HTML syntax, even before the HTML5 implementation";
                    pDesc.style.opacity = "1";
                }, 500);
                break;
            case "iCss":
                pDesc.style.opacity = "0";
                setTimeout(() => {
                    pDesc.style.opacity = "1";
                    pDesc.innerHTML = "<i class='fab fa-css3 innerI' aria-hidden='true'></i><br>";
                    pDesc.innerHTML += "CSS was the next step to improve the websites I had started to build";
                }, 500);
                break;
            case "iJs":
                pDesc.style.opacity = "0";
                setTimeout(() => {
                    pDesc.style.opacity = "1";
                    pDesc.innerHTML = "<i class='fab fa-js-square innerI' aria-hidden='true'></i><br>";
                    pDesc.innerHTML += "I began my Javascript journey during a live course at FLAG - Formação em Design, Criatividade e Comunicação and now I've been reinforcing the knowledge on the Code Academy platform ";
                }, 500);
                break;
            case "iTerminal":
                pDesc.style.opacity = "0";
                setTimeout(() => {
                    pDesc.style.opacity = "1";
                    pDesc.innerHTML = "<i class='fas fa-terminal innerI' aria-hidden='true'></i><br>";
                    pDesc.innerHTML += "I've always had some knowledge on terminal controls but recently I've reviewed the concepts down at the Code Academy platform";
                }, 500);
                break;
            case "iGit":
                pDesc.style.opacity = "0";
                setTimeout(() => {
                    pDesc.style.opacity = "1";
                    pDesc.innerHTML = "<i class='fab fa-git innerI' aria-hidden='true'></i><br>";
                    pDesc.innerHTML += "Recently I started learning GIT at the Code Academy platform";
                }, 500);
                break;
            case "iGithub":
                pDesc.style.opacity = "0";
                setTimeout(() => {
                    pDesc.style.opacity = "1";
                    pDesc.innerHTML = "<i class='fab fa-github innerI' aria-hidden='true'></i><br>";
                    pDesc.innerHTML += "Code Academy is the place where I'm currently learning how to share my work or how to futurely work with a team of Developers";
                }, 500);
                break;
            case "iBootstrap":
                pDesc.style.opacity = "0";
                setTimeout(() => {
                    pDesc.style.opacity = "1";
                    pDesc.innerHTML = "<i class='fab fa-bootstrap innerI' aria-hidden='true'></i><br>";
                    pDesc.innerHTML += "Bootstrap I learnt while browsing web tutorials and while implementing it in some of the websites I designed/developer previously";
                }, 500);
                break;

            default:
                break;
        }
    })

}
