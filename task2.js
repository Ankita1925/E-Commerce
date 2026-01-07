let wearing = document.querySelectorAll(".wearing");
let mainPage = document.querySelectorAll(".main");

function shop() {
    // hide main home section
    mainPage.forEach(section => {
        section.style.display = "none";
    });

    // show shop cards
    wearing.forEach(section => {
        section.style.display = "block";
    });
}

function home() {
    mainPage.forEach(section => {
        section.style.display = "flex";
    });

    wearing.forEach(section => {
        section.style.display = "none";
    });
}
