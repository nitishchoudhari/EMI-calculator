var bizObj = {};
(function () {
  
  // var myAmount = document.getElementById('myAmount');
  // var myRoi = document.getElementById('myRoi');
  // var myYears = document.getElementById('myYears');

  // function showRangeSliding(inpVal, ide){
  //   var sliderVal = ide;
  //   sliderVal.value = inpVal
  // }


  document.addEventListener("DOMContentLoaded", function(){
      renderObj.renderEMICalculations();
  })


  // range change by value
  function showInputLoanAmt(inpVal){
    var sliderVal = document.getElementById('myAmount');
    sliderVal.value = inpVal; 
    renderObj.renderEMICalculations();
  }
  function showInputPaAmt(inpVal){
    var sliderVal = document.getElementById('myRoi');
    sliderVal.value = inpVal; 
    renderObj.renderEMICalculations();
  }
  function showInputTenureAmt(inpVal){
    var sliderVal = document.getElementById('myYears');
    sliderVal.value = inpVal; 
    renderObj.renderEMICalculations();
  }


  // value change by range
  function showInputLoanRate(inpVal){
    var sliderVal = document.getElementById('inputAmount');
    sliderVal.value = inpVal; 
    renderObj.renderEMICalculations();
  }

  function showInputPaRate(inpVal){
    var sliderVal = document.getElementById('inputRoi');
    sliderVal.value = inpVal;
    renderObj.renderEMICalculations();
  }

  function showInputTenureRate(inpVal){
    var sliderVal = document.getElementById('inputYears');
    sliderVal.value = inpVal;
    renderObj.renderEMICalculations();
  }



  // DrawChart(500, 10000, 40000);
  // Draw Chart Logic
  function DrawChart(A, totalInterestVal, totalAmt, monthlyEmI) {
    var ctx = document.getElementById("myChart").getContext("2d");

    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Principal Amount", "Interest Amount", "Total Amount", "Monthly Emi"],
        datasets: [
          {
            backgroundColor: ["#5367ff", "#00d09c", "green", "red"],
            data: [A, totalInterestVal, totalAmt, monthlyEmI]
          },
        ],
      },
      options: {
        segmentShowStroke: false,
        responsive: true,
      },
    });
  }


 function renderEMICalculations(){
   return {
      "principleAmount": document.getElementById('inputAmount').value,
      "rateOfInterest" :  document.getElementById('inputRoi').value,
      "tenure" :  document.getElementById('inputYears').value
   }
 }



function calculateEMI(loandetails) {
    var principleAmt = loandetails.principleAmount;
    var roi = loandetails.rateOfInterest / 1200;
    var term = loandetails.tenure * 12;
    var top = Math.pow((1 + roi), term);
    var bottom = top - 1;
    var ratio = top / bottom;
    var emi = principleAmt * roi * ratio;
    var totalAmt = emi * term;
    var totalInt = totalAmt - principleAmt;

    var objEmi = {
      "emi" : emi.toFixed(0),
      "principleAmt": Number(principleAmt).toFixed(0),
      "totalInterest" : totalInt.toFixed(0),
      "totalAmount" : totalAmt.toFixed(0)
    }
    console.log(objEmi);
    return objEmi;
  }



  bizObj.showInputLoanAmt = showInputLoanAmt;
  bizObj.showInputPaAmt = showInputPaAmt;
  bizObj.showInputTenureAmt = showInputTenureAmt;

  bizObj.showInputLoanRate = showInputLoanRate;
  bizObj.showInputPaRate = showInputPaRate;
  bizObj.showInputTenureRate = showInputTenureRate;
  bizObj.renderEMICalculations = renderEMICalculations;
  bizObj.calculateEMI = calculateEMI;
  bizObj.DrawChart = DrawChart;
  Object.freeze(bizObj);
  
})();
























