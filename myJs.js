
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

function calc1(){

    let projectname = document.getElementById("projectname").value;
    let product = document.getElementById("product").value;
    let productarea = document.getElementById("productarea").value;
    let city = document.getElementById("city").value;
    let answer = document.getElementById("Answer1");

    answer.innerHTML =  productarea + projectname + product + city;

    console.log(product)
    console.log(projectname)
    console.log(productarea)
    console.log(city)
    console.log(answer.innerHTML)
    console.log(isNaN(answer.innerHTML))

    if (!isNaN(answer.innerHTML)){
        answer.innerHTML = "لطفا تمام فیلد ها را پر کنید";
        answer.style.color = 'darkred'
    }else{
        answer.innerHTML =  "اطلاعات با موفقیت ثبت شد"
        answer.style.color = 'white'
    }
}

function calcv(){

    let seeda = document.getElementById("seedamount").value;
    let seedp = document.getElementById("seed price").value;
    let poisona = document.getElementById("poisonamount").value;
    let poisonp = document.getElementById("poisonprice").value;
    let fertilizera = document.getElementById("fertilizeramount").value;
    let fertilizerp = document.getElementById("fertilizerprice").value;

    let seed = document.getElementById("seed");
    let poison = document.getElementById("poison");
    let fertil = document.getElementById("fertilizer");

    seed.innerHTML = " هزینه بذر: " + seeda * seedp ;
    poison.innerHTML = " هزینه سم: " +  poisona * poisonp;
    fertil.innerHTML = " هزینه کود: " + fertilizera * fertilizerp;



    console.log(seeda*seedp)
    console.log(seed.innerHTML)
    // if (!isNaN(answer.innerHTML)){
    //     answer.innerHTML = "لطفا تمام فیلد ها را پر کنید";
    //     answer.style.color = 'darkred'
    // }else{
    //     answer.innerHTML =  "اطلاعات با موفقیت ثبت شد"
    //     answer.style.color = 'white'
    // }
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


    const cashflow = [parseInt(b0), parseInt(b1), parseInt(b2), parseInt(b3), parseInt(b4)];

    const NPV = (cashflow, discountRate) => cashflow
        .reduce((acc, val, i) => acc + val / Math.pow((1 + discountRate), i), 0);
    console.log(NPV(cashflow, return_percent)); // 476.19047619047524

    var initialCost = 0;
    var x = getNPV(return_percent, initialCost, cashflow)

    answer.innerHTML = x.toFixed(2)

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



// Bar chart


// var ctx = document.getElementById("bar-chart");

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',

    data: {
      labels: ["1400", "1401", "1402", "1403", "1404"],
      datasets: [
        {

          // label: "تجمعی",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [-3470803,-2562083,-1653364,-744644,164076],

        }
      ]
    },
    options: {
        responsive: false,
      legend: { display: false },

        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'خالص تجمعی جریان وجوه نقد',
                    font: {
                        family: "iransans"
                    }
            }
        }
    }
});