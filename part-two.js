const buttons = document.querySelectorAll(".dial-pad-button");
let code = ""
let submitted = false; 
const solvedOnSubmitMessage = "Go on to the next part why are you still submitting?" 

// Every time a button is pressed a number character will be concatenated into the code string
buttons.forEach( button => button.addEventListener("click", (e) => {
    
    if (submitted){
        document.getElementById("wrong-answer").style.visibility="hidden";
    }

    const clickedPad = e.currentTarget.getAttribute("data-number");
    code += clickedPad; 
    displayCode();     
    submitted = false;
}));

// show the code next to the header on the top div container
function displayCode(){
    document.getElementById("code").innerHTML = code;
}

// reset code string 
function reset(){
    code = "";
    displayCode();
}

// check if code is correct and if so show the next button otherwise reset code 
function submit(){
    if (code == "159"){
        document.getElementById("next-button").style.visibility="visible";
        // add message if user submits answers after solving
        document.getElementById("wrong-answer").innerHTML = solvedOnSubmitMessage;
    } else {
       reset();
       document.getElementById("wrong-answer").style.visibility="visible";
       submitted = true; 
    }
}

// go to next page on click of next button
function goToNextPage(){
    window.location.href = ("part-three.html");
}