function getRadioValue(){
    let answer = document.getElementsByName('answer');
    let answer_value;
    for (let i = 0; i <answer.length; i++){
        if (answer[i].checked){
            answer_value = answer[i].value;
            console.log(answer_value);
        }
    }
}

