//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

//function to calculate the bill total
//  * this function should take the billString as an argument
//  * split the string on a comma
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function totalPhoneBill(phoneBill) {
    var total = 0;
    var bill = phoneBill.split(",");
    for (var i = 0; i < bill.length; i++) {
        if (bill[i] === "call") {
            total += 2.75;
        } else if (bill[i] === "sms") {
            total += 0.65;
        }
    }
    return total.toFixed(2);
};

function btnbtn() {
    var billString = document.querySelector(".billString").value;
    var billTotal = document.querySelector(".billTotal");
    billTotal.innerHTML = totalPhoneBill(billString);

    if (totalPhoneBill(billString) >= 20 && totalPhoneBill(billString) < 29) {
        // adding the danger class will make the text red
        billTotal.classList.add("warning");
    }
    else if (totalPhoneBill(billString) >= 30 && totalPhoneBill(billString) < 50) {
        billTotal.classList.add("danger");
    }
};
  

