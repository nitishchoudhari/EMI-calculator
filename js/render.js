var renderObj = {};

(function() {
    console.log(bizObj);
    function renderEMICalculations(){
        var calculate = bizObj.calculateEMI(bizObj.renderEMICalculations());
        console.log('calculate: ', calculate);

        document.getElementById("r1").innerHTML = calculate.emi
        document.getElementById("r2").innerHTML = calculate.principleAmt;
        document.getElementById("r3").innerHTML = calculate.totalInterest;
        document.getElementById("r4").innerHTML = calculate.totalAmount;

        bizObj.DrawChart(calculate.principleAmt, calculate.totalInterest, calculate.totalAmount, calculate.emi)
    }

    renderObj.renderEMICalculations = renderEMICalculations;

})();





