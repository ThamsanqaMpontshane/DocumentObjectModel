// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var callsTotal1 = 0;
var smsTotal1 = 0;
function radioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billTypeEntered = checkedRadioBtn.value;
    if(billTypeEntered === "call"){
        callsTotal1 += 2.75;
    }
    else if(billTypeEntered === "sms"){
        smsTotal1 += 0.75;
    }
    document.querySelector(".callTotalTwo").innerHTML = callsTotal1.toFixed(2);
    document.querySelector(".smsTotalTwo").innerHTML = smsTotal1.toFixed(2);
    var totalCost1 = callsTotal1 + smsTotal1;

    document.querySelector(".totalTwo").innerHTML = totalCost1.toFixed(2);
    var totalTwo = document.querySelector(".totalTwo").innerHTML;

    if (totalTwo > 30 && totalTwo < 49) {
        document.querySelector(".totalTwo").classList.add("warning");

    } else if (totalTwo > 50) {
        document.querySelector(".totalTwo").classList.add("danger");
    }
}

if (bill[i] === "call" || bill[i] === "CALL" || bill[i] === "Call" || bill[i] === "calL" || bill[i] === "cAll") {
    total += 2.75;
} else if (bill[i] === "sms" || bill[i] === "SMS" || bill[i] === "SmS" || bill[i] === "Sms" || bill[i] === "smS" || bill[i] === "sMs") {
    total += 0.75;
}



