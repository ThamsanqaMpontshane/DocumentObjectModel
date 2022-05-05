// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
//if call is entered then add 2.75 to the call total
//if sms is entered then add 0.65 to the sms total
//if neither call or sms is entered then display an error message
//create a function
// if the value of billTypeText is equal to 'call' then add 2.75 to the callTotalOne
// if the value of billTypeText is equal to 'sms' then add 0.65 to the smsTotalOne
// if the value of billTypeText is not equal to 'call' or 'sms' then display an error message
// add an event listener for when the add button is pressed
// in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// var totalcall = 0;
// var totalsms = 0;

// var billTypeText = document.querySelector(".billTypeText").value

// function totalPhoneBill(phoneBill) {
//     var billtype = billTypeText.value;
//     var bill = phoneBill.split(",");
//     for (var i = 0; i < bill.length; i++) {
//         if (bill[i] === "call") {
//             totalcall += 2.75;
//         } else if (bill[i] === "sms") {
//             totalsms += 0.75;
//         }
//     }
//     return total.toFixed(2);
// }
// //
// function btnbtn1() {
//     ="call";  
//     var callTotal = document.querySelector(".callTotalOne");
//     callTotal.innerHTML = totalPhoneBill(billTypeText);
// };

// function btnbtn2(){
//   //  var billTypeText1 = document.querySelector(".billTypeText1").value="sms";
//     var smsTotal = document.querySelector(".smsTotalOne");
//     smsTotal.innerHTML = totalPhoneBill(billTypeText1);
// }
// const textTotalAddBtn = document.querySelector(".textTotalAddBtn");
var callsTotal = 0;
var smsTotal = 0;


function textBillTotal() {
    var billTypeText = document.querySelector(".billTypeText");
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value;
    // update the correct total
    if (billTypeEntered === "call" || billTypeEntered === "CALL" || billTypeEntered === "Call" || billTypeEntered === "calL" || billTypeEntered === "cAll" ) {

        callsTotal += 2.75;
    } else if (billTypeEntered === "sms" || billTypeEntered === "SMS" || billTypeEntered === "Sms" || billTypeEntered === "smS" || billTypeEntered === "sMs" || billTypeEntered === "SmS") {
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    document.querySelector(".callTotalOne").innerHTML = callsTotal.toFixed(2);
    document.querySelector(".smsTotalOne").innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;

    document.querySelector(".totalOne").innerHTML = totalCost.toFixed(2);
    //the total cost of .callTotalOne and .smsTotalOne should be displayed in the .totalOne element
    //add the danger class to the total if the total is greater than 20 and less than 30
    var totalOne = document.querySelector(".totalOne").innerHTML;

    if (totalOne > 50) {
        document.querySelector(".totalOne").classList.add("danger");

    } else if (totalOne > 30) {
        document.querySelector(".totalOne").classList.add("warning");
    }
}


//
// btz.addEventListener('click', textBillTotal);

// textTotalAddBtn.addEventListener('click', textBillTotal);