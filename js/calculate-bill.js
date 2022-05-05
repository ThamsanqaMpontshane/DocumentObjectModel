//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

//function to calculate the billString1 total
//  * this function should take the billString as an argument
//  * split the string on a comma
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function totalPhoneBill(phoneBill) {
    var total = 0;
    var bill = phoneBill.split(",");
    for (i = 0;i < bill.length;i++) {
    var billString1 = bill[i].trim()
    if (billString1 === "call" || billString1 === "CALL" || billString1 === "Call" || billString1 === "calL" || billString1 === "cAll") {
            total += 2.75;
    } else if (billString1 === "sms" || billString1 === "SMS" || billString1 === "SmS" || billString1=== "Sms" || billString1 === "smS" || billString1 === "sMs") {
            total += 0.75;
        }
    }
    return total.toFixed(2);
};

function btnbtn() {
    var billString = document.querySelector(".billString").value;
    var billTotal = document.querySelector(".billTotal");
    billTotal.innerHTML = totalPhoneBill(billString);

    billTotal.classList.remove("warning");
    billTotal.classList.remove("danger");

    if (totalPhoneBill(billString) >= 20 && totalPhoneBill(billString) <= 30) {
        // adding the danger class will make the text red
        billTotal.classList.remove("danger");
        billTotal.classList.add("warning");
    }
    else if (totalPhoneBill(billString) > 30 && totalPhoneBill(billString) < 50) {
        billTotal.classList.remove("warning");
        billTotal.classList.add("danger");
    }

};
  

