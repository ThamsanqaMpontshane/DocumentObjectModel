function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;


    // CALL
    function setCallCost(callCost) {
        theCallCost = callCost;
    }

    function getCallCost() {
        return theCallCost;
    }


    // SMS
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }

    function getSmsCost() {
        return theSmsCost;
    }


    // WARNING
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }


    // CRITICAL
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel;
    }
    //MAKE CALL
    function makeCall() {
        if(!hasReachedCriticalLevel()){
        callCostTotal += getCallCost();
        }
    }
    //MAKE SMS
    function makeSms() {
        if(!hasReachedCriticalLevel()){
        smsCostTotal += getSmsCost();
        }
    }
    //GETTING TOTAL COST
    function getTotalCost() {
        return  getTotalCallCost() + getTotalSmsCost();
    }
    //GETTING TOTAL  CALL COST
    function getTotalCallCost() {
        return callCostTotal;
    }
    //GETTING TOTAL SMS COST
    function getTotalSmsCost() {
        return smsCostTotal;
    }
    //CLASS

    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel();
    }

    function totalClassName() {
        if(hasReachedCriticalLevel()){
             return "danger";
        }      

        if(getTotalCost() >= getWarningLevel()) {
            return "warning";
        }
    }
    
    
    
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        makeSms,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        totalClassName,
        hasReachedCriticalLevel
        // totalClassName1
    };
}
