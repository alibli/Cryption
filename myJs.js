
let answer = document.getElementById("Answerz");


function calc(){

    let farmArea = document.getElementById('farmArea').value;
    let plantNumber = document.getElementById('plantNumber').value;
    let costPer = document.getElementById('costPer').value;
    let interstRatio = document.getElementById('interstRatio').value;
    let performRatio = document.getElementById('performRatio').value;

    console.log(costPer)

    answer.innerHTML =  (parseInt(farmArea) + parseInt(plantNumber) +parseInt(costPer)  + parseInt(interstRatio) + parseInt(performRatio)) ;

    console.log(answer)
    console.log(isNaN(answer.innerHTML))

    if (isNaN(answer.innerHTML)){
        answer.innerHTML = "لطفا تمام فیلد ها را پر کنید";
        answer.style.color = 'darkred'
    }else{
        answer.innerHTML =  "نتیجه: "+ answer.innerHTML
        answer.style.color = 'white'
    }
}
