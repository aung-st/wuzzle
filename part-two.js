const buttons = document.querySelectorAll(".dial-pad-button");
let code = ""

buttons.forEach( button => button.addEventListener("click", (e) => {
        const clickedPad = e.currentTarget.getAttribute("data-number");
        code += clickedPad;
        console.log(clickedPad);
        console.log(code);
    }
))