
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
// variable costs
function calcv(){

    let seeda = document.getElementById("seedamount").value;
    let seedp = document.getElementById("seedprice").value;
    let poisona = document.getElementById("poisonamount").value;
    let poisonp = document.getElementById("poisonprice").value;
    let fertilizera = document.getElementById("fertilizeramount").value;
    let fertilizerp = document.getElementById("fertilizerprice").value;

    let answerval = document.getElementById("Answervar");
    let seed = document.getElementById("seed");
    let poison = document.getElementById("poison");
    let fertil = document.getElementById("fertilizer");


    sum = seeda * seedp +  poisona * poisonp + fertilizera * fertilizerp;
    console.log(sum)

    seedsum = seeda * seedp;
    seedpercent = seedsum*100/sum;

    poisonsum = poisona * poisonp;
    poisonpercent = poisonsum*100/sum;

    fertilsum = fertilizera * fertilizerp;
    fertilpercent = fertilsum*100/sum;

    seed.innerHTML = " هزینه بذر: " + seedsum ;
    poison.innerHTML = " هزینه سم: " +  poisonsum;
    fertil.innerHTML = " هزینه کود: " + fertilsum;

    seed.innerHTML += '<br>';
    seed.innerHTML += "درصد: " + seedpercent.toFixed(2) + '%';
    poison.innerHTML += '<br>';
    poison.innerHTML += "درصد: " + poisonpercent.toFixed(2) + '%';
    fertil.innerHTML += '<br>';
    fertil.innerHTML += "درصد: " + fertilpercent.toFixed(2) + '%';
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

// fixed costs
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


let net_chart = new Chart(document.getElementById("net-chart"), {
    type: 'bar',

    data: {
        labels: [],
        datasets: [
            {

                // label: "تجمعی",
                backgroundColor: "#127437",
                data: [],

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
                text: 'خالص جریان وجوه نقد',
                font: {
                    family: "iransans"
                }
            }
        }
    }
});

let cumulative_chart = new Chart(document.getElementById("cumulative -chart"), {
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            {
                // label: "تجمعی", ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
                backgroundColor: "#bbc71a",
                data: [],
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

let mixedChart = new Chart(document.getElementById("mix -chart"), {
    type: 'bar',
    data: {
        datasets: [{
            label: 'هزینه‌های متغیر',
            data: [],
            backgroundColor: "#3e95cd",
            // this dataset is drawn below
            order: 3
        }, {
            label: 'هزینه‌های ثابت',
            data: [],
            type: 'bar',
            backgroundColor: "#c45850",
            // this dataset is drawn on top
            order: 1
        },{
            label: 'درآمد',
            data: [],
            type: 'bar',
            backgroundColor: "#3cba9f",
                // this dataset is drawn on top
                order: 2
            }
        ],
        labels: []
    },
	    options: {
        responsive: false,
        legend: { display: false },

        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: 'جدول جریان نقدی درآمد و هزینه ها به قیمت جاری',
                font: {
                    family: "iransans"
                }
            }
        }
    }
	
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}



function addData2(chart, label, data) {
    chart.data.labels.push(label);
    for (let i = 0; i< data.length; ++i){
        chart.data.datasets[i].data.push(data[i]);
    }
    // chart.data.datasets.forEach((dataset) => {
    //     dataset.data.push(data);
    // });
    chart.update();
}
// mixedChart.data.datasets[0].data.push(100);
// mixedChart.update();
// console.log(mixedChart.data.datasets[0].data);


function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}


function calculate(){

    // remove chart data
    for (let i = 0 ; i < 5; i++) {
        removeData(mixedChart);
        removeData(cumulative_chart);
        removeData(net_chart);
    }


    // let return_percent = document.getElementById('return-percent').value;
    // let b0 = document.getElementById('1400').value;
    // let b1 = document.getElementById('1401').value;
    // let b2 = document.getElementById('1402').value;
    // let b3 = document.getElementById('1403').value;
    // let b4 = document.getElementById('1404').value;

    // let answer = document.getElementById("Answer4");

    //income
    let productp = document.getElementById('productprice').value;
    let producta = document.getElementById('productamount').value;

    let income = producta * productp;


    //fixed cost
    let farm = document.getElementById('farm').value;
    let areaconstruction = document.getElementById('areaconstruction').value;
    let building = document.getElementById('building').value;
    let machinery = document.getElementById('machinery').value;
    let equipment = document.getElementById('equipment').value;
    let transportation = document.getElementById("transportation").value;
    let officeequipment = document.getElementById("officeequipment").value;
    let costbefore = document.getElementById("costbefore").value;
    let unpredictedcosts = document.getElementById("unpredictedcosts").value;

    let fixedcost = 1.15 * (parseInt(farm) + parseInt(areaconstruction) +parseInt(building)  +
                    parseInt(machinery) + parseInt(equipment) + parseInt(transportation) +
                    parseInt(officeequipment) + parseInt(costbefore) + parseInt(unpredictedcosts)) ;

    // variable costs
    let seeda = document.getElementById("seedamount").value;
    let seedp = document.getElementById("seedprice").value;
    let poisona = document.getElementById("poisonamount").value;
    let poisonp = document.getElementById("poisonprice").value;
    let fertilizera = document.getElementById("fertilizeramount").value;
    let fertilizerp = document.getElementById("fertilizerprice").value;
    let salary = document.getElementById("salary").value;
    let employee = document.getElementById("employee").value;

    let seedsum = seeda * seedp;
    let poisonsum = poisona * poisonp;
    let fertilsum = fertilizera * fertilizerp;
    let salarysum = salary * employee;


    //      test        //
    fixedcost = 3469376*1.15;
    seedsum = 45000;
    poisonsum = 6968;
    fertilsum = 50254;
    salarysum = 459000;
    income = 1350000;

    let other = 0.25 *(seedsum + poisonsum + salarysum + fertilsum) ;
	console.log(other);
    let initial_year = 1400;
    let discount_Rate = 0.25;
    let tavarom = 1.15;

    let seed_cashflow = [0];
    let poison_cashflow = [0];
    let fertil_cashflow = [0];
    let salary_cashflow = [0];
    let income_cashflow = [0];
    let other_cashflow = [0];

    let fixedcost_cashflow = [fixedcost]
    let variablecost_cashflow = []

    for (let i = 2; i < 6; i++) {
        seed_cashflow.push(Math.round(seedsum*Math.pow(tavarom, i)));
        poison_cashflow.push(Math.round(poisonsum*Math.pow(tavarom, i)));
        fertil_cashflow.push(Math.round(fertilsum*Math.pow(tavarom, i)));
        salary_cashflow.push(Math.round(salarysum*Math.pow(tavarom, i)));
        income_cashflow.push(Math.round(income*Math.pow(tavarom, i)));
        other_cashflow.push(Math.round(other*Math.pow(tavarom, i)));
        fixedcost_cashflow.push(0);
        // console.log(seedsum*Math.pow(tavarom, i));
    }

    for (let i = 0 ; i < 5; i++){
        // console.log(seed_cashflow[i] + poison_cashflow[i] + fertil_cashflow[i] + salary_cashflow[i] + other_cashflow[i]);
        // console.log(103/100*(seed_cashflow[i] + poison_cashflow[i] + fertil_cashflow[i] + salary_cashflow[i] + other_cashflow[i]));
        // adding 3% for unexpected costs
        variablecost_cashflow.push(103/100*(seed_cashflow[i] + poison_cashflow[i] + fertil_cashflow[i] + salary_cashflow[i] + other_cashflow[i]));
    }

    // console.log(seed_cashflow);
    // console.log(poison_cashflow);
    // console.log(fertil_cashflow);
    // console.log(salary_cashflow);
    // console.log(other_cashflow);

    console.log("variable",variablecost_cashflow);
    console.log("income",income_cashflow);

    IRR_cashflow = [];

    for (let i = 0; i<5; i++){
            data = income_cashflow[i] - fixedcost_cashflow[i] - variablecost_cashflow[i];
            IRR_cashflow.push(data);
            addData(net_chart, initial_year + i, data);
    }

    const cumulativeSum = (sum => value => sum += value)(0);
	
	let payback = -1;
    let tajamoe = IRR_cashflow.map(cumulativeSum);
    for (let i = 0; i<5; i++){
        addData(cumulative_chart, initial_year + i, tajamoe[i]);
		if (tajamoe[i] > 0){
			payback = i+1;
		}
		
        addData2(mixedChart, initial_year + i, [-1 * variablecost_cashflow[i], -1*fixedcost_cashflow[i], income_cashflow[i] ] );
    }


    console.log("final",IRR_cashflow);

    // ######################################
    // ##########    Results    #############
    // ######################################

    // NPV
    let final_NPV = NPV([0].concat(IRR_cashflow), discount_Rate);
    console.log(final_NPV);
    document.getElementById('npvResult').innerHTML = parseInt(final_NPV);

    // IRR
    let final_IRR = IRR(IRR_cashflow);
    console.log(final_IRR);
    document.getElementById('irrResult').innerHTML = Math.round(final_IRR * 100) + "%";
    // console.log(fixed_cost_NPV);



	// PAY BACK INSTEAD OF PI
	
	document.getElementById('piResult').innerHTML = payback ;


    // PI
    let fixed_cost_NPV = NPV([0].concat(fixedcost_cashflow), discount_Rate);
    let variable_cost_NPV = NPV([0].concat(variablecost_cashflow), discount_Rate);
    //let PI = final_NPV / (fixed_cost_NPV + variable_cost_NPV);
    // console.log(variable_cost_NPV);
    //console.log(parseInt(PI * 100));
    //document.getElementById('piResult').innerHTML = parseInt(PI * 100 );

    // B/C
    let income_NPV = NPV([0].concat(income_cashflow), discount_Rate);
    let BC = income_NPV / (fixed_cost_NPV + variable_cost_NPV);
    console.log(BC.toFixed(3));
    document.getElementById('bcResult').innerHTML = BC.toFixed(2);
    // answer.innerHTML = x.toFixed(2)
    //
    // console.log(answer)
    // console.log(isNaN(answer.innerHTML))
    //
    // if (isNaN(answer.innerHTML)){
    //     answer.innerHTML = "لطفا تمام فیلد ها را پر کنید";
    //     answer.style.color = 'darkred'
    // }else{
    //     answer.innerHTML =  "NPV: "+ answer.innerHTML
    //     // answer.style.color = 'white'
    //     answer.style.color = 'green'
    // }


}

const NPV = (cashflow, discountRate) => cashflow
    .reduce((acc, val, i) => acc + val / Math.pow((1 + discountRate), i ), 0);

const IRR = (cashflow, initialGuess = 0.1) => {
    const maxTries = 10000;
    const delta = 0.001;
    let guess = initialGuess;
    const multiplier = NPV(cashflow, guess) > 0 ? 1 : -1;
    let i = 0;
    while ( i < maxTries ) {
        const guessedNPV = NPV(cashflow, guess);
        if ( multiplier * guessedNPV > delta ) {
            guess += (multiplier * delta);
            i += 1;
        }
        else break;
    }
    return guess;
    console.log(`Found IRR = ${guess} in ${i} trials`);
}

/** * Calculates the Net Present Value of a given initial investment * cost and an array of cash flow values with the specified discount rate. * * @param{number}rate - The discount rate percentage * @param{number}initialCost - The initial investment * @param{array}cashFlows - An array of future payment amounts * @return{number}The calculated Net Present Value */
function getNPV(rate, initialCost, cashFlows){
    return cashFlows.reduce((accumulator, currentValue, index) =>accumulator + currentValue / Math.pow(rate / 100 + 1, index + 1),initialCost )
}



// Bar chart
// var ctx = document.getElementById("bar-chart");







// next & prev
    btns = document.getElementsByClassName('nav-link');
    tabPane = document.getElementsByClassName('tab-pane');

    function next() {
        document.getElementById('prevBtnId').disabled = false;

        for (let i = 0; i < btns.length - 1 ; i++){
            if (btns[i].classList.contains('active')){
                btns[i].classList.remove('active');
                btns[i].ariaSelected = false;
                tabPane[i].classList.remove('active');
                tabPane[i].classList.remove('show');

                btns[i+1].classList.add('active');
                btns[i+1].ariaSelected = true;
                tabPane[i+1].classList.add('active');
                tabPane[i+1].classList.add('show');
                if (btns[5].classList.contains('active')){
                    document.getElementById('nextBtnId').disabled = true;
                }
                if (!btns[0].classList.contains('active')){
                    document.getElementById('preBtnId').disabled = true;
                }
                break;
            }
        }
    }

    function prev() {
        document.getElementById('nextBtnId').disabled = false;

        for (let i = 1 ; i < btns.length ; i++){
            if (btns[i].classList.contains('active')){
                btns[i].classList.remove('active');
                btns[i].ariaSelected = false;
                tabPane[i].classList.remove('active');
                tabPane[i].classList.remove('show');

                btns[i-1].classList.add('active');
                btns[i-1].ariaSelected = true;
                tabPane[i-1].classList.add('active');
                tabPane[i-1].classList.add('show');
                if (btns[0].classList.contains('active')){
                    document.getElementById('prevBtnId').disabled = true;
                }
                break;
            }
        }
    }

    if (btns[0].classList.contains('active')){
        document.getElementById('prevBtnId').disabled = true;
    }


let answer5 = document.getElementById('answer5');
function incomeMult(){
    let fMoney = document.getElementById('productprice').value;
    console.log(fMoney);
    let fProduce = document.getElementById('productamount').value;
    console.log(fProduce);
    answer5.innerHTML = "درآمد : " + fMoney * fProduce;
    // return fMoney * fProduce;
}

function splitDigit(inp){
    var nStr = inp.value + '';
    nStr = nStr.replace( /\,/g, "");
    var x = nStr.split( '.' );
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while ( rgx.test(x1) ) {
        x1 = x1.replace( rgx, '$1' + ',' + '$2' );
    }
    inp.value = x1 + x2;

}

let product = document.getElementById('product');  
let productArea = document.getElementById('productarea');  
let projectName = document.getElementById('projectname');  

function checkInfo(){
    if(productArea.value == '' || projectName.value == '' || product.value === '---')
        alert('لطفا تمام فیلد های اطلاعات کلی را پر کنید');  
}

let farm = document.getElementById('farm');
let areaConstruction = document.getElementById('areaconstruction');
let building = document.getElementById('building');
let machinery = document.getElementById('machinery');
let equipment = document.getElementById('equipment');
let transportation = document.getElementById('transportation');
let officeEquipment = document.getElementById('officeequipment');
let costBefore = document.getElementById('costbefore');
let unPredictedCosts = document.getElementById('unpredictedcosts');

function checkFixedCost(){
    if(farm.value == '' || areaConstruction.value == '' || building.value == '' || machinery.value == '' || equipment.value == '' || 
        transportation.value == '' || officeEquipment.value == ''  || costBefore.value == '' || unPredictedCosts.value == ''
    )
        alert('لطفا تمام فیلد های هزینه های ثابت را پر کنید');
}


let seedAmount = document.getElementById('seedamount');
let seedPrice = document.getElementById('seedprice');
let poisonAmount = document.getElementById('poisonamount');
let poisonPrice = document.getElementById('poisonprice');
let fertilizerAmount = document.getElementById('fertilizeramount');
let fertilizerPrice = document.getElementById('fertilizerprice');
let salary = document.getElementById('salary');
let employee = document.getElementById('employee');

function checkvariabledCost(){
    if(seedAmount.value == '' || seedPrice.value == '' || poisonAmount.value == '' || poisonPrice.value == '' || fertilizerAmount.value == '' ||
    fertilizerPrice.value == '' || salary.value == '' || employee.value == ''
    )
        alert('لطفا تمام فیلد های هزینه های متغیر را پر کنید');
}


let productAmount = document.getElementById('productamount');
let productPrice = document.getElementById('productprice');

function checkIncome(){
    if(productAmount.value == '' || productPrice.value == '')
        alert('لطفا تمام فیلد های درآمد را پر کنید')
}