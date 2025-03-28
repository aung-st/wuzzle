//import confetti from "https://esm.run/canvas-confetti@1";

let count = 0
let secretCount = 0
const buttonText1 = "Keep Pressing!"
const buttonText2 = "Theres a faster way you know..."

const secretText1 = "Hey leave the poor guy's eye alone!"
const secretText2 = "Stop! You're gonna blind him!"
const secretText3 = "Okay! Okay! Here! Now get out!"
const secretText4 = "Go on! Get!"

// go to next page on click of next button
function goToNextPage(){
    window.location.href = ("final.html");
}

function checkCount(){
    count += 1;
    document.getElementById("button-text").innerHTML = buttonText1;

    if (count == 5){
        document.getElementById("button-text").innerHTML = buttonText2;
    }

    else if (count == 10){
        document.getElementById("next-button").style.visibility="visible";
    }
}

function secretCountCheck(){
    count += 1;
    document.getElementById("button-text").innerHTML = secretText1;

    if (count >= 5 && count <10){
        document.getElementById("button-text").innerHTML = secretText2;
    }

    else if (count == 10){
        document.getElementById("button-text").innerHTML = secretText3;
        document.getElementById("next-button").style.visibility="visible";
    }

    else if (count > 10){
        document.getElementById("button-text").innerHTML = secretText4;
    }
}