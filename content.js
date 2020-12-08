var centerArea = document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center");
var searchBtn = document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b");
var counterNode = document.createElement("div");
// counterNode.innerHTML ="Searched <b>0</b> times today.";

var today = new Date();
var todayStr = today.getFullYear().toString() + today.getMonth().toString() + today.getDate().toString();

chrome.storage.sync.get(todayStr, function(result){
    /* render html */
    var searchTimes = result[todayStr];
    if(searchTimes == 0)
        counterNode.innerHTML = "<b>Start your first Search NOW!</b>"
    else
        counterNode.innerHTML = "Searched <b>" + searchTimes + "</b> time(s) today.";
});

/* Get Service Flag, if false, return. */
chrome.storage.sync.get('EnableService', function(result){
    var enable_service = result['EnableService'];
    if(enable_service == true){
        if(centerArea && searchBtn)
            centerArea.insertBefore(counterNode, searchBtn);
    }
});
