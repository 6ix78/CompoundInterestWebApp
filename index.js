document.getElementById("calcButton").onclick = function() {calculate()};

function calculate() {
    var principle = document.getElementById("principle"); 
    var interestRate = document.getElementById("interest-rate"); 
    var compoundingPeriods = document.getElementById("compounding-periods");
    var strCompoundingPeriods = compoundingPeriods.options[compoundingPeriods.selectedIndex].value;
    
}