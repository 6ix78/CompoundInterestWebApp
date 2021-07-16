function calculate() {
    var amount = 0;
    var principle = document.getElementById("principle").innerHTML; 
    var interestRate = document.getElementById("interest-rate").innerHTML / 100; 
    var years = document.getElementById("num-years").innerHTML;
    var compoundingPeriods = document.getElementById("compounding-periods").innerHTML;
    var multiplier = 1;
    var strCompoundingPeriods = compoundingPeriods.options[compoundingPeriods.selectedIndex].text;
    if (strCompoundingPeriods == "Yearly"){
        multiplier = 1;
    }
    else if(strCompoundingPeriods == "Quarterly"){
        multiplier = 4;
    }
    else if(strCompoundingPeriods == "Monthly"){
        multiplier = 12;   
    }
    else if(strCompoundingPeriods == "Weekly"){
        multiplier = 52;
    }
    else{
        multiplier = 365;
    }
    
    amount = principle * (1+interestRate);
    console.log(principle);
    console.log(interestRate);
    console.log("Hello");
    document.getElementById("amount").innerHTML = "Amount: $" + amount;
}