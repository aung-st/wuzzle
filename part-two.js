const buttons = document.querySelectorAll(".dial-pad-button");
let code = ""
solved = False 

buttons.forEach( button => button.addEventListener("click", (e) => {
    if (solved){
        goToNextPage();
    }   else{
            const clickedPad = e.currentTarget.getAttribute("data-number");
            code += clickedPad;      
        }      
}));

function trackCode(){
    if (code == "1111"){
        document.getElementById("next-button").style.visibility="visible";
    }
}

function goToNextPage(){
    window.location.href = ("part-three.html");
}