
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


function calc4(){

    let return_percent = document.getElementById('return-percent').value;
    let b0 = document.getElementById('1400').value;
    let b1 = document.getElementById('1401').value;
    let b2 = document.getElementById('1402').value;
    let b3 = document.getElementById('1403').value;
    let b4 = document.getElementById('1404').value;

    let answer = document.getElementById("Answer4");


    const NPV = (cashflow, discountRate) => cashflow
        .reduce((acc, val, i) => acc + val / Math.pow((1 + discountRate), i), 0);

    const cashflow = [parseInt(b0), parseInt(b1), parseInt(b2), parseInt(b3), parseInt(b4)];
    console.log(NPV(cashflow, return_percent)); // 476.19047619047524

    var rate = 10;
    var initialCost = 0;
    var cashFlows2 = [0, 45000, 45000, 45000, 45000];
    console.log(getNPV(rate, initialCost, cashFlows2))


    answer.innerHTML = getNPV(rate, initialCost, cashFlows2)

    console.log(answer)
    console.log(isNaN(answer.innerHTML))

    if (isNaN(answer.innerHTML)){
        answer.innerHTML = "لطفا تمام فیلد ها را پر کنید";
        answer.style.color = 'darkred'
    }else{
        answer.innerHTML =  "NPV: "+ answer.innerHTML
        answer.style.color = 'white'
    }
}

/** * Calculates the Net Present Value of a given initial investment * cost and an array of cash flow values with the specified discount rate. * * @param{number}rate - The discount rate percentage * @param{number}initialCost - The initial investment * @param{array}cashFlows - An array of future payment amounts * @return{number}The calculated Net Present Value */
function getNPV(rate, initialCost, cashFlows){
    return cashFlows.reduce((accumulator, currentValue, index) =>accumulator + currentValue / Math.pow(rate / 100 + 1, index + 1),initialCost )
}
