//import confetti from "https://esm.run/canvas-confetti@1";

let count = 0
let secretCount = 0
const buttonText1 = "Keep Pressing!"
const buttonText2 = "Theres a Faster Way You Know..."
const buttonText3 = "You did it! Slowly!"
const buttonText4 = "Go Away Please.."


const secretText1 = "Hey leave the poor guy's eye alone!"
const secretText2 = "Stop! You're gonna blind him!"
const secretText3 = "Okay! Okay! Here! Now get out!"
const secretText4 = "Go on! Get!"
const secretText5 = "You already solved it why do you have to poke his eye out?"

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
        document.getElementById("button-text").innerHTML = buttonText3;
        document.getElementById("next-button").style.visibility="visible";
    }

    else if (count > 10){
        document.getElementById("button-text").innerHTML = buttonText4;
    }

}

function secretCountCheck(){
    secretCount += 1;
    document.getElementById("top-text-break").innerHTML = secretText1;

    if (count >=10){
        document.getElementById("top-text-break").innerHTML = secretText5;
    }

    else if (secretCount >= 5 && secretCount <10){
        document.getElementById("top-text-break").innerHTML = secretText2;
    }

    else if (secretCount == 10){
        document.getElementById("top-text-break").innerHTML = secretText3;
        document.getElementById("next-button").style.visibility="visible";
    }

    else if (secretCount > 10){
        document.getElementById("top-text-break").innerHTML = secretText4;
    }
}