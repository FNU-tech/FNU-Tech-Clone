function start(){
    getTime();
   checkFonts();

}
function getTime(){ 
    var today = new Date(); 
    var hrs  = today.getHours();
    var time = hrs.toString() + today.getMinutes().toString() + " HRS";
    var timeElement = document.getElementById("time");
    timeElement.innerHTML = time;
}
function checkFonts(){
    document.fonts.ready.then(function () {
        var loader = document.getElementById("load");
        loader.style.display = "none";
     });
}