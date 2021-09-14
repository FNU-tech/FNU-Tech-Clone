function scroll(){
    var pageHeight= window.innerWidth;
    window.scrollTo(0, 1000);
}
function getTime(){
    
    
    var today = new Date();
    
    var hrs  = today.getHours();
var time = hrs.toString() + today.getMinutes().toString() + " HRS";
var timeElement = document.getElementById("time");
timeElement.innerHTML = time;
}