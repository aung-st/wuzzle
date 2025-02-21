let count = [0,0,0];
let lastChoice;

function getRadioValue(){
    let answer = document.getElementsByName('answer');
    let answer_value;


    for (let i = 0; i <answer.length; i++){
        if (answer[i].checked){
            answer_value = answer[i].value;

           
            count[i] += 1; 

            // User picks an option between 1-3 from top down of radio buttons
            lastChoice = i+1
            
            console.log(answer_value,count,lastChoice);
        }
    }
}

function trackAnswers(){

    getRadioValue();
    
    // user selects "I don't know" for the first time
    if (count[1] == 1){
        alert("You can try a bit harder than that!");
    }   
        // user selects "Just Because" and part one is complete
        else if (lastChoice ==1 && count[1] >= 5){
            alert("Okay you can stop trying to answer the question now...");
        }
        // user finishes part one
        else if (count[1] == 5){
            alert("Look over there! A secret button!");
        }
        // user selects "Bad at naming" after finishing part one
        else if (count[1] > 5){
            alert("Okay you can stop trying to answer the question now...");
        }

        // user selects "Just because" and hasn't completed part one yet
        else if (lastChoice == 1){
            alert("I mean yes but no... try again!");
        }
        // user selects "Bad at naming"
        else if (lastChoice == 3){
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
