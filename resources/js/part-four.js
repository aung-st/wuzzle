let combination = [0,0,0,0];
const answer = [3,7,5,2];

const dial1 = document.getElementById("dial-one");
const dial2 = document.getElementById("dial-two");
const dial3 = document.getElementById("dial-three");
const dial4 = document.getElementById("dial-four");


let solved = false 

// https://pixabay.com/sound-effects/ping-82822/
let ping = new Audio("resources/sounds/ping-82822.mp3");

// go to next page on click of next button
function goToNextPage(){
    window.location.href = ("part-last.html");
}

function checkCombination(){
    if (combination.join() == answer.join()){
        document.getElementById("next-button").style.visibility="visible";
    }
}

function checkDial1(){
    if (combination[0] == answer[0]){
        ping.play();
        checkCombination();
    }
}

function checkDial2(){
    if (combination[1] == answer[1]){
        ping.play();
        checkCombination();
    }
}

function checkDial3(){
    if (combination[2] == answer[2]){
        ping.play();
        checkCombination();
    }
}

function checkDial4(){
    if (combination[3] == answer[3]){
        ping.play();
        checkCombination();
    }
}

dial1.addEventListener("click", function(){
    ping.currentTime = 0;
    const digit = parseInt(document.getElementById("digit-one").innerHTML); 
    const newDigit = digit+1;
    combination[0] = newDigit;
    checkDial1()
    if (digit < 9){        
        document.getElementById("digit-one").innerHTML = newDigit;
    } else {
        document.getElementById("digit-one").innerHTML = 0;
    }
});

dial2.addEventListener("click", function(){
    ping.currentTime = 0;

    const digit = parseInt(document.getElementById("digit-two").innerHTML) 
    const newDigit = digit+1;
    combination[1] = newDigit;
    checkDial2()

    if (digit < 9){
    document.getElementById("digit-two").innerHTML = (digit+1);
    } else {
        document.getElementById("digit-two").innerHTML = 0;
    }
});

dial3.addEventListener("click", function(){
    ping.currentTime = 0;

    const digit = parseInt(document.getElementById("digit-three").innerHTML) 
    const newDigit = digit+1;
    combination[2] = newDigit;
    checkDial3()

    if (digit < 9){
    document.getElementById("digit-three").innerHTML = (digit+1);
    } else {
        document.getElementById("digit-three").innerHTML = 0;
    }
});

dial4.addEventListener("click", function(){
    ping.currentTime = 0;

    const digit = parseInt(document.getElementById("digit-four").innerHTML) 
    const newDigit = digit+1;
    combination[3] = newDigit;
    checkDial4()

    if (digit < 9){
    document.getElementById("digit-four").innerHTML = (digit+1);
    } else {
        document.getElementById("digit-four").innerHTML = 0;
    }
});