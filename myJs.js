
function calc(){

    let farmArea = document.getElementById('farmArea').value;
    let plantNumber = document.getElementById('plantNumber').value;
    let costPer = document.getElementById('costPer').value;
    let interstRatio = document.getElementById('interstRatio').value;
    let performRatio = document.getElementById('performRatio').value;
    let answer = document.getElementById("Answerz");

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

function calc2(){

    let farmprepare = document.getElementById('farmprepare').value;
    let farmrent = document.getElementById('farmrent').value;
    let plant = document.getElementById('plant').value;
    let grow = document.getElementById('grow').value;
    let harvest = document.getElementById('harvest').value;
    let answer = document.getElementById("Answer2");


    answer.innerHTML =  (parseInt(farmprepare) + parseInt(farmrent) +parseInt(plant)  + parseInt(grow) + parseInt(harvest)) ;

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

function calc3(){

    let farm = document.getElementById('farm').value;
    let areaconstruction = document.getElementById('areaconstruction').value;
    let building = document.getElementById('building').value;
    let machinery = document.getElementById('machinery').value;
    let equipment = document.getElementById('equipment').value;
    let transportation = document.getElementById("transportation").value;
    let officeequipment = document.getElementById("officeequipment").value;
    let costbefore = document.getElementById("costbefore").value;
    let unpredictedcosts = document.getElementById("unpredictedcosts").value;

    let answer = document.getElementById("Answer3");

    answer.innerHTML =  (parseInt(farm) + parseInt(areaconstruction) +parseInt(building)  + parseInt(machinery) + parseInt(equipment) + parseInt(transportation) +
                            parseInt(officeequipment) + parseInt(costbefore) + parseInt(unpredictedcosts)) ;

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
