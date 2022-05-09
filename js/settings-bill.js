// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var call = 0;
var sms = 0;
var critical = 0;
var warning = 0;

var callsTotal2 = 0;
var smsTotal2 = 0;
var totalCost2 = 0;

function settingsBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billTypeEntered1 = checkedRadioBtn.value;
    }

    if (totalCost2 < critical) {

        if (billTypeEntered1 === "call") {
            callsTotal2 += call;

        } else if (billTypeEntered1 === "sms") {
            smsTotal2 += sms;

        }
    }


    totalCost2 = callsTotal2 + smsTotal2;


    if (totalCost2 >= critical) {
        document.querySelector(".totalSettings").classList.remove("warning");
        document.querySelector(".totalSettings").classList.add("danger");

    }
    else if (totalCost2 >= warning && totalCost2 < critical) {
        document.querySelector(".totalSettings").classList.remove("danger");
        document.querySelector(".totalSettings").classList.add("warning");

    } else {
        document.querySelector(".totalSettings").classList.remove("warning");
        document.querySelector(".totalSettings").classList.remove("danger");
    }


    document.querySelector(".callTotalSettings").innerHTML = callsTotal2.toFixed(2);
    document.querySelector(".smsTotalSettings").innerHTML = smsTotal2.toFixed(2);
    document.querySelector(".totalSettings").innerHTML = totalCost2.toFixed(2);
}

function updateCosts() {
    call = Number(document.querySelector(".callCostSetting").value);
    sms = Number(document.querySelector(".smsCostSetting").value);
    critical = Number(document.querySelector(".criticalLevelSetting").value);
    warning = Number(document.querySelector(".warningLevelSetting").value);

    document.querySelector(".totalSettings").classList.remove("warning");
    document.querySelector(".totalSettings").classList.remove("danger");

    if (totalCost2 >= critical) {
        document.querySelector(".totalSettings").classList.remove("warning");
        document.querySelector(".totalSettings").classList.add("danger");

    }

    else if (totalCost2 >= warning) {
        document.querySelector(".totalSettings").classList.remove("danger");
        document.querySelector(".totalSettings").classList.add("warning");
    }

}
