const toType = "My Name is Chris Ward";
let typeSpeed = 50;
const typeLoc = ".titlediv h1"
let i = 0;
let blinkCheck = true;

//setting typewriter effect
document.querySelector(typeLoc).innerHTML = ' ';

function randInt() {
    return Math.floor(Math.random * 500);
}

function typer (typeText, iSpeed, iLoc) {
    document.querySelector(typeLoc).className = "border-on";
    if (i < typeText.length) {
        typeSpeed = randInt();
        document.querySelector(iLoc).innerHTML += typeText.charAt(i);
        i++;
        setTimeout(() => {typer(typeText, iSpeed, iLoc)}, iSpeed);
    }
    
    
}
setInterval(() => {
    if (blinkCheck === true) {
        document.querySelector(typeLoc).className = "border-off";
        blinkCheck = false;
        clearInterval();
    } else {
        document.querySelector(typeLoc).className = "border-on";
        blinkCheck = true;
    }
}, 600);

    window.onload = typer(toType, typeSpeed, typeLoc);
