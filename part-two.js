const buttons = document.querySelectorAll(".dial-pad-button");
let code = ""
let solved = false; 

// TODO: check that the puzzle is solved without having to press a button otherwise if you get 159 then you have 
// to press 1 more time to get the next button to show
if (solved){
    goToNextPage();
    } else {
        // Every time a button is pressed the code string should be updated
        buttons.forEach( button => button.addEventListener("click", (e) => {
            trackCode();
            const clickedPad = e.currentTarget.getAttribute("data-number");
            code += clickedPad; 
            displayCode();     
        }));
    }

function displayCode(){
    document.getElementById("code").innerHTML = code;
}

// reset code string 
function reset(){
    code = "";
    displayCode();
}

// check if code is correct and if so show the next button
function trackCode(){
    if (code == "159"){
        document.getElementById("next-button").style.visibility="visible";
        solved = true;
    }
}

function goToNextPage(){
    window.location.href = ("part-three.html");
}