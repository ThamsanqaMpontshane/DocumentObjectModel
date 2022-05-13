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


let setting = BillWithSettings()

function settingsBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billTypeEntered1 = checkedRadioBtn.value;
    }

        if (billTypeEntered1 === "call") {
             setting.makeCall();
        } else if (billTypeEntered1 === "sms") {
             setting.makeSms();
        }

    // if (getTotalCost >= critical) {
    //     document.querySelector(".totalSettings").classList.remove("warning");
    //     document.querySelector(".totalSettings").classList.add("danger");

    // } else if (getTotalCost >= warning && getTotalCost < critical) {
    //     document.querySelector(".totalSettings").classList.remove("danger");
    //     document.querySelector(".totalSettings").classList.add("warning");

    // } else {
    //     document.querySelector(".totalSettings").classList.remove("warning");
    //     document.querySelector(".totalSettings").classList.remove("danger");
    // }
    document.querySelector(".totalSettings").classList.remove("warning");
    document.querySelector(".totalSettings").classList.remove("danger");
    document.querySelector(".totalSettings").classList.add(setting.totalClassName());

    document.querySelector(".callTotalSettings").innerHTML = setting.getTotalCallCost().toFixed(2);
    document.querySelector(".smsTotalSettings").innerHTML = setting.getTotalSmsCost().toFixed(2);
    document.querySelector(".totalSettings").innerHTML = setting.getTotalCost().toFixed(2);
}

function updateCosts() {
        setting.setCallCost(Number(document.querySelector(".callCostSetting").value))
        setting.setSmsCost(Number(document.querySelector(".smsCostSetting").value))
        setting.setWarningLevel(Number(document.querySelector(".warningLevelSetting").value))
        setting.setCriticalLevel(Number(document.querySelector(".criticalLevelSetting").value))

    // call = Number(document.querySelector(".callCostSetting").value);
    // sms = Number(document.querySelector(".smsCostSetting").value);
    // critical = Number(document.querySelector(".criticalLevelSetting").value);
    // warning = Number(document.querySelector(".warningLevelSetting").value);

    document.querySelector(".totalSettings").classList.remove("warning");
    document.querySelector(".totalSettings").classList.remove("danger");
    document.querySelector(".totalSettings").classList.add(setting.totalClassName());
    
    // if (getTotalCost >= critical) {
    //     document.querySelector(".totalSettings").classList.remove("warning");

    // } else if (getTotalCost >= warning) {
    //     document.querySelector(".totalSettings").classList.remove("danger");
    //     document.querySelector(".totalSettings").classList.add("warning");
    // }

}