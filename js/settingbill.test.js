describe("The bill with settings factory function", function () {
    describe("SET VALUES", function () {


        // CALL
        it("should be able to set the call cost", function () {
            let settingBill = BillWithSettings();
            settingBill.setCallCost(1.85);
            assert.equal(1.85, settingBill.getCallCost());

            let settingBill2 = BillWithSettings();
            settingBill2.setCallCost(2.75);
            assert.equal(2.75, settingBill2.getCallCost());
        });


        // SMS
        it("should be able to set the sms cost", function () {
            let settingBill = BillWithSettings();
            settingBill.setSmsCost(0.75);
            assert.equal(0.75, settingBill.getSmsCost());

            let settingBill2 = BillWithSettings();
            settingBill2.setSmsCost(0.85);
            assert.equal(0.85, settingBill2.getSmsCost());
        });


        // CALL AND SMS
        it("should be able to get the call and sms cost", function () {
            let settingBill = BillWithSettings();

            settingBill.setCallCost(1.85);
            settingBill.setSmsCost(0.75);

            assert.equal(1.85, settingBill.getCallCost());
            assert.equal(0.75, settingBill.getSmsCost());

            let settingBill2 = BillWithSettings();

            settingBill2.setCallCost(2.75);
            settingBill2.setSmsCost(0.85);

            assert.equal(2.75, settingBill2.getCallCost());
            assert.equal(0.85, settingBill2.getSmsCost());
        });


        // WARNING
        it("should be able to set the warning level", function () {
            let settingBill = BillWithSettings();
            settingBill.setWarningLevel(10);
            assert.equal(10, settingBill.getWarningLevel());

            let settingBill2 = BillWithSettings();
            settingBill2.setWarningLevel(20);
            assert.equal(20, settingBill2.getWarningLevel());
        });


        // CRITICAL
        it("should be able to set the critical level", function () {
            let settingBill = BillWithSettings();
            settingBill.setCriticalLevel(30);
            assert.equal(30, settingBill.getCriticalLevel());

            let settingBill2 = BillWithSettings();
            settingBill2.setCriticalLevel(50);
            assert.equal(50, settingBill2.getCriticalLevel());
        });


        // WARNING AND CRITICAL
        it("should be able to set the warning and critical level", function () {
            let settingBill = BillWithSettings();
            settingBill.setWarningLevel(20);
            assert.equal(20, settingBill.getWarningLevel());

            let settingBill2 = BillWithSettings();
            settingBill2.setWarningLevel(25);
            assert.equal(25, settingBill2.getWarningLevel());
        });
    });

    describe("USE THE VALUES", function () {
        it("should be able to use the call cost set", function () {
            let settingBill = BillWithSettings();
            settingBill.setCallCost(2);
            settingBill.setSmsCost(0.75);
            settingBill.setCriticalLevel(6);

            settingBill.makeCall(1);
            settingBill.makeCall(2);
            settingBill.makeCall(3);

            assert.equal(6, settingBill.getTotalCost());
            assert.equal(6, settingBill.getTotalCallCost());
            assert.equal(0.0, settingBill.getTotalSmsCost());


        });
        it("should be able to use the call cost set for 2 call at 1.35 each", function () {
            let settingBill = BillWithSettings();
            settingBill.setCallCost(1.35);
            settingBill.setSmsCost(0.75);
            settingBill.setCriticalLevel(6);
            settingBill.makeCall(1);
            settingBill.makeCall(2);

            assert.equal(2.7, settingBill.getTotalCost());
            assert.equal(2.7, settingBill.getTotalCallCost());
            assert.equal(0.0, settingBill.getTotalSmsCost());

        });

        it("should be able to use the sms cost set", function () {
            let settingBill = BillWithSettings();
            settingBill.setCallCost(1.5);
            settingBill.setSmsCost(1);
            settingBill.setCriticalLevel(6);
            settingBill.makeSms(1);
            settingBill.makeSms(2);
            settingBill.makeSms(3);

            assert.equal(3, settingBill.getTotalCost());
            assert.equal(3, settingBill.getTotalSmsCost());
            assert.equal(0.0, settingBill.getTotalCallCost());
        });

        it("should be able to use the sms cost set for 2 sms at 0.85 each", function () {
            let settingBill = BillWithSettings();
            settingBill.setCallCost(1.5);
            settingBill.setSmsCost(0.85);
            settingBill.setCriticalLevel(6);
            settingBill.makeSms(1);
            settingBill.makeSms(2);

            assert.equal(1.70, settingBill.getTotalCost());
            assert.equal(1.70, settingBill.getTotalSmsCost());
            assert.equal(0.0, settingBill.getTotalCallCost());
        });

        //for critical level


    });

    describe("WARNING AND CRITICAL LEVEL", function () {
        it("should return a class name of 'warning' if warning level is reached", function () {
            let settingBill = BillWithSettings();

            settingBill.setCallCost(1);
            settingBill.setSmsCost(0.5);
            settingBill.setWarningLevel(5);
            settingBill.setCriticalLevel(10);

            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();

            assert.equal("warning", settingBill.totalClassName());
        });

        it("should return a class name of 'critical' if critical level is reached", function () {
            let settingBill = BillWithSettings();

            settingBill.setCallCost(2.5);
            settingBill.setSmsCost(0.5);
            settingBill.setCriticalLevel(10);

            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();

            assert.equal("danger", settingBill.totalClassName());
        })

        it(" it should stop the total from increasing when the critical level is reached", function () {
            let settingBill = BillWithSettings();

            settingBill.setCallCost(2.5);
            settingBill.setSmsCost(0.5);
            settingBill.setCriticalLevel(10);

            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();

            assert.equal("danger", settingBill.totalClassName());
            assert.equal(10, settingBill.getTotalCallCost());
        });
        it(" it should allow to increase after reaching the critical and then upping the critical level", function () {
            let settingBill = BillWithSettings();

            settingBill.setCallCost(2.5);
            settingBill.setSmsCost(0.5);
            settingBill.setWarningLevel(5);
            settingBill.setCriticalLevel(10);

            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();

            assert.equal("danger", settingBill.totalClassName());
            assert.equal(10, settingBill.getTotalCallCost());

            settingBill.setCriticalLevel(20);
            assert.equal("warning", settingBill.totalClassName());

            settingBill.makeCall();
            settingBill.makeCall();

            assert.equal(15, settingBill.getTotalCallCost());
        });

    });
});