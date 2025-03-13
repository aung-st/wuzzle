// track each count of total presses of each radio button with array
let count = [0,0,0];
// last radio button choice that was submitted
let lastChoice;
let solved = false;

function getRadioValue(){
    let answer = document.getElementsByName('answer');
    let answer_value;


    for (let i = 0; i <answer.length; i++){
        if (answer[i].checked){
            answer_value = answer[i].value;

           
            count[i] += 1; 

            // User picks an option between 1-3 from top down of radio buttons
            lastChoice = i+1
            
        }
    }
}

function trackAnswers(){

    getRadioValue();
    
    // user selects "I don't know" for the first time
    if (count[1] == 1 && lastChoice==2){
        alert("You can try a bit harder than that!");
    }   

        // user submits an answer after completeing part one
        else if (solved){
            alert("Okay you can stop trying to answer the question now...");
        }

        // user completes part one
        else if (count[1] == 5){
            alert("Look over there! A secret button!");
            solved = true;
        }

        // user selects "Just because" and hasn't completed part one yet
        else if (lastChoice == 1 && count[1] <5){
            alert("I mean yes but no... try again!");
        }

        // user selects "Bad at naming" and hasn't completed part one yet
        else if (lastChoice == 3  && count[1] <5){
            alert("Shut up I am not good at naming things!");
        }
    
    // Check if part one is complete 
    if (count[1] == 5){
        showNextButton();
    } 
}

function showNextButton(){
    document.getElementById("next-button").style.visibility="visible";   
}

function goToNextPage(){
    window.location.href = ("part-two.html");
}