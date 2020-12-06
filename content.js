// alert("Hello from your Chrome extension!");

var centerArea = document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center");
var searchBtn = document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b");

var counterNode = document.createElement("div");
counterNode.innerHTML ="Searched <b>0</b> times today.";

var today = new Date();
var todayStr = today.getFullYear().toString() + today.getMonth().toString() + today.getDate().toString();
console.log(todayStr);

chrome.storage.sync.get(todayStr, function(result){
    var searchTimes = result[todayStr];
    counterNode.innerHTML ="Searched <b>" + searchTimes + "</b> time(s) today.";
});

if(centerArea && searchBtn)
    centerArea.insertBefore(counterNode, searchBtn);

