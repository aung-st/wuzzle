// select modal-btn,modal-overlay,close-btn
// listen for click events on the modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalButton1 = document.querySelector(".modal-button-1");
const modalButton2 = document.querySelector(".modal-button-2");
const modalButton3 = document.querySelector(".modal-button-3");
const modalButton4 = document.querySelector(".modal-button-4");
const modalOverlay1 = document.querySelector(".modal-overlay-1");
const modalOverlay2 = document.querySelector(".modal-overlay-2");
const modalOverlay3 = document.querySelector(".modal-overlay-3");
const modalOverlay4 = document.querySelector(".modal-overlay-4");
const closeButton1 = document.querySelector(".close-button-1");
const closeButton2 = document.querySelector(".close-button-2");
const closeButton3 = document.querySelector(".close-button-3");
const closeButton4 = document.querySelector(".close-button-4");
const solvedOnSubmitMessage = "A big fan of submitting again after finishing are you?" 
const solvedMessage = "Get out of here."
const submitButton = document.querySelector(".submit-button");

let solved = false;
let answer = ""
let submitted = false; 

modalButton1.addEventListener("click", function () {
    modalOverlay1.classList.toggle("open-modal-1");
});

modalButton2.addEventListener("click", function () {
    modalOverlay2.classList.toggle("open-modal-2");
});

modalButton3.addEventListener("click", function () {
    modalOverlay3.classList.toggle("open-modal-3");
});

modalButton4.addEventListener("click", function () {
    modalOverlay4.classList.toggle("open-modal-4");
});

closeButton1.addEventListener("click", function() {
    modalOverlay1.classList.remove("open-modal-1");
});

closeButton2.addEventListener("click", function() {
    modalOverlay2.classList.remove("open-modal-2");
});

closeButton3.addEventListener("click", function() {
    modalOverlay3.classList.remove("open-modal-3");
});

closeButton4.addEventListener("click", function() {
    modalOverlay4.classList.remove("open-modal-4");
});

submitButton.addEventListener("click", function () {
    answer = document.getElementById("answer");
    submit();
});

// check if answer is correct and if so show the next button 
function submit(){
    if (solved){
        // add message if user submits answers after solving
        document.getElementById("answer-response").innerHTML = solvedOnSubmitMessage;
        
        document.getElementById("answer-response").style.visibility="visible";
        setTimeout(() => {
            document.getElementById("answer-response").style.visibility="hidden";
       }, 1000);
    }
    else if (answer.value == "One"){
        document.getElementById("next-button").style.visibility="visible";
        document.getElementById("answer-response").innerHTML = solvedMessage;
        solved = true;

        document.getElementById("answer-response").style.visibility="visible";
        setTimeout(() => {
            document.getElementById("answer-response").style.visibility="hidden";
       }, 1000);
    } else {
        document.getElementById("answer-response").style.visibility="visible";
        setTimeout(() => {
            document.getElementById("answer-response").style.visibility="hidden";
       }, 1000);
    }
}

// go to next page on click of next button
function goToNextPage(){
    window.location.href = ("part-four.html");
}