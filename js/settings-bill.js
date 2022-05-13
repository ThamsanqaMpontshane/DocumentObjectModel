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


    document.querySelector(".totalSettings").classList.remove("warning");
    document.querySelector(".totalSettings").classList.remove("danger");
    document.querySelector(".totalSettings").classList.add(setting.totalClassName());

}