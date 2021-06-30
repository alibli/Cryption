
let answer = document.getElementById("Answerz");


function calc(){

    let farmArea = document.getElementById('farmArea').value;
    let plantNumber = document.getElementById('plantNumber').value;
    let costPer = document.getElementById('costPer').value;
    let interstRatio = document.getElementById('interstRatio').value;
    let performRatio = document.getElementById('performRatio').value;

    console.log(costPer)

    answer.innerHTML = "نتیجه: " + (parseInt(farmArea) + parseInt(plantNumber) +parseInt(costPer)  + parseInt(interstRatio) + parseInt(performRatio)) ;
}
